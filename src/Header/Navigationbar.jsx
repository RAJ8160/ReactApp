import { useRef } from "react";
import Logo from "./Logo";
import "./Navigationbar.css"

const Navigation = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <>
            <header className="header">
                <div className="row">
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col">
                        <nav ref={navRef} >
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/faculty">Faculty</a>
                            {/* <a href="/student">Student</a> */}
                            <a href="/lms">LMS</a>
                            <button className="nav-btn nav-close-btn" onClick={showNavBar}><i class="bi bi-x-lg"></i></button>
                        </nav>
                        <button className="nav-btn hemburger" onClick={showNavBar}><i class="bi bi-list"></i></button>
                    </div>
                </div>
            </header>
        </>
    );
}


export default Navigation