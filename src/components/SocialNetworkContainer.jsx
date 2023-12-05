import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn/>, link:"https://www.linkedin.com/in/gustavo-henri/" },
  { name: "github", icon: <FaGithub/>, link:"https://github.com/Gusta-Henriique" },
  { name: "instagram", icon: <FaInstagram/>, link:"https://instagram.com/gustta_henrii?igshid=MzRlODBiNWFlZA==/" },
  { name: "WhatsApp", icon: <FaWhatsapp/>, link:"https://wa.me/5561996234681?text=Ol%C3%A1,%20vi%20seu%20projeto%20no%20GitHub%20!"},
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name}  key={network.name} target="_blank" rel="noopener noreferrer">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
