"use client";
import { contact, countries } from "@/utils/constent";
import { ArrowUpIcons } from "@/utils/icons";
import axios from "axios";
import { ChangeEvent, useState } from "react";

const Form = () => {
  const [countryCode, setCountryCode] = useState("+91");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
    message: "",
  });

  const [error, setError] = useState({
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      PhoneNumber: "",
      EmailId: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contact.formDomain,
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          Description: formData?.message,
          created_from: "website",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        // Reset form completely
        setFormData({
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
          message: "",
        });
        setError({
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
          message: "",
        });

        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
        window.open("/thank-you", "_blank");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
      {/* Full Name Field */}
      <div className={`w-full flex flex-col p-4 rounded-lg bg-[#fff]`}>
        <input
          id="fullName"
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Your full name*"
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none max-md:border-b-[.5px] w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.fullName && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field */}
      <div className={`w-full flex flex-col p-4 rounded-lg bg-[#fff]`}>
        <div className="flex items-center w-full h-full max-md:border-b-[.5px]">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-[#343434] placeholder:text-[#343434] focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index + 101}
                value={country.code}
                aria-label={country.name}
                className="bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="PhoneNumber"
            aria-label="Phone Number*"
            placeholder="Mobile number*"
            onChange={handleInputChange}
            value={formData.PhoneNumber}
            className=" ps-1 outline-none no-spinner appearance-auto  w-full h-full text-base text-[#343434] placeholder:text-[#343434] bg-transparent"
          />
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PhoneNumber}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className={`w-full flex flex-col p-4 rounded-lg bg-[#fff]`}>
        <input
          type="text"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Email ID*"
          onChange={handleInputChange}
          value={formData.EmailId}
          className="outline-none max-md:border-b-[.5px] w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.EmailId && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.EmailId}
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className={`w-full flex flex-col p-4 rounded-lg bg-[#fff]`}>
        <textarea
          name="message"
          aria-label="Message*"
          placeholder="Tell us something about your enquiry!"
          onChange={handleInputChange}
          value={formData.message}
          rows={4}
          className="outline-none resize-none max-md:border-b-[.5px] w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.message && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.message}
          </span>
        )}
      </div>
      {/* Submit Button */}

      <button
        type="submit"
        aria-label="Book Now"
        className="text-center py-4 w-full h-full text-white rounded-lg bg-tertiary hover:bg-secondary hover:shadow-lg duration-300 transition-all ease-in-out uppercase"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
        ) : submitSuccess ? (
          "Thank You!"
        ) : (
          <span className="flex items-center justify-center gap-2">
            Submit{" "}
            <span>
              <ArrowUpIcons />
            </span>{" "}
          </span>
        )}
      </button>
    </form>
  );
};

export default Form;
