import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import HeadingTitle from "../../../components/template/HeadingTitle";
import { RiImageAddFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const AddItems = () => {
    const img_hosting_token = import.meta.env.VITE_ImgBBAPI;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
const axiosPublic = useAxiosPublic();
const { register, handleSubmit, reset } = useForm();
const navigate = useNavigate()


const [showName, setShowName] = useState({});
const [showImagePreview, setShowImagePreview] = useState({});
const fileInputRef = useRef();
const handleClearFile = () => {
  setShowName("");
  setShowImagePreview("");
  fileInputRef.current.value = "";
};
const [imageFile, setImageFile] = useState([]); 
const handleImageChange = (event) => {
  const file = event.target.files[0];
  setImageFile(file)
  setShowName(file);
  setShowImagePreview(URL.createObjectURL(file));
};





    const onSubmit = data => {
        const images = imageFile;
        const formData = new FormData();
        formData.append('image', images)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                axiosPublic.post('/add-menu-items', newItem)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            icon: 'success',
                            title: 'Congratulations!',
                            text: `${name} is added successfully`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/dashboard/manage-items')
                    }
                })
            }
        })

    };
    return (
        <div className="max-w-screen-2xl mx-auto container">
                         <Helmet>
        <title>Add Items|BiteCafe</title>
      </Helmet>
          <HeadingTitle text={{ short: 'What is new in menu?', long: 'ADD AN ITEM' }} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="text-2xl font-medium">Recipe Name</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none " />
                </div>
                <div className="flex lg:flex-row flex-col gap-4 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-2xl font-medium">Recipe Category</span>
                        </label>
                        <select defaultValue="Select Recipe Category" {...register("category", { required: true })} className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none">
                            <option disabled>Select Recipe Category</option>
                            <option>Biryani</option>
                            <option>Steak</option>
                            <option>Pizza</option>
                            <option>Burger</option>
                            <option>Pasta</option>
                            <option>Dessert</option>
                            <option>Offer</option>
                            <option>Recommended</option>
                            <option>Popular</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="font-medium text-2xl ">Recipe Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Recipe Price" className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>
                </div>
                <div className="form-control my-6">
                    <label className="label">
                        <span className="font-medium text-2xl ">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="flex h-36 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" placeholder="Recipe Details"></textarea>
                </div>
                <div className="my-10">
                    {showName?.name ? (
                      <div className="mx-auto flex max-w-[600px] items-center gap-x-6 rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white">
                        <img
                          className="size-[100px] h-[100px] w-full max-w-[150px] rounded-lg object-cover"
                          src={showImagePreview}
                          alt={showName?.name}
                        />
                        <div className="flex-1 space-y-1.5 overflow-hidden">
                          <h5 className="text-xl font-medium tracking-tight truncate">
                            {showName?.name}
                          </h5>
                          <p className="text-gray-500">
                            {(showName.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                        <div onClick={handleClearFile}>
                          <IoCloseSharp className="text-5xl" />
                        </div>
                      </div>
                    ) : (
                      <label
                        className="mx-auto flex max-w-[600px] flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white"
                        htmlFor="file5"
                      >
                        <RiImageAddFill className="text-6xl" />
                        <div className="space-y-1.5 text-center">
                          <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">
                            Upload your recipe picture
                          </h5>
                          <p className="text-sm text-gray-500">
                            File Should be in PNG, JPEG or JPG format
                          </p>
                        </div>
                      </label>
                    )}

                    <input
                  
                     name="photoURL"
                      ref={fileInputRef}
                      onChange={handleImageChange} 
                      className="hidden"
                      id="file5"
                      type="file"
                    />
                  </div>
       
                <button className="btn text-2xl px-8 py-2 bg-amber-600
                 text-white" type="submit"  >Add Item <i className="fa-solid fa-utensils"></i></button>
            </form>
        </div>
    );
};

export default AddItems;