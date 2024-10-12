import "./ProjectCaseStudy.css";
// import chain2 from "../PortfolioImgs/chain2.jpg";
// import chain3 from "../PortfolioImgs/chain3.jpg";
// import case1 from "../ProjectCaseStudy/CaseStudyImg/case1.jpg";
import css from "../ProjectCaseStudy/CaseStudyImg/css-3.png";
import html from "../ProjectCaseStudy/CaseStudyImg/html-5.png";
import illustrator from "../ProjectCaseStudy/CaseStudyImg/illustrator.png";
import vscode from "../ProjectCaseStudy/CaseStudyImg/vscode.png";
import js from "../ProjectCaseStudy/CaseStudyImg/javascript.png";
import git from "../ProjectCaseStudy/CaseStudyImg/social.png";
import figma from "../ProjectCaseStudy/CaseStudyImg/figma.png";
// import useFetchData from "./useFetchData";
import { apiCaseStudy } from "./ApiCaseStudy";

function HmsCaseStudy() {
  // const { data } = useFetchData("hms");

  // if (!data.length) {
  //   return <div style={{ marginTop: "100px" }}>Loading...</div>;
  // }

  const data = apiCaseStudy("hms");

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
          <img src={data[0]?.image?.[1]} alt="" />
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
                Ensuring smooth patient registration and appointment scheduling
                processes.
              </li>
              <li>
                Integrating lab and diagnostic services within a unified system.
              </li>
              <li>
                Managing OPD services efficiently for high patient volumes.
              </li>
              <li>
                Maintaining secure and compliant patient medical record
                management.
              </li>
              <li>
                Offering an intuitive, user-friendly interface for both medical
                staff and patients.
              </li>
              <li>
                Ensuring scalability to accommodate hospitals of different
                sizes.
              </li>
              <li>
                Streamlining billing and payment processing for patients and
                hospitals.
              </li>
              <li>
                Providing reliable technical support for system troubleshooting
                and updates.
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

export default HmsCaseStudy;
