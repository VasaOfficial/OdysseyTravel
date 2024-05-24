'use client'
import '@/src/styles/blue-button.css'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/firebase/config';
import { UserAuth } from '../../../context/AuthContext';
import { useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import axios, { type AxiosResponse }  from 'axios';

import EverestImage from '@/public/assets/auth/Everest.webp'
import Logo from '@/public/assets/logoWhite.webp'
import GithubIcon from '@/public/assets/auth/github.webp'
import GoogleIcon from '@/public/assets/auth/google-icon.webp'

const signUpSchema = z.object({
  email: z.string().min(5, { message: 'Email is required' }).email({ message: 'Must be a valid email'}),
  password: z.string().min(8, { message: 'Password must be atleast 8 characters' }).max(25),
})

type IFormInput = z.infer<typeof signUpSchema>;

type RecaptchaResponse = {
  success: boolean;
}

export default function Login() {
  const { register, formState: { errors, isValid }, handleSubmit } = useForm<IFormInput>({ resolver: zodResolver(signUpSchema)})
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const router = useRouter()
  const { GithubSignIn, GoogleSignIn } = UserAuth()
  const [honeypotValue, setHoneypotValue] = useState('');
  const [honeypotFieldName, setHoneypotFieldName] = useState(''); 
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [incorrectCredentials, setincorrectCredentials] = useState('');

  const loginMutation = async (data: IFormInput) => {
    const { email, password } = data;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const res = await signInWithEmailAndPassword(auth, email, password)
      alert('User was successfully signed in:');
      router.push('/')
    } catch (error) {
      setincorrectCredentials('Invalid email or password. Please try again.');
      throw error;
    }
  };

  const {mutate} = useMutation({
    mutationFn: loginMutation
  })

  useEffect(() => {
    // Generate a random field name for the honeypot field
    const fieldName = Math.random().toString(36).substring(7);
    setHoneypotFieldName(fieldName);
  }, []);
  
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // adds honeypots against bots
    if (honeypotValue) { 
      return;
    }

    if (!executeRecaptcha) {
      return
    }
    
    try {
      const gRecaptchaToken = await executeRecaptcha('registerSubmit');

      const response: AxiosResponse<RecaptchaResponse> = await axios({
        method: 'post',
        url: '/api/recaptcha',
        data: {
          gRecaptchaToken,
        },
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });

      if (response?.data?.success === true) {
        // If reCAPTCHA verification is successful, proceed with form submission
        try {
          mutate(data); // Trigger the mutation with form data
        } catch (error) {
          alert('An error occurred during form submission.')
        }
      } else {
        alert('reCAPTCHA verification failed')
      }
    } catch (error) {
      alert('Error verifying reCAPTCHA')
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      if (GoogleSignIn) {
        await GoogleSignIn();
        router.push('/')
      }
    } catch (error) {
      alert('An error occurred during Google sign-in. Please try again later.');
    }
  };

  const handleGithubSignIn = async () => {
    try {
      if (GithubSignIn) {
        await GithubSignIn();
        router.push('/')
      }
    } catch (error) {
      alert('An error occurred during GitHub sign-in. Please try again later.');
    }
  };

  // Reset user password
  const handleForgotPasswordSubmit = async () => {
    try {
      await sendPasswordResetEmail(auth, forgotPasswordEmail);
      // Notify the user that a password reset email has been sent
      alert('A password reset email has been sent to your email address.');
      // Close the modal
      setShowForgotPasswordModal(false);
    } catch (error) {
      alert('Error sending password reset email:');
    }
  };
  
  return (
    <section className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <div className="z-1 relative h-full w-full">
          <Image
            src={EverestImage}
            alt="Everest"
            className="h-screen"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute top-0 left-0 text-white p-4 m-16">
          <Link href='/'>
            <Image className="mb-10" src={Logo} alt="logo" width={300} height={300} />
          </Link>
          <h1 className="mb-12 font-extrabold text-6xl">Log in</h1>
          <div className='flex flex-col gap-2 bg-white p-7 rounded-2xl w-[450px]'>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="font-semibold text-slate-700">
                <label>Email </label>
              </div>
              <div className="border border-gray-300 rounded-lg h-12 flex items-center pl-2 transition-all duration-200 ease-in-out focus-within:border-blue-600">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    maxLength: 40,
                    minLength: 10,
                  })}
                  placeholder="Enter your Email"
                  className="ml-2 rounded-lg border-none w-5/6 h-full text-black focus:outline-none"
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              {incorrectCredentials && <p className="text-red-500 mb-2">{incorrectCredentials}</p>}
              <div className="font-semibold text-slate-700">
                <label>Password </label>
              </div>
              <div className="border border-gray-300 rounded-lg h-12 flex items-center pl-2 transition-all duration-200 ease-in-out focus-within:border-blue-600">
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                    maxLength: 25,
                  })}
                  type="password"
                  placeholder="Enter your Password"
                  className="ml-2 rounded-lg border-none w-5/6 h-full text-black focus:outline-none"
                />
              </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              <span className="text-sm ml-1 font-medium cursor-pointer text-sky-600" onClick={() => setShowForgotPasswordModal(true)}>Forgot password?</span>
              <div className='w-full items-center flex justify-center mt-8 mb-5'>
                <button type='submit' className="blue-btn" disabled={!isValid}>
                  Log In
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="text-center text-black text-sm mb-5">Don't have an account? 
                <Link href='/pages/auth/register' className="text-sm ml-1 font-medium cursor-pointer text-sky-600">Sign Up</Link>
              </p>
              <p className="text-center text-black text-sm my-1">Or With</p>
              <input
                type="text"
                value={honeypotValue}
                onChange={(e) => setHoneypotValue(e.target.value)}
                className="hidden"
                name={honeypotFieldName}
              />
            </form>
            <div className="flex flex-row items-center gap-2 justify-between">
              <button className="mt-2 w-full h-12 rounded-lg flex justify-center items-center font-medium gap-2 border bg-white cursor-pointer text-black border-gray-300 hover:border-blue-500 transition-all duration-200 ease-in-out"
              onClick={handleGoogleSignIn}>
                <Image src={GoogleIcon} alt='google button' width={20} height={20}/>
                Google 
              </button>
              <button className="mt-2 w-full h-12 rounded-lg flex justify-center items-center font-medium gap-2 border bg-white cursor-pointer text-black border-gray-300 hover:border-blue-500 transition-all duration-200 ease-in-out"
              onClick={handleGithubSignIn}>
                <Image src={GithubIcon} alt='github button' width={20} height={20}/>
                Github 
              </button>
            </div>
            {/* PASSWORD RESET FORM */}
            {showForgotPasswordModal && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
                  <input
                    type="email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border border-gray-300 rounded-lg h-12 px-4 w-full mb-4 text-black"
                  />
                  <button onClick={handleForgotPasswordSubmit} className="blue-btn w-full text-center">Submit</button>
                  <button onClick={() => setShowForgotPasswordModal(false)} className="mt-2 w-full text-center text-sm text-gray-500">Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}