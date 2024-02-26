'use client'
import { UserAuth } from '@/app/context/Authcontext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
    const { register, handleSubmit, watch,
        reset,
        formState: { errors }, } = useForm()
    let router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const { signIn,googleLogin  } = UserAuth()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        let { email, password } = data;
        try {
          await signIn(email, password);
          router.push('/')
          reset()
        } catch (error) {
        }
    }

    const googleSignin = async () => {
        try {
          await googleLogin();
    
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className='text-white'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="py-2 text-xs md:text-sm">Email</label>
                    <input
                        type="email"
                        placeholder="Type here"
                        {...register("email", { required: " Email is required " })}
                        className="input input-bordered w-full max-w-full lg:max-w-xl "
                    />
                    {errors.email && (
                        <p className="text-sm pt-1">{errors.email.message}</p>
                    )}
                </div>


                <div className="flex items-center  w-full">

                    <div className="form-control w-full ">
                        <label className="py-2 text-xs md:text-sm">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Type here"
                            {...register("password", {
                                required: "enter password",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                            className="input input-bordered  w-full max-w-full "
                            maxLength={8}
                        />

                        {errors.password && (
                            <p className=" text-sm lg:text-xs xl:text-sm pt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className='cursor-pointer items-center pt-8 -ms-7 ' onClick={togglePasswordVisibility}>
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>





                <div className="form-control">
                    <label className="py-2 text-xs md:text-base ">
                        <Link href={"/signup"}>
                            Dont any have account?
                            <span className="font-extrabold"> Sign up now</span>
                        </Link>
                    </label>
                </div>

                <div className="text-center py-2">
                    <button className="btn text-white md:w-full overflow-hidden ">

                        Login

                    </button>
                </div>
            </form>
            <div className=" divider  text-sm">OR LogIn with </div>
        <div className=" flex items-center justify-center py-1 ">
          <button
            className="btn btn-circle btn-outline  mx-2"
            onClick={googleSignin}
          >
              G
           
          </button>
         
        </div>
      
        </div>

    );
};

export default Login;