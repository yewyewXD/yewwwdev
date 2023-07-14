"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faStar } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const techs = [
    "nextjs",
    "reactjs",
    "nodejs",
    "javascript",
    "sass",
    "mongodb",
    "moralisweb3",
    "ethersjs",
  ];

  return (
    <section className="HeroSection xl:pt-32 pt-20">
      <div className="container lg:grid grid-cols-2 border-b sm:pb-24 pb-14">
        <div className="flex flex-col justify-center lg:text-left text-center">
          <div className="flex flex-col relative">
            <big className="section-title">react software engineer</big>
            <h1 className="my-6 xl:text-6xl md:text-5xl text-4xl font-bold leading-none">
              Make your dream app <u className="underline-main">come true</u>
            </h1>

            <div className="lg:hidden flex justify-center mb-6">
              <Image
                src="/images/hero-nft-card.gif"
                className="rounded-xl"
                alt=""
                width={200}
                height={200}
                quality={60}
              />
            </div>

            <p className="text-light">
              Are you a visionary founder seeking to make a positive impact on
              the world? Look no further! Together, we will be crafting
              meaningful solutions that change lives.
            </p>

            <div className="lg:mt-8 mt-6 flex lg:flex-row flex-col items-center">
              <button
                onClick={() => {
                  if (window?.tidioChatApi) {
                    window.tidioChatApi.show();
                    window.tidioChatApi.open();
                  }
                }}
                className="button-main lg:w-auto w-full lg:mb-0 mb-6"
              >
                Let&apos;s Talk Business
              </button>

              <div className="lg:ml-7 flex items-center underline hoverOpacity">
                <FontAwesomeIcon icon={faImage} className="w-4 mr-2" />
                <a href="#projects">
                  <big>View Projects</big>
                </a>
              </div>
            </div>

            <img
              src="/images/general-star.png"
              className="floatingStar absolute h-9 w-9 top-0 lg:right-0 lg:left-auto left-0 shadow"
              alt=""
            />

            <img
              src="/images/general-star.png"
              className="floatingStar absolute h-7 w-7 lg:bottom-0 -bottom-4 xl:right-24 right-0 animationDelay"
              alt=""
            />
          </div>

          <div className="lg:mt-20 mt-14 flex lg:justify-start justify-center items-center">
            <div className="flex items-center border-r sm:pr-7 pr-4">
              <Image
                src="/images/brand/upwork.png"
                alt=""
                className="rounded-full"
                height={40}
                width={40}
              />
              <big className="text-light ml-3 font-semibold">
                TOP RATED 2021
              </big>
            </div>

            <div className="flex items-center sm:pl-9 pl-4">
              <h2>4.9</h2>
              <div className="text-light sm:ml-4 ml-3 flex items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "rgb(255, 175, 43)" }}
                  className="sm:w-3 w-5 mr-1"
                />

                <small className="font-semibold sm:inline hidden">
                  AVG RATING
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex hidden justify-end font-semibold text-sm">
          <div className="HeroCard">
            <div className="xl:h-96 h-80 xl:w-96 w-80 rounded-2xl mb-3 relative">
              <Image
                src="/images/hero-nft-card.gif"
                className="rounded-2xl"
                alt=""
                fill
                quality={60}
              />
              <div className="absolute h-full w-full opacity-10 bg-main rounded-2xl"></div>
            </div>

            <div className="px-2 flex justify-between items-center">
              <div>
                <div className="text-dark" style={{ marginBottom: "2px" }}>
                  React Software Engineer
                </div>
                <div className="text-base">KangWei Yew</div>
              </div>

              <div className="flex items-center">
                <a
                  className="hoverOpacity mr-2 flex items-center"
                  href="https://www.linkedin.com/in/yewyewxd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/brand/linkedin.png"
                    alt=""
                    className="rounded-full"
                    height={30}
                    width={30}
                  />
                </a>
                <a
                  className="flex items-center hoverOpacity"
                  href="https://github.com/yewyewXD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/brand/github.png"
                    alt=""
                    className="rounded-full"
                    height={30}
                    width={30}
                  />
                </a>
              </div>
            </div>
            <div className="lg:mt-4 p-3 bg-gray-700 rounded-2xl">
              <div className="h-full w-full grid grid-cols-2">
                <div>
                  <div className="text-dark mb-1">Availability</div>
                  <div>20h / week</div>
                </div>
                <div>
                  <div className="text-dark mb-1">Best skills</div>
                  <div>Next, React, Node, Tailwind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10 lg:flex hidden xl:justify-evenly justify-between opacity-70">
        {techs.map((tech) => (
          <div className="" key={`icon-${tech}`}>
            <Image
              src={`/images/tech/${tech}.png`}
              alt=""
              height={75}
              width={75}
              quality={60}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
