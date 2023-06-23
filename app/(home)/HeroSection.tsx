/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faImage,
  faMountainSun,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

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
    <section className="HeroSection pt-32">
      <div className="container grid grid-cols-2 border-b pb-24">
        <div className="flex flex-col">
          <div className="flex flex-col relative">
            <big className="section-title">react software engineer</big>
            <h1 className="my-5">
              Make your dream app <u className="underline-main">come true</u>
            </h1>
            <p className="text-light">
              Are you a visionary founder seeking to make a positive impact on
              the world? Look no further! Together, we will be crafting
              meaningful solutions that change lives.
            </p>
            <div className="mt-8 flex items-center">
              <a href="#projects" className="button-main">
                Let&apos;s Talk Business
              </a>
              <div className="ml-7 flex items-center underline hoverOpacity">
                <FontAwesomeIcon icon={faImage} className="w-4 mr-2" />
                <a href="#projects">
                  <big>View Projects</big>
                </a>
              </div>
            </div>

            <img
              src="/images/general-star.png"
              className="absolute h-9 w-9 top-0 right-0"
              alt=""
            />

            <img
              src="/images/general-star.png"
              className="absolute h-7 w-7 bottom-0 right-24"
              alt=""
            />
          </div>

          <div className="mt-20 flex items-center">
            <div className="flex items-center border-r pr-7">
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

            <div className="flex items-center pl-9">
              <h2>4.9</h2>
              <div className="text-light ml-4 flex items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "rgb(255, 175, 43)" }}
                  className="w-3 mr-1"
                />

                <small className="font-semibold">AVG RATING</small>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end font-semibold text-sm">
          <div className="HeroCard">
            <div className="h-96 w-96 rounded-2xl mb-3 relative">
              <Image
                src="/images/hero-nft-card.gif"
                className="rounded-2xl"
                alt=""
                layout="fill"
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
            <div className="mt-4 p-3 bg-gray-700 rounded-2xl">
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

      <div className="container py-10 flex justify-evenly opacity-70">
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
