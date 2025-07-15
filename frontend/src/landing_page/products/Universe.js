import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The AstraTrade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted mt-6">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted mt-6">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>

      {/* 🔹 Second Row of 3 */}
      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted mt-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/astraTradeFundhouse.jpg"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted mt-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/tijori.svg"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted mt-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
