import React from "react";
import "./footer.css";
import { Github, Linkedin, MailPlus, CircleParking } from "lucide-react";
const footer = () => {
  return (
    <div className="footer">
      <div className="socialmedia-container">
       <a href="https://github.com/satyamrk18" target="new">
          <Github className="social-icon"/>
        </a>
        <a
          href="https://www.linkedin.com/in/satyam-katkade-4ba389279/"
          target="new"
        >
          <Linkedin className="social-icon"/>
        </a>
        <a href="mailto:satyamrk18@gmail.com?subject=Hello%20Satyam&body=This%20is%20a%20test%20mail%20from%20my%20app" target="new">
          <MailPlus className="social-icon"/>
        </a>
        <a href="https://peerlist.io/satyamrk18" target="new"><CircleParking  className="social-icon"/></a>
      </div>
    </div>
  );
};

export default footer;
