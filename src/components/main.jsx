import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="shopping bg image.jpg"
            alt="Card"
            height={400}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bold text-black"> Happy shopping</h5>
              <p className="card-text fs-5 text-black ">
                Shopping Always Good Idea❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;