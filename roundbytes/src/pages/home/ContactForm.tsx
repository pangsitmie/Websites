import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ButtonFill from "../../components/button/ButtonFill";
import { Flex } from "@/components/styles/Flex.styled";
import { H2, H3 } from "@/components/styles/typography/typography.styled";
import { StyledButtonUnderline } from "@/components/styles/button/ButtonUnderline.styled";

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
    <div id="contact" className="">
      <Flex className="mt-10 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-black border-opacity-100 border-solid px-16 h-full">
            <MdOutlineEmail className="text- mb-4 text-center text-[24px]" />
            <h4 className="text-center text-xl">Email</h4>
            <h5 className="text-center">admin@roundbytes.com</h5>
            <StyledButtonUnderline
              className="mt-8 text-center"
            >
              <a href="mailto:jerielisaiah4@gmail.com">
                Send a messge
              </a>
            </StyledButtonUnderline>
          </div>

        </div>

        <form
          className="flex w-full flex-col gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-[100%] rounded-2xl border border-black py-4 px-5 text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-[100%] rounded-2xl border border-black py-4 px-5 text-black"
          />
          <textarea
            name="message"
            rows={2}
            placeholder="Your Message"
            className="w-[100%] rounded-2xl border border-black py-4 px-5 text-black"
          />
          <ButtonFill className="bg-black text-white" text="Send Message" type="submit" />
        </form>
      </Flex>
    </div>
  );
};

export default ContactForm;
