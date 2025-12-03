import { projects } from "@/common/data/projects";
import "../../styles/projects.styles.css";
import OpenButton from "../open-button";
import SquareLabel from "../square-label";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-heading-container gray-box">
        <h2>OUR WORKS</h2>
        <div className="booking-button-container">
          <OpenButton type={"lighter"} />
          <p
            className="achievement-heading roboto-mono"
            style={{ fontSize: "20px" }}
          >
            ALL WORKS
          </p>
        </div>
      </div>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project outlined-box">
              <div className="project-left gray-box">
                <div className="project-left-top">
                  <div className="project-title-container">
                    <SquareLabel image={project.iconImage} />
                    <h3>{project.title}</h3>
                  </div>

                  <div className="upper-service-right">
                    <OpenButton type={"lightest smaller"} />
                    <p
                      className="achievement-heading roboto-mono"
                      style={{ fontSize: "20px" }}
                    >
                      DETAILS
                    </p>
                  </div>
                </div>
                <div className="tags-container">
                  <div className="project-tag">
                    <p className="tag-name">Category</p>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#CE7D63" />
                    </svg>

                    <p className="tag-title">{project.category}</p>
                  </div>
                  <div className="project-tag">
                    <p className="tag-name">Time Taken</p>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#CE7D63" />
                    </svg>

                    <p className="tag-title">{project.timeTaken}</p>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-center">
                <img src={project.image} />
              </div>
              <div className="project-right">
                <div className="tech-container gray-box">
                  <h4>TECHNOLOGIES USED</h4>
                  <div className="tech-tags">
                    {project.tech.map((techItem) => {
                      return <p>{techItem}</p>;
                    })}
                  </div>
                </div>
                <div className="team-member-container gray-box">
                  <h4>TEAM MEMBERS</h4>
                  <div className="team-box">
                    {project.team.map((member) => {
                      return (
                        <div className="team-member">
                          <img src={member} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="cta clickable">
                  <p>BOOK A CALL</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
