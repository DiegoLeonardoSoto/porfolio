import { GithubIcon, LinkedinIcon, SendIcon, WhatsappIcon } from "../assets";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d44t5no", "template_0y2nzsm", formRef.current, {
        publicKey: "clCabzt-0ErERpptp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      className="mt-20 flex w-3/5 flex-col gap-6"
    >
      <div className="flex gap-8">
        <div className="flex-1">
          <label
            htmlFor="email-address-icon"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-current dark:text-gray-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </div>
            <input
              type="email"
              name="user_email"
              id="email-address-icon"
              className="peer block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 outline-none duration-200 focus:border-black focus:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>

        <div className="flex-1">
          <label
            htmlFor="email-address-icon"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Asunto
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-current dark:text-gray-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
              </svg>
            </div>
            <input
              type="text"
              name="from_name"
              className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 outline-none duration-200 focus:border-black focus:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="asunto"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="email-address-icon"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-current dark:text-gray-400"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
          <input
            name="user_name"
            type="text"
            className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 outline-none duration-200 focus:border-black focus:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="nombre"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none duration-200 focus:border-black focus:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Dejame un mensaje..."
        ></textarea>
      </div>
      <div className="flex justify-between">
        <div className="font-Roboto">
          <div
            style={{
              animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
            }}
          >
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 duration-200"
            >
              <div className="clip relative flex w-full -translate-x-1 -translate-y-1 items-center justify-center overflow-hidden rounded-full border-2 border-slate-900 bg-white px-4 py-2 duration-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:bg-[#fddf28] after:content-[''] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[#fddf28] active:translate-x-0 active:translate-y-0">
                <h4 className="z-10 flex w-full items-center justify-center gap-3 duration-200">
                  Enviar
                  <SendIcon />
                </h4>
              </div>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <a href="https://github.com/DiegoLeonardoSoto" target="_blank">
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/diego-soto-72a097238/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>

          <a href="https://wa.me/542974326618" target="_blank">
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </form>
  );
};
