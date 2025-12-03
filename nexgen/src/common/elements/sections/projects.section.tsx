import { projects } from "@/common/data/projects";
import "../../styles/projects.styles.css";
import OpenButton from "../open-button";

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
                <div className="project-top">
                  <div className="service-image-container">
                    <img src={project.image} />
                  </div>
                  <h3>{project.title}</h3>
                  <div className="upper-service-right">
                    <div className="open-button-container">
                      <img
                        alt="Open button."
                        src="./images/top-right-arrow.png"
                      />
                    </div>
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
                    <p className="tag-title">{project.category}</p>
                  </div>
                  <div className="project-tag">
                    <p className="tag-name">Time Taken</p>
                    <p className="tag-title">{project.timeTaken}</p>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-center">
                <img src={project.image} />
              </div>
              <div className="project-right gray-box">
                <div className="tech-container">
                  <h4>TECHNOLOGIES USED</h4>
                  <div className="tech-tags">
                    {project.tech.map((techItem) => {
                      return <p>{techItem}</p>;
                    })}
                  </div>
                </div>
                <div className="team-member-container">
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
                <div className="CTA">
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
