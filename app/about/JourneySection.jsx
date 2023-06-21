import React from "react";
import experiences from "../../json/experiences.json";

const StorySection = () => {
  return (
    <section className="pt-24">
      <div className="container">
        <div className="text-center mb-20">
          <big className="section-title">journey</big>
          <h2 className="mt-2 mb-4">Professional Experience</h2>
          <div className="text-dark mx-auto w-8/12">
            When I was still a 17-year-old kid in 2020, I tasted how it was to
            make money out of my passion for the first time. And it&apos;s
            become unstoppable since then.
          </div>
        </div>

        <div>
          {experiences.map((exp) => (
            <div className="flex relative pb-24" key={exp.achievement}>
              <div
                style={{ width: "2px" }}
                className="h-full absolute bg-gray-600 flex-grow-0 flex-shrink-0"
              ></div>
              <div
                className="bg-gray-600 flex-grow-0 flex-shrink-0"
                style={{ height: "2px", width: "89px", marginTop: "30px" }}
              ></div>
              <div
                className="all-center h-16 w-16 rounded-2xl flex-grow-0 flex-shrink-0"
                style={{
                  background: `url(/images/${exp.image}) center center / cover no-repeat`,
                }}
              ></div>
              <div className="w-5 flex-grow-0 flex-shrink-0"></div>
              <div className="text-white">
                <div className="flex items-center">
                  <span className="text-2xl font-medium leading-tight">
                    {exp.role}
                  </span>
                  <small className="ml-3 text-dark opacity-90">
                    {exp.date}
                  </small>
                </div>
                <div className="mt-1 text-base text-light opacity-80">
                  {exp.company}
                </div>
                <div className="mt-2 leading-normal text-light">
                  {exp.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
