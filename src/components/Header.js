import React from "react";

import facebookLogo from "../assets/facebook-logo.svg";
import imgPerfil from "../assets/perfil.svg";

function Header() {
  return (
    <header>
      <nav>
        <img src={facebookLogo} />
        <div>
          <span>Meu perfil</span>
          <img src={imgPerfil} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
