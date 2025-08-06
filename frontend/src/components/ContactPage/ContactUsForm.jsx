import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import CountryCode from "../../data/countrycode.json";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      // console.log("Email Res - ", res)
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="mx-auto w-full max-w-3xl rounded-xl bg-richblack-800 p-8 shadow-md"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <h2 className="mb-6 text-2xl font-semibold text-yellow-50 text-center">
        Contact Us
      </h2>

      {/* Name Fields */}
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-1 lg:w-1/2">
          <label
            htmlFor="firstname"
            className="text-sm font-medium text-richblack-5"
          >
            First Name<span className="text-pink-200"> *</span>
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-xs text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 lg:w-1/2">
          <label
            htmlFor="lastname"
            className="text-sm font-medium text-richblack-5"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* Email */}
      <div className="mt-5 flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-richblack-5">
          Email Address<span className="text-pink-200"> *</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      {/* Phone Number with Country Code */}
      <div className="mt-5 flex flex-col gap-1">
        <label
          htmlFor="phoneNo"
          className="text-sm font-medium text-richblack-5"
        >
          Phone Number<span className="text-pink-200"> *</span>
        </label>
        <div className="flex gap-3">
          <select
            id="countrycode"
            className="w-[100px] rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-richblack-5 outline-none focus:border-yellow-50"
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((ele, i) => (
              <option key={i} value={ele.code}>
                {ele.code} - {ele.country}
              </option>
            ))}
          </select>

          <input
            type="tel"
            id="phoneNo"
            placeholder="12345 67890"
            className="form-style flex-grow"
            {...register("phoneNo", {
              required: {
                value: true,
                message: "Please enter your Phone Number.",
              },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
          />
        </div>
        {errors.phoneNo && (
          <span className="text-xs text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="mt-5 flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-sm font-medium text-richblack-5"
        >
          Message<span className="text-pink-200"> *</span>
        </label>
        <textarea
          id="message"
          rows="5"
          placeholder="Enter your message here"
          className="form-style resize-none"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-xs text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          disabled={loading}
          type="submit"
          className={`w-full rounded-md bg-yellow-50 px-6 py-3 text-[15px] font-bold text-black transition-all duration-200 hover:scale-95 hover:shadow-md disabled:bg-richblack-500`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
