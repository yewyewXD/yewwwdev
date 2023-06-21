/* eslint-disable @next/next/no-img-element */
import React from "react";

const CTASection = () => {
  return (
    <section className="CTASection py-28">
      <div className="container">
        <div className="p-12 pt-14 rounded-3xl bg-secondary text-center mx-6 relative">
          <img
            src="/images/general-star.png"
            className="absolute h-10 w-10 bottom-14 left-32"
            alt=""
          />

          <img
            src="/images/general-star.png"
            className="absolute h-8 w-8 top-10 right-24"
            alt=""
          />

          <div className="font-heading text-5xl font-bold">
            Let&apos;s change the world{" "}
            <u className="underline-main">together</u>
          </div>

          <div className="text-light font-medium font-heading mt-6 mb-8 w-8/12 mx-auto">
            Jump in on a call with me and I will explain how to transform your
            ideas into an actual web3.0 product. I look forward to our
            collaboration!
          </div>

          <button className="button-main">Get a free consultation</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
