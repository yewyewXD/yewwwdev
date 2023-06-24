/* eslint-disable @next/next/no-img-element */
import {
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CTASection = () => {
  return (
    <section className="CTASection py-28">
      <div className="container">
        <div className="p-12 pt-14 rounded-3xl bg-secondary text-center mx-6 relative">
          <img
            src="/images/general-star.png"
            className="absolute h-10 w-10 bottom-14 left-32 floatingStar"
            alt=""
          />

          <img
            src="/images/general-star.png"
            className="absolute h-8 w-8 top-10 right-24 floatingStar animationDelay"
            alt=""
          />

          <div className="xl:text-5xl text-4xl font-bold">
            Let&apos;s change the world{" "}
            <u className="underline-main">together</u>
          </div>

          <div className="text-light font-medium mt-6 mb-8 w-8/12 mx-auto">
            Hit me up on chat and we will navigate the path towards transforming
            your idea into a remarkable product. See you there!
          </div>

          <button className="button-main">
            Hop on Chat Now{" "}
            <FontAwesomeIcon className="w-4 ml-1" icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
