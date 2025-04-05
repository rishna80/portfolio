import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="container">
      <section className="about">
        <h2>About <span className="underline"></span></h2>
        <p>
          We focus on offering our partners and clients modern cutting-edge technology and services.
          Our offerings include online transactions, monitoring, surveillance, analysis, and risk mitigation measures.
        </p>
        <p>
          Additionally, we promote research on contemporary issues in the marketing sector.
        </p>
      </section>

      <section className="more-info">
        <h2>More Info <span className="underline"></span></h2>
        <div className="info-container">
          <div className="feb">
            <div className="info-box education">
              <span className="icon"><i class="fa-solid fa-school"></i> Education</span>
            </div>
            <div className="dd">
              <p><strong>2021-2024</strong></p>
              <p>Ph.D in SRM - University, Chennai, India</p>
            </div>

            <div className="card light-blue">
              <p><strong>2017-2021</strong></p>
              <p>MSc (Computer Science) - Bharathiar University, Coimbatore, India</p>
            </div>
            <div className="card light-red">
              <p><strong>2015-2017</strong></p>
              <p>BSc (Computer Science) - Bharathiar University, Coimbatore, India</p>
            </div>
          </div>

          <div className="mar">
            <div className="info-box experience">
              <span className="icon"><i class="fa-solid fa-briefcase"></i> Experience</span>
            </div>
            <div className="ff">
              <p><strong>2019 - Present</strong></p>
              <p>Project Lead, Anga Information Technology Pvt Ltd</p>
            </div>
            <div className="card light-red">
              <p><strong>2015 - 2017</strong></p>
              <p>Sr. Web Developer - Hi Infotech Pvt Ltd</p>
            </div>
            <div className="card light-blue">
              <p><strong>2014 - 2015</strong></p>
              <p>Jr. Web Developer - XYZ Pvt Ltd Company</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;