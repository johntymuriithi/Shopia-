// Sign Up Component For users
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// FIrebase SDK
// Firebase Sturvs
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import app from "../../firebaseConnect.js";

// Import notifications
import { notifySuccess, notifyError } from "../Utils/notifications.js";

// Define Component now

const initialFormData = {
  name: "",
  description: "",
  imgUrl: "",
  category: "",
  brand: "",
  currentPrice: 0,
};

const UploadProduct = () => {
  // Retrieve user Object to send User Id to backend
  const Admin = useSelector((state) => state.user.currentUser);

  const formRef = useRef(null);

  // State to hold Form Data
  const [formData, setFormData] = useState(initialFormData);

  const [image, setImage] = useState(null);
  const [uploadPercent, setUploadPercent] = useState(0);
  const [uploading, setUploading] = useState(false);

  // Form Processing State
  const [formProcess, setFormProcess] = useState({
    loading: false,
    success: true,
    error: false,
  });

  // Handler Functions
  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    setFormProcess({ ...formProcess, loading: true });
    setUploadPercent(0);
    setFormData({
      ...formData,
      currentPrice: Number(formData.currentPrice),
      adminId: Admin._id,
    });

    try {
      // Make Api call to back end and await response
      const response = await fetch("/api/admin/upload-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //   Decode Response and see
      const data = await response.json();

      // When registration fails, throw error
      if (data.statusCode !== 201) {
        throw new Error(data.message);
      }

      // Clean up Form Data
      notifySuccess("File was Successfully Uploaded to Server");
      setFormProcess({ loading: false, success: true, error: false });
      formRef.current.reset();
      setImage(null);
      setUploadPercent(100);
      setUploading(false);

      // Catch Possible Errors
    } catch (error1) {
      notifyError(error1.message);
      setFormProcess({ loading: false, success: false, error: false });
      setUploading(false);
      setUploadPercent(100);
    }
  };

  // onChange Form Handler
  const handleFormChange = (e) => {
    setFormProcess({ loading: false, success: true, error: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Upload if image changes
  const handleFileUpload = async (imageFile) => {
    try {
      setUploading(true);
      const storage = getStorage(app);
      const fileName = imageFile.name + new Date().getTime();
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadPercent(progress);
        },
        (error) => {
          notifyError("File Upload Error");
          setUploading(false);
          error;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
            setFormData({ ...formData, imgUrl: downloadURL })
          );
        }
      );
    } catch (err) {
      setUploading(false);
      notifyError("File Upload Error");
    }
  };

  // call use Effect to call fileUpload
  useEffect(() => {
    if (image) handleFileUpload(image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  // Return to DOM
  return (
    <motion.div
      className="w-full max-w-screen-xl p-4 md:p-16 mx-auto dark:bg-darkSec"
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      exit={{ x: "-130%" }}
    >
      <form
        onSubmit={handleSubmitProduct}
        ref={formRef}
        className="w-full max-w-lg p-6 flex flex-col text-center gap-3 mx-auto shadow-2xl shadow-slate-200  rounded-2xl bg-slate-100 dark:bg-darkTer dark:shadow-darkPry"
      >
        <h1 className="md:text-2xl font-extrabold text-slate-900">
          Upload a Product to the Shop
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={formData.name}
          onChange={handleFormChange}
          minLength={8}
          maxLength={25}
          required
          className="p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 outline valid:outline-2 valid:outline-[#00B207]"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Product Description (Min 100 characters & Max 830 characters)"
          onChange={handleFormChange}
          value={formData.description}
          minLength={100}
          maxLength={830}
          rows={10}
          required
          className="p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 outline valid:outline-2 valid:outline-[#00B207]"
        />
        {/* Product Price */}
        <input
          type="number"
          name="currentPrice"
          placeholder="Enter Product Price"
          required
          onChange={handleFormChange}
          className="p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 outline valid:outline-2 valid:outline-[#00B207] transition ease-in"
        />

        {/* Product Category  */}
        <input
          type="text"
          name="category"
          placeholder="Enter product Categor(ies) separated with a semi-colon ( ; )"
          value={formData.category}
          required
          minLength={8}
          onChange={handleFormChange}
          className={`p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 valid:outline-2 valid:outline-[#00B207]
           outline transition ease-in`}
        />

        {/* Brand Name */}
        <input
          type="text"
          name="brand"
          placeholder="Enter Brand Name"
          value={formData.brand}
          required
          minLength={4}
          maxLength={20}
          onChange={handleFormChange}
          className={`p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 valid:outline-2 valid:outline-[#00B207]
           outline transition ease-in`}
        />
        {/* Image File - Url to be gotten after Upload to firebase  */}
        <input
          type="file"
          name="imgUrl"
          accept="image/*"
          required
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          className={`p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 valid:outline-2 valid:outline-[#00B207]
		  outline transition ease-in`}
        />

        {/* Upload Product */}
        <button
          type="submit"
          className={`p-3 text-sm rounded-lg w-full h-[60px] outline-1 outline-slate-300 outline disabled:text-black disabled:bg-white disabled:cursor-not-allowed ${
            formProcess.loading
              ? "bg-white disabled:bg-white"
              : "bg-[#00B207] text-white} "
          }`}
          disabled={(uploading && uploadPercent < 100) || formProcess.loading}
        >
          {formProcess.loading ? (
            <div className="flex flex-row gap-3 h-full justify-center items-center font-extrabold">
              <img src="walk-loading.gif" alt="..." className="h-full" />{" "}
              <span>UPLOADING PRODUCT</span>
            </div>
          ) : (
            <p>UPLOAD PRODUCT</p>
          )}
        </button>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: String(Math.floor(uploadPercent)) + "%" }}
          className="mx-auto h-10px text-xs text-white bg-[#00B207] overflow-hidden"
        >
          {uploadPercent >= 100 ? "File Ready for Upload" : "Uploading"}
        </motion.div>
      </form>
    </motion.div>
  );
};

export default UploadProduct;
