import React from "react";
import Container from "../../Component/Common/Container";
import Logo from "./Logo";
import { useState } from "react";
import Button from "../Common/Buttton";
import { navItems } from "../db/DataVase";
import MobileMenu from "./MobileMenu";

function Nav() {
  const [IsMenuOpen, setIsMenuOpen] =useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }
  

  return (
    <nav className="py-5">
      <Container>
        <div className="flex justify-between items-center gap-2.5 sm:px-5 xl:px-[30px] rounded-full bg-white sm:py-3 xl:py-4">
          <Logo />
          <div className="hidden lg:flex justify-center items-center xl:gap-4 gap-3">
            {navItems.map(({ name, link }, index) => (
              <a
                key={index}
                href={link}
                className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2.5">
          <button onClick={toggleMenu} className="lg:hidden block text-accent ">
            <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
            </button>
            
            <Button style={{ background: "var(--background-primary)" }}>
              Get Started Today
            </Button>
            


          </div>
          
         
        </div>
        {IsMenuOpen && <MobileMenu toggleMenu={toggleMenu}/>}
      </Container>
    </nav>
  );
}

export default Nav;
