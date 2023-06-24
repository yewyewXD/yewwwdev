import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import projects from "@/json/projects.json";

const ProjectSection = () => {
  return (
    <section id="projects" className="ProjectSection xl:pt-28 md:pt-20 pt-16">
      <div className="container">
        <div className="text-center md:mb-16 mb-12">
          <big className="mb-5 section-title">Projects</big>
          <h2>Real problems, real solutions</h2>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <div
              key={project.description}
              className={`flex items-center lg:gap-20 gap-12 ${
                project.reversed ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col`}
            >
              <div className="flex items-center flex-shrink-0 shadow-main rounded-xl">
                <Image
                  className="h-auto rounded-xl"
                  src={`/images/project/${project.image}`}
                  alt=""
                  height={270}
                  width={270}
                />
              </div>

              <div className="col-span-2 md:text-left text-center flex flex-col gap-8 justify-center">
                <div>
                  <h3 className="underline-main">{project.name}</h3>
                  <div className="leading-tight mt-2">
                    <big className="text-light">{project.description}</big>
                  </div>
                </div>

                <div>
                  <h5>Problem</h5>
                  <div className="leading-tight mt-2">
                    <big className="text-light">{project.problem}</big>
                  </div>
                </div>

                <div>
                  <h5>Solution</h5>
                  <div className="leading-tight mt-2">
                    <big className="text-light">{project.solution}</big>
                  </div>
                </div>

                <div>
                  <h5>Tech Stack</h5>
                  <div className="leading-tight mt-2">
                    <big className="text-light">{project.techStack}</big>
                  </div>
                </div>

                <div>
                  <Link
                    href={"https://tcmfinder.app/en"}
                    target="_blank"
                    rel="noopener"
                    className="button-main md:w-auto w-full"
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
          ))}
        </div>

        <div className="mt-20 flex gap-10 justify-between">
          <div className="rounded-2xl bg-secondary xl:p-8 p-6">
            <Image
              className="rounded-2xl"
              src="/images/project/SOS.gif"
              alt=""
              width={270}
              height={270}
            />
          </div>

          <div className="rounded-2xl bg-secondary xl:p-8 p-6">
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

          <div className="rounded-2xl bg-secondary xl:p-8 p-6">
            <Image
              className="rounded-2xl"
              src="/images/project/CE.gif"
              alt=""
              width={270}
              height={270}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
