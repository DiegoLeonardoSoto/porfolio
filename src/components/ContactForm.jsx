import {
  GithubIcon,
  SendIcon,
  MailContactIcon,
  ClipContactIcon,
  UserContactIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "../assets";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation("global");
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(() => {
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

    toast.success("Mensaje enviado", {
      description: "Gracias por el mensaje",
    });
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      ref={formRef}
      className="mt-20 flex w-full flex-col gap-6"
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-14">
        <div className="flex-1">
          <Input
            label="Email"
            name="user_email"
            type="email"
            placeholder="name@gmail.com"
            register={{ ...register("user_email") }}
            errorMessage={errors.user_email?.message}
            icon={<MailContactIcon />}
          />
        </div>

        <div className="flex-1">
          <Input
            label={t("contact.inputSubject.label")}
            name="from_name"
            type="text"
            placeholder={t("contact.inputSubject.placeholder")}
            register={{ ...register("from_name") }}
            errorMessage={errors.from_name?.message}
            icon={<ClipContactIcon />}
          />
        </div>
      </div>

      <div>
        <Input
          label={t("contact.inputName.label")}
          name="user_name"
          type="text"
          placeholder={t("contact.inputName.placeholder")}
          register={{ ...register("user_name") }}
          errorMessage={errors.user_name?.message}
          icon={<UserContactIcon />}
        />
      </div>
      <div>
        <Input
          label={t("contact.inputMessage.label")}
          name="message"
          type="textarea"
          placeholder={t("contact.inputMessage.placeholder")}
          register={{ ...register("message") }}
          errorMessage={errors.message?.message}
        />
      </div>
      <div className="flex flex-row-reverse justify-around gap-8 dark:text-white md:justify-start">
        <a href="https://github.com/DiegoLeonardoSoto" target="_blank">
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/diego-soto-72a097238/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>

        <a href="https://wa.me/542974326618" target="_blank">
          <WhatsAppIcon />
        </a>
      </div>
      <div className="w-full font-Roboto md:w-48">
        <div
          style={{
            animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          }}
        >
          <button
            type="submit"
            className="w-full rounded-full bg-black duration-200 dark:border-2 dark:border-black dark:bg-neutral-500"
          >
            <div className="clip relative flex w-full -translate-x-1 -translate-y-1 items-center justify-center overflow-hidden rounded-full border-2 border-slate-900 bg-white px-4 py-2 duration-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:bg-[#fddf28] after:content-[''] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[#fddf28] active:translate-x-0 active:translate-y-0">
              <h4 className="z-10 flex w-full items-center justify-center gap-3 duration-200">
                {t("contact.submitButton")}
                <SendIcon />
              </h4>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};
