import React from "react";

const Footer = () => {
  return (
    <>
      <p className="bg-dark text-white text-center mt-5">
        <small>
          Copyright &copy; {new Date().getFullYear()} beach life saving club.
          All rights reserved.
        </small>
      </p>
    </>
  );
};

export default Footer;
