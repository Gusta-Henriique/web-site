import React, { useState } from "react";
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";
import AvatarHover from "../img/eu-hover.jpg"; // Adicione o caminho da imagem que deseja exibir ao passar o mouse
import { saveAs } from "file-saver";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const downloadCurriculo = () => {
    // Supondo que você tenha um arquivo PDF como currículo
    const curriculoUrl = "../Download-Currículo/GustavoCurriculo-2023.pdf";

    // Baixa o currículo usando FileSaver.js
    saveAs(curriculoUrl, "GustavoCurriculo-2023.pdf");
  };

  return (
    <aside id="sidebar">
      <img
        src={isHovered ? AvatarHover : Avatar}
        alt="Gustavo Henrique"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1xlub1af9mMgaN3v3I6sccxvVl19OY6M2/view?usp=sharing"
        target="_blank"
        className="btn"
        onClick={downloadCurriculo}
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;

