import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/home.module.scss";
import projects from "@/json/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name, description, image, size, style }: any) => {
  return (
    <div className={styles.ProjectCard} style={style}>
      <div className="h-full w-full absolute opacity-0 transition-opacity duration-200 bg-black top-0 left-0 hover:opacity-80 z-50 all-center">
        <a
          href="https://github.com/yewyewXD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLink}
            className="w-10 mr-8 bg-main text-black px-1 py-2 rounded-md transition duration-200 hover:scale-110 cursor-pointer"
          />
        </a>

        <a
          href="https://github.com/yewyewXD"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-10 w-10 transition duration-200 hover:scale-110 cursor-pointer"
        >
          <Image src="/images/brand/github.png" alt="" layout="fill" />
        </a>
      </div>
      <div
        className={styles[`ProjectCard__Img${size}`]}
        style={{ backgroundImage: `url('/images/project/${image}')` }}
      ></div>
      <div className="mt-5">
        <h4>{name}</h4>
        <div className="leading-tight mt-2">
          <big className="text-light">{description}</big>
        </div>
      </div>
    </div>
  );
};

const CardTwo = ({
  name,
  description,
  image,
  size,
  style,
  reversed,
  inside,
}: any) => {
  return (
    <div
      className={styles.ProjectCard}
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      <div
        className={styles[`ProjectCard__Img${size}`]}
        style={{ backgroundImage: `url('/images/project/${image}')` }}
      ></div>

      <div
        className={`flex flex-col py-7 flex-grow ${reversed ? "mr-7" : "ml-7"}`}
      >
        <div className="mb-7">
          <h4>{name}</h4>
          <div className="leading-tight mt-2">
            <big className="text-light">{description}</big>
          </div>
        </div>

        {!!inside && (
          <div>
            <h5>Whats inside?</h5>
            <div className="leading-tight mt-2">
              <big className="text-light">{inside}</big>
            </div>
          </div>
        )}

        <div className="mt-7 flex-grow flex items-end">
          <button className="button-main">View live</button>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="ProjectSection pt-28">
      <div className="container">
        <div className="text-center mb-16">
          <big className="mb-5 section-title">Proud Creations</big>
          <h2>Built with my heart and soul</h2>
        </div>

        <div>
          {projects.map((project) => (
            <CardTwo key={project.description} {...project} size="MD" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
