import ReadMoreBox from "./ReadMoreBox";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-third flex flex-col items-center gap-4 py-12 lg:flex-row">
      <div className="mt-2 px-5 text-start space-y-8 lg:mx-48">
        <h2>Get In Touch</h2>
        <p className="block lg:hidden">
          Please do not hesitate to get in touch for any question or inquiry.
          Any information you provide is strictly confidential.
        </p>
        <p className="hidden lg:block">
          Please do not hesitate to get in touch for any question or inquiry.
          Any information you provide is strictly confidential. Sessions can be
          conducted both in-person at the clinic or online through video-call.
        </p>

        <div className="space-y-2">
          <span className="uppercase font-tenor">Clinic hours</span>
          <p>Monday - Friday 10:00 am to 7:00 pm</p>
        </div>
        <div className="space-y-2 lg:hidden">
          <span className="uppercase font-tenor">Phone</span>
          <p>+961 3 165 333</p>
        </div>
        <div className="space-y-2">
          <span className="uppercase font-tenor">Address</span>
          <p>Demco Towers, Bloc C, 11th Floor Antelias, Lebanon.</p>
        </div>
        <div className="space-y-2 lg:hidden">
          <span className="uppercase font-tenor">Email</span>
          <p>anita@anitapapas.com</p>
          <p>anitapapas@hotmail.com</p>
        </div>
        <div className="hidden lg:flex flex-row gap-36 justify-start w-full">
          <div className="space-y-2">
            <span className="uppercase font-tenor">Phone</span>
            <p>+961 3 165 333</p>
          </div>
          <div className="space-y-2">
            <span className="uppercase font-tenor">Email</span>
            <p>anita@anitapapas.com</p>
          </div>
        </div>
        <ReadMoreBox text={"Send us a message"} />
        <div className="flex flex-row gap-4 items-center">
          <span>Follow me on</span>
          <Link className="rounded-full border-2 border-primary w-fit h-fit p-3 hover:border-0">
            <img
              src="/images/Linked in.png"
              alt="linked In Icon"
              className="w-4 h-4 object-contain"
            />
          </Link>
          <Link className="rounded-full border-2 border-primary w-fit h-fit p-3 hover:border-0">
            <img
              src="/images/Youtube.png"
              alt="linked In Icon"
              className="w-4 h-4 object-contain"
            />
          </Link>
          <Link className="rounded-full border-2 border-primary w-fit h-fit p-3 hover:border-0">
            <img
              src="/images/Facebook.png"
              alt="linked In Icon"
              className="w-4 h-4 object-contain"
            />
          </Link>
        </div>
      </div>
      <img
        src="/images/Image Author2.png"
        alt="Image of author"
        className="px-4 my-8"
      />
      <span className="self-start opacity-35 pl-4 lg:hidden">
        Copyright © 2022 Anita Papas
      </span>
    </footer>
  );
};

export default Footer;
