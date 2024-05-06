import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Instantiate Toast notification
const notifySuccess = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

// Instantiate Toast notification
const notifyError = (msg) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

// Instantiate Toast notification
const notifyInfo = (msg) =>
  toast.info(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

// Export the functions

export { notifySuccess, notifyError, notifyInfo };
