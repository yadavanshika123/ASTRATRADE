import React from "react";
function Hero() {
  return (
    
    <div className="container" style={{ fontFamily: "'Inter', sans-serif", color: "#424242" }}>
    <div className="row p-5 mt-5 mb-5">
      <div className="col">
        <h1 className="fs-2 fw-semibold text-center lh-base" style={{ color: "#2e2e2e" }}>
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>
    </div>
  
    <div className="row p-5 mt-5 border-top text-muted" style={{lineHeight: "1.8", fontSize: "1.0em"}}>
      <div className="col-6 p-5">
        <p>
          We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company AstraTrade, a combination of Astra and "Trade", the Sanskrit word for barrier.
        </p>
        <p>
          Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
        </p>
        <p>
          Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
        </p>
      </div>
  
      <div className="col-6 p-5">
        <p>
          In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
        </p>
        <p>
          <span style={{ color: "#387ed1", fontWeight: "500" }}>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
        </p>
        <p>
          And yet, we are always up to something new every day. Catch up on the latest updates on our <span style={{ color: "#387ed1", fontWeight: "500" }}>blog</span> or see what the media is <span style={{ color: "#387ed1", fontWeight: "500" }}>saying about us</span> or learn more about our business and product <span style={{ color: "#387ed1", fontWeight: "500" }}>philosophies</span>.
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default Hero;
