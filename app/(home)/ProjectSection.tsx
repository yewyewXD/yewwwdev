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
                  Find the most relevant Traditional Chinese Medicine shop based
                  on your symptoms and location.
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
                  Meilisearch, and call the Meilisearch search API. The backend
                  will use the search term and scan through every reviews of all
                  shops.
                </big>
              </div>
            </div>

            <div>
              <h5>Tech Stack</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Typescript - NextJS - NodeJS - Meilisearch - Tailwind
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
                  Launch your online restaurant fast without worrying about
                  unreasonable commission charges.
                </big>
              </div>
            </div>

            <div>
              <h5>Problem</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Many restaurants complain about the high commission charges of
                  food delivery apps like GrabFood. They raise the food price in
                  order to make enough money, but the consumers (including me)
                  aren&apos;t happy about it.
                </big>
              </div>
            </div>

            <div>
              <h5>Solution</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  Charge restaurants on a subscription basis (free plan
                  available). They will have an online ordering website and
                  access to the order management system on mobile. We partner
                  with Lalamove for the delivery service, which is cheaper than
                  GrabFood.
                </big>
              </div>
            </div>

            <div>
              <h5>Tech Stack</h5>
              <div className="leading-tight mt-2">
                <big className="text-light">
                  React Native (Expo) - NextJS - NodeJS - PostgreSQL - Prisma -
                  Redis
                </big>
              </div>
            </div>

            <div>
              <Link
                href={"https://ohjackie.spuun.me"}
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

        <div className="mt-20 flex gap-10 justify-between">
          <div className="rounded-2xl bg-secondary p-8">
            <Image
              className="rounded-2xl"
              src="/images/project/SOS.gif"
              alt=""
              width={280}
              height={280}
            />
          </div>

          <div className="rounded-2xl bg-secondary p-8">
            <div className="flex items-center justify-center bg-white h-full w-full rounded-2xl px-8">
              <Image
                className=""
                src="/images/project/innoloft.svg"
                alt=""
                width={216}
                height={216}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-secondary p-8">
            <Image
              className="rounded-2xl"
              src="/images/project/CE.gif"
              alt=""
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
