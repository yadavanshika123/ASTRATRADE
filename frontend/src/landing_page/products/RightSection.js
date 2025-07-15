import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore, kiteConnect, hideLearnMore = false, hideKiteConnect = false }) {
  return (
    <div className="container mt-5">
      <div className="row p-0.1">
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {!hideLearnMore && (
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                }}
              >
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {!hideKiteConnect && (
              <a
                href={kiteConnect}
                style={{
                  textDecoration: "none",
                  color: "#387ed1"
                }}
              >
                Kite Connect{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
