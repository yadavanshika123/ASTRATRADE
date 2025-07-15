import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid text-white"
      style={{ backgroundColor: "#387ed1", paddingTop: "80px", paddingBottom: "80px" }}
    >
      
      <div className="container d-flex justify-content-between align-items-start mb-4 px-3 p-1">
        <h4 className="fw-bold">Support Portal</h4>
        <a href="#" className="text-white text-decoration-underline">Track tickets</a>

      </div>

      
      <div className="container px-3">
        <div className="row">
          
          <div className="col-md-6 mb-5">
            <h2 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

           
            <div
              className="d-flex align-items-center bg-white rounded px-3"
              style={{
                height: "60px",
                maxWidth: "100%",
                marginBottom: "30px",
              }}
            >
              <input
                type="text"
                className="form-control border-0"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                style={{ fontSize: "14px", color: "#212529", boxShadow: "none" }}
              />
              <span className="ms-2" style={{ fontSize: "18px", color: "#6c757d" }}>
                🔍
              </span>
            </div>

            
            <div className="d-flex flex-wrap mb-2" style={{ gap: "30px" }}>
              <a href="#" className="text-white text-decoration-underline">Track account opening</a>
              <a href="#" className="text-white text-decoration-underline">Track segment activation</a>
              <a href="#" className="text-white text-decoration-underline">Intraday margins</a>
            </div>
            <div className="mt-2">
              <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
            </div>
          </div>

         
          <div className="col-md-6 p-5">
            <h5 className="mb-4 fw-semibold">Featured</h5>
            <ol className="ps-3">
              <li className="mb-3">
                <a href="#" className="text-white text-decoration-underline">
                  Surveillance measure on scrips – June 2025
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
