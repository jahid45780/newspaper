import { useForm } from "react-hook-form";
import { useState } from 'react';
import Select from 'react-select';

const AddArticles = () => {
    const [value, setValue] = useState(null)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'Breaking News', label: 'Breaking News' },
        { value: 'Politics', label: 'Politics' },
        { value: 'Technology', label: 'Technology' },
        { value: 'Health', label: 'Health' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Science', label: 'Science' },
        { value: 'Environment', label: 'Environment' },

    ];



    const { register, handleSubmit } = useForm();
    const onSubmit = data => { 
        data.tag=value
        console.log(data);
       
    } ;




    return (
        <div className=" max-w-6xl mx-auto" >
            <form onSubmit={handleSubmit(onSubmit)} >
                <h1 className=" text-5xl text-center font-bold rounded-box shadow-lg mt-3 p-3" > Add Article </h1>
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text"> Title</span>
                    </label>
                    <input type="text"
                        placeholder="Title "
                        {...register("title")}
                        required
                        className="input input-bordered border-2
                        border-red-100 w-full" />

                </div>

                <div className=" flex items-center gap-2" >
                    {/* publisher */}

                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text"> Publisher </span>
                        </label>
                        <input type="text"
                            placeholder="Publisher"
                            {...register("publisher")}
                            required
                            className="input input-bordered border-2 border-red-100 w-full" />

                    </div>


                    {/* ,tags*/}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text"> Select Tag </span>
                        </label>
                        <Select options={options} defaultValue={value} placeholder='select your tag..' onChange={setValue} isMulti isSearchable
                            noOptionsMessage={() => "no tag found"}
                            className=' border-2 border-red-100 bordered '
                        >

                        </Select>




                    </div>

                </div>
                {/* Article details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Article Description</span>
                    </label>
                    <textarea {...register("details")} className="textarea border-2 border-red-100 textarea-bordered h-28" placeholder="Articles Details"></textarea>
                </div>

                <div className=" mt-4 mb-3" >
                    <input type="file" {...register("file")} className="file-input file-input-bordered border-2 border-red-100 w-full max-w-xs" />
                </div>


                <button className=" btn btn-outline border-2 border-red-100 w-full" >
                    Add Article
                </button>
            </form>



        </div>
    );
};

export default AddArticles;