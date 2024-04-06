/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NextResponse, type NextRequest } from 'next/server'
import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider';
import { z } from 'zod';
import { createHmac } from 'crypto';

const signUpSchema = z.object({
  email: z.string().min(5, { message: 'Email is required' }).email({ message: 'Must be a valid email' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }).max(25),
});

type IFormInput = z.infer<typeof signUpSchema>;

export async function POST(req: NextRequest) {

  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const body = await (req.json() as Promise<IFormInput>);
    const { email, password } = body;

    const signUp = async ({ clientId, username, password }: { clientId: string, username: string, password: string }) => {

      const client = new CognitoIdentityProviderClient({ 
        region: process.env.AWS_COGNITO_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      });

      const hasher = createHmac('sha256', process.env.COGNITO_CLIENT_SECRET);
      hasher.update(`${username}${process.env.COGNITO_CLIENT_ID}`);
      const secretHash = hasher.digest('base64');

      const command = new SignUpCommand({
        ClientId: clientId,
        Username: username,
        Password: password,
        SecretHash: secretHash,
      });

      return client.send(command);
    };

    const params = {
      clientId: process.env.COGNITO_CLIENT_ID,
      username: email, // Use email for username
      password,
    };
    
    await signUp(params);
    return NextResponse.json({ message: 'Registration successful' }, { status: 201 })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Registration error:', error);
    let errorMessage = 'An error occurred while registering the user';
    
    if (error && error.code === 'UsernameExistsException') {
        errorMessage = 'Email is already in use';
    } else if (error && Array.isArray(error.errors)) {
        errorMessage = (error.errors as { message: string }[])?.map((e) => e?.message).join(', ');
    }

    return NextResponse.json({ error: errorMessage}, { status: 400 })
  }
}

