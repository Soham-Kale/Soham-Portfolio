import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Code Implants</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on Barne Farms Project, a full-stack e-commerce platform designed to provide a seamless online shopping experience for farm products. 
              Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.

              {/* Built 6+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma. */}
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>YouInSports</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led two development teams on Mpro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>YouInSports</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed a new feature aimed at improving chess players performance and 
              decision-making within the YouInSports app. Integrated the Stockfish engine to 
              provide real-time move analysis, best move suggestions, and post-game insights, 
              helping players understand mistakes and improve their strategy.

              Enhanced the platform by scraping and integrating player profile data from 
              ChessResults, enabling users to track opponents, analyze performance history, 
              and gain competitive insights.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
