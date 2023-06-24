"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import reviews from "../../json/reviews.json";
import Image from "next/image";
import Carousel from "nuka-carousel";

const ReviewSection = () => {
  return (
    <section id="reviews" className="xl:pt-32 pt-24">
      <div className="container grid grid-cols-12">
        <div className="col-span-5">
          <big className="section-title">testimonial</big>
          <h2 className="mt-2">
            Trusted by clients from <u className="underline-main">big brands</u>{" "}
            around the world
          </h2>
        </div>

        <div className="col-span-7 pl-5 relative">
          <Carousel
            slidesToShow={1}
            animation="fade"
            speed={1500}
            renderCenterLeftControls={({ previousSlide, currentSlide }) => (
              <div
                className={`w-8 h-8 all-center hoverOpacity bg-main ${
                  currentSlide === 0 ? "disabled" : ""
                }`}
                onClick={previousSlide}
              >
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="w-4 text-black"
                />
              </div>
            )}
            renderCenterRightControls={({
              nextSlide,
              slideCount,
              currentSlide,
            }) => (
              <div
                className={`w-8 h-8 all-center hoverOpacity bg-main ${
                  currentSlide === slideCount - 1 ? "disabled" : ""
                }`}
                onClick={nextSlide}
              >
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="w-4 text-black"
                />
              </div>
            )}
          >
            {reviews.map((review, index) => (
              <div className="flex flex-col" key={`review${index}`}>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      key={`reviewStar${num}`}
                      className="w-4 mr-1"
                      style={{ color: "#ffaf2b" }}
                    />
                  ))}
                </div>

                <div className="bigger text-dark mt-8">
                  &quot;{review.message}&quot;
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div>
                    <div className="flex items-center">
                      <span className="mr-3">{review.name}</span>
                      <a
                        href={review.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="flex items-center"
                      >
                        <Image
                          src={"/images/brand/linkedin.png"}
                          className="hoverOpacity"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </a>
                    </div>
                    <big className="text-light">{review.role}</big>
                  </div>

                  <div>
                    <Image
                      src={`/images/flag/${review.country}.png`}
                      alt=""
                      height={40}
                      width={40}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
