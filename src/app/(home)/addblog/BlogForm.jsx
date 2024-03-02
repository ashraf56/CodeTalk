'use client'
import { UserAuth } from '@/app/context/Authcontext';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated()


const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'node', label: 'Node.js' },
    { value: 'deno', label: 'Deno' },
    { value: 'python', label: 'Python' },
    { value: 'django', label: 'Django' },
    { value: 'flask', label: 'Flask' },
    { value: 'java', label: 'Java' },
    { value: 'spring', label: 'Spring' },
    { value: 'csharp', label: 'C#' },
    { value: 'dotnet', label: 'ASP.NET' },
    { value: 'ruby', label: 'Ruby on Rails' },
    { value: 'php', label: 'PHP' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'go', label: 'Golang' },
    { value: 'rust', label: 'Rust' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'Javascript', label: 'Javascript' }
]

const BlogForm = () => {
    let { user } = UserAuth()
    let [selcetOption, setSelectOption] = useState([])

    const [editorContent, setEditorContent] = useState('');
    const router = useRouter();
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm()
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];


    const handleOnchange = sOption => {
        setSelectOption(sOption)

    }
    const onSubmit = async (data) => {

        try {

            const selectedOptions = selcetOption.map((option) => option.value);
            data.select = selectedOptions
            const result = await fetch('/api/blog',
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        status: 'pending',
                        date: data.date,
                        title: data.title,
                        author: data.author,
                        content: editorContent,
                        email: data.email,
                        tag: data.select

                    })
                }
            )

            const allBlogData = await result.json();

            if (allBlogData) {
                toast.success('success')
                router.refresh()

                reset()

            }
            else {
                throw new Error("Failed to add");
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" defaultValue={user?.email}  {...register("email")} readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input type="text" placeholder="author" defaultValue={user?.displayName}   {...register("author")} className="input input-bordered" />



                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date
                        </span>
                    </label>
                    <input type="date" placeholder="Date" defaultValue={formattedDate} {...register("date", { required: "Please Fill up this feild" })} className="input input-bordered" />
                    {errors.date && <p className="text-error pt-1">{errors.date.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="title"  {...register("title", {
                        required: "title is required",
                    })} className="input input-bordered" />
                    {errors.title && <p className="text-error pt-1">{errors.title.message}</p>}
                </div>
                <div className="form-control">
                    <label className="py-2 ps-2 text-xs md:text-sm">Topic</label>
                    <Select
                        defaultValue={selcetOption}
                        components={animatedComponents}
                        onChange={handleOnchange}
                        isMulti={true}
                        options={options}
                        className="basic-multi-select  "

                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <ReactQuill
                        value={editorContent}
                        onChange={setEditorContent}
                        theme="snow"
                        className="h-96 textarea-secondary"
                        modules={{ toolbar: true }}
                        placeholder="Description"
                    />
                </div>


                <div className="form-control mt-20">
                    <button className="bg-[#0072BB] text-base text-white  py-3 px-4 rounded-md w-52 uppercase  flex justify-center items-center">
                        add
                    </button>
                </div>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default BlogForm;