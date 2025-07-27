import React, { useState } from "react";
import { assets, categories } from "../../assets/assets"; // Import images and category data
import {useAppContext} from '../../context/AppContext';
import toast from "react-hot-toast";

function AddProduct() {
  // State to hold selected image files
  const [files, setFiles] = useState([]);

  // State to store product name
  const [name, setName] = useState("");

  // State to store product description
  const [description, setDescription] = useState("");

  // State to store selected product category
  const [category, setCategory] = useState("");

  // State to store product price
  const [price, setPrice] = useState("");

  // State to store offer price (discounted)
  const [offerPrice, setOfferPrice] = useState("");

  const {axios} = useAppContext();

  // Handle form submission
  const onSubmitHandler = async (event) => {
    try {

      event.preventDefault();

      const productData = {
        name,
        description : description.split('\n'),
        category,
        price,
        offerPrice 
      }

    const formData = new FormData();
    formData.append('productData', JSON.stringify(productData));

    for(let i = 0; i < files.length; i++ ){
      formData.append('images', files[i]);
    }

    const {data} = await axios.post('/api/product/add', formData)

    if (data.success){
      toast.success(data.message);
      setName('');
      setDescription('');
      setCategory('');
      setPrice('');
      setOfferPrice('');
      setFiles([]);
    }else{
      toast.error(data.message);
    }

    } catch (error) {
      toast.error(error.message);
    }
    
  };

  return (
    // Wrapper with vertical scroll enabled
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between ml-5">
      <form
        onSubmit={onSubmitHandler}
        className="md:p-10 p-4 space-y-5 max-w-lg"
      >
        {/* Product image upload section */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  {/* Hidden file input for image upload */}
                  <input
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles); // Update selected files
                    }}
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  {/* Preview uploaded image or default upload icon */}
                  <img
                    className="max-w-24 cursor-pointer"
                    src={
                      files[index]
                        ? URL.createObjectURL(files[index])
                        : assets.upload_area
                    }
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Product name input */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Product description input */}
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        {/* Category dropdown */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="category"
            className=" md:py-3 py-2 px-3 rounded border-gray-500/40 w-full border md:px-3  mt-1 md:mt-2 outline-none text-sm md:text-base appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em] pr-8 cursor-pointer"
          >
            <option value="">Select Category</option>
            {categories.map((item, index) => (
              <option key={index} value={item.path}>
                {item.path}
              </option>
            ))}
          </select>
        </div>

        {/* Product and offer price fields */}
        <div className="flex items-center gap-5 flex-wrap">
          {/* Product Price */}
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>

          {/* Offer Price */}
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full px-5 py-3 bg-neutral-900 rounded-lg text-white text-center font-medium cursor-pointer mt-5">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;