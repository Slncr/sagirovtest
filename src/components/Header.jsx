import { useState } from "react";
import "../components/Header.css"
import logo from './SpaceXLogo.png'


function Header() {
    const [active, setActive] = useState("nav-menu")
    const [toggleIcon, setToggleIcon] = useState("nav-toggler")
    const onClick = () => {
        active === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu");

        toggleIcon === "nav-toggler" ? setToggleIcon("nav-toggler toggle") : setToggleIcon("nav-toggler");
    }

    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="img"></img>
            <ul className={active}>
                <li className="nav-item">
                    <a href="#" className="nav-link">Главная</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Технологии</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">График полетов</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Гарантии</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">О компании</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Контакты</a>
                </li>
            </ul>
            <div onClick={onClick} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
export default Header;
