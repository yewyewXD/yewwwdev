import React from "react";
import Image from "next/image";
import projects from "@/json/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section id="projects" className="ProjectSection pt-28">
      <div className="container">
        <div className="text-center mb-16">
          <big className="mb-5 section-title">Projects</big>
          <h2>Real problems, real solutions</h2>
        </div>

        <div className="flex items-center gap-20">
          <div className="flex items-center flex-shrink-0 shadow-main rounded-xl">
            <Image
              className="h-auto rounded-xl"
              src="/images/project/tcmfinder-mobile.png"
              alt=""
              height={280}
              width={280}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-8 justify-center">
            <div>
              <h3 className="underline-main">TCMFinder</h3>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Find the most relevant Chinese medicine shop by searching
                  through every single review of all nearby shops using your
                  search term (symptoms) and location.
                </big>
              </div>
            </div>

            <div>
              <h5>Problem</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  To address my girlfriend&apos;s back pain, I had to tediously
                  read the reviews every shop on Google Maps, searching for
                  those that had successfully treated similar back problems.
                </big>
              </div>
            </div>

            <div>
              <h5>Solution</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Scrape every local shops, index all the shops & reviews on
                  Meilisearch, and call the search API with NextJs serverless
                  function.
                </big>
              </div>
            </div>

            <div>
              <h5>Tech Stack</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Typescript, NextJS, NodeJS, Meilisearch, Tailwind, Sass
                </big>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={"https://tcmfinder.app/en"}
                target="_blank"
                rel="noopener"
                className="button-main"
              >
                View live{" "}
                <FontAwesomeIcon
                  className="inline ml-1 w-4"
                  icon={faArrowUpRightFromSquare}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center mt-20 gap-20">
          <div className="flex items-center radialGradient flex-shrink-0 shadow-main rounded-xl">
            <Image
              className="h-auto rounded-xl"
              src="/images/project/spuun-mobile.png"
              alt=""
              width={280}
              height={280}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-8 justify-center">
            <div>
              <h3 className="underline-main">Spuun</h3>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Find the most relevant Chinese medicine shop by searching
                  through every single review of all nearby shops using your
                  search term (symptoms) and location.
                </big>
              </div>
            </div>

            <div>
              <h5>Problem</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  To address my girlfriend&apos;s back pain, I had to tediously
                  read the reviews every shop on Google Maps, searching for
                  those that had successfully treated similar back problems.
                </big>
              </div>
            </div>

            <div>
              <h5>Solution</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Scrape every local shops, translate the reviews to English,
                </big>
              </div>
            </div>

            <div>
              <h5>Tech Stack</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Typescript, NextJS, NodeJS, Meilisearch, Tailwind, Sass
                </big>
              </div>
            </div>

            <div>
              <Link
                href={"https://tcmfinder.app/en"}
                target="_blank"
                rel="noopener"
                className="button-main"
              >
                View live{" "}
                <FontAwesomeIcon
                  className="inline ml-1"
                  icon={faArrowUpRightFromSquare}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
