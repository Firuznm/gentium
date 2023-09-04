import React, { useState } from "react";
// import style css
import "./HeaderMain.scss";
// react icons
import { FaSearch } from "react-icons/fa";
import { SlChart } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import { AiOutlinePieChart } from "react-icons/ai";


// component import
import ButtonHoverBgColor from "../../components/buttonHoverBgColor/buttonHoverBgColor";
import RedLine from "../../components/redLine/RedLine";
import ButtonHoverScale from "../../components/buttonHoverScale/ButtonHoverScale";

function HeaderMain() {
    const [headerBgColorChange, setHeaderBgColorChange] = useState(false);

    function ScrollHeaderChangeColor() {
        if (window.scrollY > 10) {
            setHeaderBgColorChange(true);
        } else {
            setHeaderBgColorChange(false);
        }
    }
    window.addEventListener("scroll", ScrollHeaderChangeColor);
    return (
        <>
            <section id="header-main">
                {/* <div className="header-main"> */}
                <header
                    className={
                        headerBgColorChange
                            ? "header container scrollHeaderBgColor"
                            : "container header"
                    }
                >
                    <a className="home-link" href="">
                        GENTIUM.
                    </a>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Works</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Client</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <span>
                                <FaSearch />
                            </span>
                        </li>
                    </ul>
                </header>
				<div className="container">
				<div className="main-line">
			     <RedLine/>
			  </div>
			  <h1>We're a digital agency.</h1>
			  <div className="main-btn">
               <ButtonHoverBgColor name="Getting Started"/>
			  </div>

    	<div className="main-cart-list">

	<div className="main-cart1 main-cart">
		<div className="icon icon-cart1"><SlChart/></div>
		<h5>Future Vision.</h5>
		<hr className="white-line"/>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas!</p>
	</div>

	<div className="main-cart2 main-cart">
		<div className="icon icon-cart2"><GoRocket/></div>
		<h5>Future Vision.</h5>
		<hr className="white-line"/>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas!</p>
	</div>

	<div className="main-cart3 main-cart">
		<div className="icon icon-cart3"><AiOutlinePieChart/></div>
		<h5>Future Vision.</h5>
		<hr className="white-line"/>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas!</p>
	</div>

		</div>

			  </div>
                {/* </div> */}
				<ButtonHoverScale/>
            </section>
        </>
    );
}

export default HeaderMain;
