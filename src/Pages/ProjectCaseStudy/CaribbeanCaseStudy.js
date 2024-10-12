import "./ProjectCaseStudy.css";
import css from "../ProjectCaseStudy/CaseStudyImg/css-3.png";
import html from "../ProjectCaseStudy/CaseStudyImg/html-5.png";
import illustrator from "../ProjectCaseStudy/CaseStudyImg/illustrator.png";
import vscode from "../ProjectCaseStudy/CaseStudyImg/vscode.png";
import js from "../ProjectCaseStudy/CaseStudyImg/javascript.png";
import git from "../ProjectCaseStudy/CaseStudyImg/social.png";
import figma from "../ProjectCaseStudy/CaseStudyImg/figma.png";
// import useFetchData from "./useFetchData"; // Adjust the import path as needed
import { apiCaseStudy } from "./ApiCaseStudy";

function CaribbeanCaseStudy() {
  // const { data } = useFetchData("caribbeansconnects");

  // if (!data.length) {
  //   return <div style={{ marginTop: "100px" }}>Loading...</div>;
  // }
  // Directly use the apiCaseStudy function
  const data = apiCaseStudy("caribbeansconnects");

  // Handle case where data is empty or undefined
  if (!data.length) {
    return <div style={{ marginTop: "100px" }}>Loading...</div>;
  }

  return (
    <div className="project-cases-study">
      <div className="case-study-body">
        <div className="case-heading">
          <h1>
            {" "}
            <b>{data[0]?.title} </b>
          </h1>
          <p>{data[0]?.content}</p>
          <img
            src={data[0]?.image?.[1]} // Access the second image URL
            alt=""
          />
        </div>
      </div>

      <div className="case-content">
        <div className="overview-goal">
          <h1>
            {" "}
            <b>{data[1]?.title}</b>
          </h1>
          <p>{data[1]?.content}</p>
        </div>
        <div className="overview-goal">
          <h1>
            {" "}
            <b> {data[2]?.title} </b>
          </h1>
          <p>{data[2]?.content}</p>
        </div>

        <div className="challenges">
          <div className="challenges-points">
            <h1>
              {" "}
              <b>CHALLENGES</b>
            </h1>
            <ul>
              <li>
                Streamlining attendance tracking for large and diverse
                workforces.
              </li>
              <li>Simplifying payroll management while ensuring accuracy.</li>
              <li>
                Implementing a performance evaluation system to align with
                organizational goals.
              </li>
              <li>
                Ensuring employee data security and compliance with HR
                regulations.
              </li>
              <li>
                Maintaining a user-friendly interface for HR teams and
                employees.
              </li>
              <li>
                Providing robust reporting and analytics for better
                decision-making. sizes.
              </li>
              <li>Managing employee recruitment and onboarding efficiently.</li>
              <li>
                Offering support for multiple HR processes within one platform.
              </li>
            </ul>
          </div>
          <div className="challenges-img">
            <img src={data[0]?.image?.[0]} alt="" />
          </div>
        </div>

        <div className="tools-tech">
          <div className="tools">
            <h1>
              {" "}
              <b>TOOLS USED</b>
            </h1>

            <ul>
              <li>
                {" "}
                <img src={figma} alt="" />
                <span> Figma</span>
              </li>
              <li>
                {" "}
                <img src={illustrator} alt="" />
                <span>Illustrator</span>
              </li>
              <li>
                {" "}
                <img src={git} alt="" />
                <span>GIT</span>
              </li>
              <li>
                {" "}
                <img src={vscode} alt="" />
                <span> VS Code</span>
              </li>
            </ul>
          </div>

          <div className="tools">
            <h1>
              {" "}
              <b>TOOLS USED</b>
            </h1>

            <ul>
              <li>
                {" "}
                <img src={html} alt="" />
                <span> HTML5</span>
              </li>
              <li>
                {" "}
                <img src={css} alt="" />
                <span>CSS3</span>
              </li>
              <li>
                {" "}
                <img src={js} alt="" />
                <span>JS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="statements">
          <div className="problem-solution">
            {" "}
            <h1>
              <b>{data[3]?.title}</b>
            </h1>
            <p> {data[3]?.content}</p>
          </div>

          <div className="problem-solution">
            {" "}
            <h1>
              <b>{data[4]?.title}</b>
            </h1>
            <p> {data[4]?.content}</p>
          </div>
        </div>

        <div className="feedback">
          <div className="feedback-img">
            <img src={data[5]?.image} alt="" />
          </div>

          <div className="feedback-text">
            <h1>
              {" "}
              <b>{data[5]?.title}</b>
            </h1>
            <p>{data[5]?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaribbeanCaseStudy;
