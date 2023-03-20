import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import ButtonFill from "../../components/ButtonFill";

type Props = {};

const ContactForm = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // service id, template id, public key, yang eth.link(template_ob64eth)
        "service_pg0ukrr",
        "template_n7my7so",
        form.current!,
        "zhONXOXMrkk6GGtjZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div id="contact" className="w-full py-10 px-[15%]">
      <h5 className="mb-4 text-center text-2xl text-primary-100">
        Get In Touch
      </h5>
      <h2 className="text-center text-6xl">Contact Me</h2>

      <div className="mt-20 flex w-full items-center justify-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center rounded-[24px] bg-secondary-100 px-20 py-8">
            <MdOutlineEmail className="text- mb-4 text-center text-[30px]" />
            <h4 className="text-center text-xl">Email</h4>
            <h5 className="text-center">admin@roundbytes.com</h5>
            <a
              href="mailto:admin@roundbytes.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-center text-primary-100"
            >
              Send a messge
            </a>
          </div>

          <div className="flex flex-col items-center justify-center rounded-[24px] bg-secondary-100 px-20 py-8">
            <BsLinkedin className="text- mb-4 text-center text-[30px]" />
            <h4 className="text-center text-xl">LinkedIn</h4>
            <h5 className="text-center">Jeriel Isaiah Layantara</h5>
            <a
              href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-center text-primary-100"
            >
              Send a messge
            </a>
          </div>
        </div>
        {/* end of contact option */}

        <form
          className="flex w-full flex-col gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-[100%] rounded-xl border-2 border-primary-100 bg-transparent py-4 px-4 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-[100%] rounded-xl border-2 border-primary-100 bg-transparent py-4 px-4 text-white"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message required"
            className="w-[100%] rounded-xl border-2 border-primary-100 bg-transparent py-4 px-4 text-white"
          />
          <ButtonFill text="Send Message" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;