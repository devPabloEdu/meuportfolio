import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";


function NavBar() {
    return <div className="NavBarContainer">
        <a href="/"><IoMdCode color="#E3371E" size={30}/></a>

        <ul className="NavMenuContainer">
            <a href="/">Home</a>
            <a href="">Sobre mim</a>
            <a href="">Tecnologias</a>
            <a href="">Projetos</a>
            <a href="">Experiências</a>
        </ul>

        <a href="https://www.linkedin.com/in/pablo-eduardopg/" aria-label="Linkedin Pablo Eduardo" target="_blank"><FaLinkedin color="#E3371E" size={30}/></a>
    </div>
}

export default NavBar;