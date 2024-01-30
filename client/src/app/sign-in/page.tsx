'use client'

import '@/src/styles/blue-button.css'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";

import EverestImage from '@/public/assets/Everest.webp'
import Logo from '@/public/assets/logoWhite.webp'
import FacebookIcon from '@/public/assets/facebook-icon.webp'
import GoogleIcon from '@/public/assets/google-icon.webp'

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
          <h1 className="mb-12 font-extrabold text-6xl">Log in</h1>
          <form className="flex flex-col gap-2 bg-white p-7 rounded-2xl w-[450px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="font-semibold text-slate-700">
              <label>Email </label>
            </div>
            <div className="border border-gray-300 rounded-lg h-12 flex items-center pl-2 transition-all duration-200 ease-in-out focus-within:border-blue-600">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
              <input
                {...register("email", {
                  required: "Email is required",
                  maxLength: 40,
                  minLength: 10,
                })}
                placeholder="Enter your Email"
                className="ml-2 rounded-lg border-none w-5/6 h-full text-black focus:outline-none"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
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
              {errors.password && <p className=" text-red-500">{errors.password.message}</p>}
            </div>
            <div className="flex flex-row items-center gap-2 justify-between">
              <div className='gap-1 flex'>
                <input type="checkbox" />
                <label className='text-slate-700 text-sm font-normal'>Remember me </label>
              </div>
              <span className="text-sm ml-1 font-medium cursor-pointer text-sky-600">Forgot password?</span>
            </div>
            <div className='w-full items-center flex justify-center my-3'>
              <button type='submit' className="blue-btn">
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
            <p className="text-center text-black text-sm my-1">Don't have an account? 
              <Link href='/sign-up' className="text-sm ml-1 font-medium cursor-pointer text-sky-600">Sign Up</Link>
            </p>
            <p className="text-center text-black text-sm my-1">Or With</p>
            <div className="flex flex-row items-center gap-2 justify-between">
              <button className="mt-2 w-full h-12 rounded-lg flex justify-center items-center font-medium gap-2 border bg-white cursor-pointer text-black border-gray-300 hover:border-blue-500 transition-all duration-200 ease-in-out">
                <Image src={GoogleIcon} alt='google icon' width={20} height={20}/>
                Google 
              </button>
              <button className="mt-2 w-full h-12 rounded-lg flex justify-center items-center font-medium gap-2 border bg-white cursor-pointer text-black border-gray-300 hover:border-blue-500 transition-all duration-200 ease-in-out">
                <Image src={FacebookIcon} alt='facebook icon' width={20} height={20}/>
                Facebook 
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}