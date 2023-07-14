"use client";

/* eslint-disable @next/next/no-img-element */
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CTASection = () => {
  return (
    <section className="CTASection md:py-28 py-20">
      <div className="container">
        <div className="md:p-12 sm:p-8 p-6 md:pt-14 rounded-3xl bg-secondary text-center md:mx-6 relative">
          <img
            src="/images/general-star.png"
            className="absolute h-8 w-8 md:top-10 top-0 md:right-24 right-12 floatingStar animationDelay"
            alt=""
          />

          <img
            src="/images/general-star.png"
            className="absolute sm:h-10 h-6 sm:w-10 w-6 md:bottom-14 bottom-0 md:left-32 sm:left-16 floatingStar"
            alt=""
          />

          <div className="xl:text-5xl md:text-4xl text-3xl font-bold">
            Let&apos;s change the world{" "}
            <u className="underline-main">together</u>
          </div>

          <div className="text-light font-medium md:mt-6 mt-4 md:mb-8 mb-5 md:w-8/12 md:mx-auto">
            <span className="sm:block hidden">
              Hit me up on chat and we will navigate the path towards
              transforming your idea into a remarkable product. See you there!
            </span>

            <span className="sm:hidden">
              We will transform your idea into a remarkable product. See you
              there!
            </span>
          </div>

          <button
            className="button-main"
            onClick={() => {
              if (window?.tidioChatApi) {
                window.tidioChatApi.show();
                window.tidioChatApi.open();
              }
            }}
          >
            Hop on Chat Now{" "}
            <FontAwesomeIcon className="w-4 ml-1" icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
