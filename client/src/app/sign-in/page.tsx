'use client'

import '@/src/styles/blue-button.css'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import EverestImage from '@/public/assets/Everest.webp'
import Logo from '@/public/assets/logoWhite.webp'
import { useForm, type SubmitHandler } from "react-hook-form";

const signUpSchema = z.object({
  email: z.string().min(5, { message: "Email is required" }).email({ message: "Must be a valid email"}),
  password: z.string().min(8, { message: "Password must be atleast 8 characters" }).max(25),
})

type IFormInput = z.infer<typeof signUpSchema>;

export default function SignIn() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>({ resolver: zodResolver(signUpSchema)});
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

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
          <h1 className="mb-3 font-extrabold text-6xl">Log in</h1>
          <div className="flex gap-2">
            <p>Don't have an account?</p>
            <Link className="text-sky-600" href='/sign-up'>Register</Link>
          </div>
          <div className='flex flex-col max-w-md w-96'>
            <div className="flex gap-5 my-5 text-center">
              <div className="text-black p-5 w-full bg-white rounded-lg cursor-pointer">Google</div>
              <div className="text-black p-5 w-full bg-white rounded-lg cursor-pointer">Facebook</div>
            </div>
            <div className="flex items-center">
              <div className="flex-1 border-t-2 border-white"></div>
              <p className="mx-4 text-white">or</p>
              <div className="flex-1 border-t-2 border-white"></div>
            </div>
            {/*FORM */}
            <form className="flex flex-col mt-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <input
                  {...register("email", {
                    required: "Email is required",
                    maxLength: 40,
                    minLength: 10,
                  })}
                  placeholder="Email"
                  className="text-black p-4 rounded-lg mb-1 w-full"
                />
                {errors.email && <p className="mb-2">{errors.email.message}</p>}
              </div>
              <div className='mb-5'>
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
                  placeholder="Password"
                  className="text-black p-4 rounded-lg mb-1 w-full"
                />
                {errors.password && <p className=" text-red-500">{errors.password.message}</p>}
                <Link href='/' className='text-sky-600'>Forgot password?</Link>
              </div>
              <button type='submit' className="button">
                Log In
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}