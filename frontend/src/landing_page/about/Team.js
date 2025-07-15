import React from "react";

function Team() {
  return (
    <div
      className="container"
      style={{ fontFamily: "'Inter', sans-serif", color: "#424242" }}
    >
      <div className="row p-1">
        <div className="col">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      <div
        className="row px-3 py-5 text-muted text-center"
        style={{ lineHeight: "1.8", fontSize: "1.0em" }}
      >
        <div className="col-6 px-3 py-5">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "55%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 px-3 py-5 text-start" style={{lineHeight: "1.8", fontSize: "1.0em"}}>
          <p>
            Nithin bootstrapped and founded AstraTrade in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            AstraTrade has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
              Homepage
            </a>{" "}
            /
            <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
