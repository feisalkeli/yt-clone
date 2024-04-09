import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center">
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
