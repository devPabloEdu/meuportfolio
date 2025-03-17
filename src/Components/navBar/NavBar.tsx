import React, {useState} from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";


function NavBar() {

    const [activeButton, setActiveButton] = useState<string | null >(null);

    function handleButtonClick(buttonName : string, e: React.MouseEvent) {
        e.preventDefault();
        setActiveButton(buttonName);
    }

    return <div className="NavBarContainer">
        <a href="/"><IoMdCode color="#E3371E" size={30}/></a>

        <ul className="NavMenuContainer">
            <a href="/" className={`NavButton ${activeButton === "Home" ? "active" : ""}`} onClick={(e) => handleButtonClick("Home", e)}>Home</a>
            <a href="/sobreMim" className={`NavButton ${activeButton === "Sobre mim" ? "active" : ""}`} onClick={(e) => handleButtonClick("Sobre mim", e)}>Sobre mim</a>
            <a href="" className="NavButton">Tecnologias</a>
            <a href="" className="NavButton">Projetos</a>
            <a href="" className="NavButton">Experiências</a>
        </ul>

        <a href="https://www.linkedin.com/in/pablo-eduardopg/" aria-label="Linkedin Pablo Eduardo" target="_blank"><FaLinkedin color="#E3371E" size={30}/></a>
    </div>
}

export default NavBar;