import React from "react";
import criteriaImage from "../images/8046554 1.png";
const Criteria = () => {
  return (
    <>
      <section className="criteria-section">
        <div className="criteria-container">
          <div className="criteria-flex">
            <div className="criteria-img">
              <img src={criteriaImage} alt="" />
            </div>
            <div className="criteria-text">
              <div className="criteria-heading">
                <h1>
                  judging criteria <span>key attribute</span>
                </h1>
              </div>
              <div className="criteria-text-body">
                <ul>
                  <li>
                    <span>Innovation and Creativity:</span> Evaluate the
                    uniqueness and creativity of the solution. Consider whether
                    it addresses a real-world problem in a novel way or
                    introduces innovative features.
                  </li>
                  <li>
                    <span>Functionality:</span> Assess how well the solution
                    works. Does it perform its intended functions effectively
                    and without major issues? Judges would consider the
                    completeness and robustness of the solution.
                  </li>
                  <li>
                    <span>Impact and Relevance:</span> Determine the potential
                    impact of the solution in the real world. Does it address a
                    significant problem, and is it relevant to the target
                    audience? Judges would assess the potential social,
                    economic, or environmental benefits.
                  </li>
                  <li>
                    <span>Technical Complexity:</span> Evaluate the technical
                    sophistication of the solution. Judges would consider the
                    complexity of the code, the use of advanced technologies or
                    algorithms, and the scalability of the solution.
                  </li>
                  <li>
                    <span>Adherence to Hackathon Rules:</span> Judges will
                    Ensure that the team adhered to the rules and guidelines of
                    the hackathon, including deadlines, use of specific
                    technologies or APIs, and any other competition-specific
                    requirements.
                  </li>
                </ul>
                <a href="">
                    <button>Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="nav-border"></div>
    </>
  );
};

export default Criteria;
