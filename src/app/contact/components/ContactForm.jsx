"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SpinnerIcon = () => (
  <svg
    className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    className="mr-2 -ml-1 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        },
      );
  };

  const renderButtonContent = () => {
    switch (status) {
      case "sending":
        return (
          <>
            <SpinnerIcon />
            Mengirim...
          </>
        );
      case "success":
        return (
          <>
            <CheckIcon />
            Terkirim
          </>
        );
      case "error":
        return "Gagal, coba lagi";
      default:
        return "Kirim";
    }
  };

  const getButtonClass = () => {
    let baseClass =
      "relative cursor-pointer flex h-[48px] w-full items-center justify-center overflow-hidden rounded-lg font-bold text-white shadow-xl transition-all duration-300 active:scale-95 disabled:cursor-not-allowed lg:mt-0 lg:h-14 lg:w-[205px]";
    switch (status) {
      case "sending":
        return `${baseClass} bg-gradient-to-r from-gray-400 to-gray-500 opacity-80`;
      case "success":
        return `${baseClass} bg-gradient-to-r from-green-500 to-green-600`;
      case "error":
        return `${baseClass} bg-gradient-to-r from-red-500 to-red-600`;
      default:
        return `${baseClass} bg-gradient-to-r from-[#F49D03] to-[#FF7E3E] hover:from-[#FF7E3E] hover:to-[#F49D03]`;
    }
  };

  return (
    <form ref={form} className="mt-9 lg:mt-16" onSubmit={handleSubmit}>
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="flex flex-col gap-y-4 rounded-lg bg-white px-4 py-8 shadow-lg md:px-8 md:py-10 lg:mx-auto lg:max-w-3xl xl:max-w-5xl">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-8">
            <div className="flex flex-col gap-2 md:w-full">
              <label className="font-bold" htmlFor="name">
                Nama Lengkap
              </label>
              <input
                className="h-8 w-full rounded-sm border border-[#D7D7D7] pl-2 transition focus:border-[#FF7E3E] focus:ring-1 focus:ring-[#FF7E3E]"
                type="text"
                id="name"
                name="name"
                required
                disabled={status === "sending"}
              />
            </div>
            <div className="flex flex-col gap-2 md:w-full">
              <label className="font-bold" htmlFor="telp">
                Nomor Telepon
              </label>
              <input
                className="h-8 w-full rounded-sm border border-[#D7D7D7] pl-2 transition focus:border-[#FF7E3E] focus:ring-1 focus:ring-[#FF7E3E]"
                type="tel"
                id="telp"
                name="telp"
                disabled={status === "sending"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-8">
            <div className="flex flex-col gap-2 md:w-full">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="h-8 rounded-sm border border-[#D7D7D7] pl-2 transition focus:border-[#FF7E3E] focus:ring-1 focus:ring-[#FF7E3E]"
                type="email"
                id="email"
                name="email"
                required
                disabled={status === "sending"}
              />
            </div>
            <div className="flex flex-col gap-2 md:w-full">
              <label className="font-bold" htmlFor="subject">
                Subject
              </label>
              <input
                className="h-8 rounded-sm border border-[#D7D7D7] pl-2 transition focus:border-[#FF7E3E] focus:ring-1 focus:ring-[#FF7E3E]"
                type="text"
                id="subject"
                name="subject"
                required
                disabled={status === "sending"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="pesan">
              Pesan
            </label>
            <textarea
              className="h-12 rounded-sm border border-[#D7D7D7] p-2 transition focus:border-[#FF7E3E] focus:ring-1 focus:ring-[#FF7E3E] lg:h-14"
              name="pesan"
              id="pesan"
              required
              disabled={status === "sending"}
            ></textarea>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <button
              className={getButtonClass()}
              type="submit"
              disabled={status === "sending" || status === "success"}
            >
              <span className="z-10 flex items-center justify-center">
                {renderButtonContent()}
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
