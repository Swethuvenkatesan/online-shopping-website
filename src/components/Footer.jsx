import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center bg-secondary">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 mt-3">  happy :) coding ❤️ </p>

            <div class="icons mt-3">
          <a href="https://github.com/swethuvenkatesan " class="fa-brands fa-github me-3 " style={{color: 'white', fontSize: '1.5rem'}}></a>
              <a href="https://www.instagram.com/swethavenkatesan04?igsh=enRjajJmMW8wbXZh" class="fab fa-instagram me-3" style={{color: 'white', fontSize: '1.5rem'}} ></a>
              <a href="https://www.linkedin.com/in/swetha-venkatesan-75a750274/" class="fab fa-linkedin" style={{color: 'white', fontSize: '1.5rem'}} ></a>
              </div>
           </div>

        </div>
      </footer> 
    </>
  );
};

export default Footer;