'use client'
import { UserAuth } from '@/app/context/Authcontext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignupForm = () => {
    const { register, handleSubmit, watch,
        reset,
        formState: { errors }, } = useForm()
    let router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    let [loading, setloading] = useState(false)
    const { createUser, profileUpdate ,googleLogin} = UserAuth()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {


        try {

            await createUser(data.email, data.password)
            await profileUpdate({
                displayName: data.name,
            })
            const res = await fetch("/api/user",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ name: data.name, email: data.email, role: 'user' }),
                });
            if (res.ok) {
                const data = await res.json();
                if (data.message && data.message === "User already exists") {
                    // Handle case where user already exists
                    toast.error('User already exists', {
                        duration: 4000,
                        position: "top-center"
                    });
                } else {
                    // Handle successful creation
                    toast.success('Successfully created!', {
                        duration: 4000,
                        position: "top-center"
                    });
                    router.push('/');
                }
            } else {
                throw new Error(data.message);
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }

    }
    const googleSignin = async () => {
        try {
            let { user } = await googleLogin();
            const res = await fetch("/api/user",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ name: user.displayName, email: user.email, role: 'user' }),
                });
            if (res.ok) {
                const data = await res.json();

                if (data.message && data.message === "User already exists") {
                    // Handle case where user already exists
                    toast.error('User already exists', {
                        duration: 4000,
                        position: "top-center"
                    });
                } else {
                    // Handle successful creation
                    toast.success('Successfully created!', {
                        duration: 4000,
                        position: "top-center"
                    });
                    router.push('/');
                }
            } else {
                throw new Error('registration failed');
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    return (
        <div className='text-white'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="form-control">
                        <label className="py-2 text-xs md:text-sm">Name</label>
                        <input
                            type="text"
                            placeholder="Type here"
                            {...register("name", { required: "name is required" })}
                            className="input input-bordered w-full max-w-full lg:max-w-xl"
                        />

                    </div>
                </div>
                <div className="form-control">
                    <label className="py-2 text-xs md:text-sm">Email</label>
                    <input
                        type="email"
                        placeholder="Type here"
                        {...register("email", { required: " Email is required " })}
                        className="input input-bordered w-full max-w-full lg:max-w-xl "
                    />

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


                    </div>
                    <div className='cursor-pointer items-center pt-8 -ms-7 ' onClick={togglePasswordVisibility}>
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>





                <div className="form-control">
                    <label className="py-2 text-xs md:text-base ">
                        <Link href={"/login"}>
                            Already have account?
                            <span className="font-extrabold"> Log In now</span>
                        </Link>
                    </label>
                </div>

                <div className="text-center py-2">
                    <button className="btn text-white md:w-full overflow-hidden ">

                        Register

                    </button>
                </div>
                {errors.name && (
                    <p className="text-sm pt-1">{errors.name.message}</p>
                )}
                {errors.password && (
                    <p className=" text-sm lg:text-xs xl:text-sm pt-1">
                        {errors.password.message}
                    </p>
                )}
                {errors.email && (
                    <p className="text-sm pt-1">{errors.email.message}</p>
                )}

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
            <Toaster />
        </div>

    );
};

export default SignupForm;