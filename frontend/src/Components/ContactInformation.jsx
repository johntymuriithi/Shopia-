import { useState } from "react";
import { notifySuccess } from "../Utils/notifications.js";

const ContactInformation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState(false);

  const handleFormChange = (e) => {
    e.preventDefault();
    setFormError(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isAllValid = [
      formData.name,
      formData.email,
      formData.message,
      formData.subject,
    ].every((elem) => elem.length > 5);

    if (!isAllValid) {
      setFormError(true);
      return;
    }

    // Send form data to email
    notifySuccess(
      `Email Sent Successfully. Lol....just kidding ${
        formData.name.split(" ")[0]
      }`
    );

    // Reset Form Data
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 mb-5 max-w-screen-lg mx-auto">
      {/*  */}
      <div className="w-full sm:w-2/4 p-6 flex flex-col justify-center items-center gap-4 text-sm text-center shadow-xl">
        {/* Location  */}
        <section className="sm:mb-5">
          <img src="map-pin.png" alt="Location" className="mx-auto w-[30px]" />
          <p>300, Benin City, Edo State, Nigeria</p>
        </section>

        {/* Email */}
        <section className="sm:mb-5">
          <img src="email.png" alt="Email" className="mx-auto w-[30px]" />
          <p>cr8stevestudios@gmail.com</p>
        </section>

        {/* Phone */}
        <section className="sm:mb-5">
          <img src="phone.png" alt="Location" className="mx-auto w-[30px]" />
          <p>+2348174050194</p>
        </section>

        {/*  */}
      </div>
      {/*  Contact Form */}
      <form className="w-full p-5" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleFormChange}
          required
          className="outline outline-1 outline-slate-200 focus:outline-[#00b207]  p-2 w-full mb-3 rounded-lg  valid:bg-green-200 valid:outline-none transition-all ease-in"
          autoFocus={true}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleFormChange}
          required
          className="outline outline-1 outline-slate-200 focus:outline-[#00b207]  p-2 w-full mb-3 rounded-lg  valid:bg-green-200 valid:outline-none transition-all ease-in"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject of Email"
          value={formData.subject}
          onChange={handleFormChange}
          required
          className="outline outline-1 outline-slate-200 focus:outline-[#00b207]  p-2 w-full mb-3 rounded-lg transition-all ease-in"
        />

        <textarea
          name="message"
          id="message"
          placeholder="Type in your message"
          value={formData.message}
          onChange={handleFormChange}
          required
          className="outline outline-1 outline-slate-200 focus:outline-[#00b207] transition ease-in p-2 w-full mb-3 rounded-lg resize-none h-[200px]"
        ></textarea>

        {formError && (
          <p className="text-center text-red-600 text-xs">
            There is an error in the form. Kinldy check again.
          </p>
        )}
        <input
          type="submit"
          value="Send Message"
          className="outline-none p-2 w-full mb-3 rounded-lg bg-[#00B207] text-white transition-all ease-in hover:brightness-125 hover:shadow-2xl"
        />
      </form>
    </div>
  );
};

export default ContactInformation;
