import React from "react";
import { Github, Linkedin, MailPlus, CircleParking } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full h-auto text-center flex flex-col text-2xl m-0 mt-9 p-1 text-black">
      <div className="m-0 flex items-center justify-center text-center gap-4">
       <a href="https://github.com/satyamrk18" target="new">
          <Github className="border-2 border-transparent p-2 rounded-md cursor-pointer transition-all duration-300 no-underline text-black hover:border-black" size={45}/>
        </a>
        <a
          href="https://www.linkedin.com/in/satyam-katkade-4ba389279/"
          target="new"
        >
          <Linkedin className="border-2 border-transparent p-2 rounded-md cursor-pointer transition-all duration-300 no-underline text-black hover:border-black" size={45}/>
        </a>
        <a href="mailto:satyamrk18@gmail.com?subject=Hello%20Satyam&body=This%20is%20a%20test%20mail%20from%20my%20app" target="new">
          <MailPlus className="border-2 border-transparent p-2 rounded-md cursor-pointer transition-all duration-300 no-underline text-black hover:border-black" size={45}/>
        </a>
        <a href="https://peerlist.io/satyamrk18" target="new"><CircleParking  className="border-2 border-transparent p-2 rounded-md cursor-pointer transition-all duration-300 no-underline text-black hover:border-black" size={45}/></a>
      </div>
    </div>
  );
};

export default Footer;
