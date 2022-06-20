import React from 'react';
import "../style/roadmap.css";

function roadmap() {
  return (
    <div className="main-container" id="roadmap">
      <br />
      <br />
      <section className="timeline">
        <div className="timeline-line">
          <span className="line arrow-right"></span>
          <span className="timeline-innerline"></span>
        </div>

        <ul>
          <li>
            <span className="timeline-point"></span>
            <span className="date">Phase 1</span>
            <p className="timeline1">
              Thinking about the project, discussing pros and cons
            </p>
          </li>

          <li>
            <span className="timeline-point"></span>
            <span className="date">Phase 2</span>
            <p className="timeline1">
              Design, name and establishement of basic securities rules
            </p>
          </li>

          <li>
            <span className="timeline-point"></span>
            <span className="date">Phase 3</span>
            <p className="timeline1">
              Developement of the token and the website. Testing the concept to
              collect data
            </p>
          </li>

          <li>
            <span className="timeline-point"></span>
            <span className="date">Phase 4</span>
            <p className="timeline1">
              Deployement of a beta version for members of IsepInvest and
              blockchain lab
            </p>
          </li>

          <li>
            <span className="timeline-point"></span>
            <span className="date">Phase 5</span>
            <p className="timeline2">Global rollout</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default roadmap;