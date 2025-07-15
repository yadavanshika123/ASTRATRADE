import React from "react";

function Footer() {
  return (
    <footer
      className="container border-top mt-5"
      style={{ backgroundColor: "rgb(250, 250, 250" }}
    >
      <div>
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.jpg"
              style={{ width: "50%" }}
              className="mb-3"
              alt="logo"
            />
            <p className="mb-4 text-muted">
              &copy; 2010 - 2024, AstraTrade Broking Ltd. All rights reserved.
            </p>
            <div className="fs-4 d-flex gap-3 text-muted">
              <i className="fa fa-twitter"></i> {/* Instead of fa-x-twitter */}
              <i className="fa fa-facebook-square"></i>{" "}
              {/* Instead of fa-square-facebook */}
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </div>
            <hr />
            <div className="fs-4 d-flex gap-3 text-muted">
              <i className="fa fa-youtube-play"></i>
              <i className="fa fa-comments"></i>{" "}
              {/* best match for 'comment' */}
              <i className="fa fa-paper-plane"></i> {/* use for Telegram */}
            </div>
          </div>

          <div className="col footer-nav">
            <p className="text-muted fw-bold">Company</p>
            <a href="#" className="text-muted text-decoration-none d-block">
              About
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              Products
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              Pricing
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              Referral programme
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              Careers
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              AstraTrade.tech
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              Press & media
            </a>
            <a href="#" className="text-muted text-decoration-none d-block">
              AstraTrade Cares (CSR)
            </a>
          </div>

          <div className="col footer-nav">
            <p className="text-muted fw-bold">Support</p>
            <a href="#" className="text-muted text-decoration-none d-block">
              Contact us
            </a>
            <a href="#" className="text-muted text-decoration-none d-block" style={{ color: "#387ed1" }}>
              Support portal
            </a>
            <a href="#" className="text-muted text-decoration-none d-block" style={{ color: "#387ed1" }}>
              Z-Connect blog
            </a>
            <a href="#" className="text-muted text-decoration-none d-block" style={{ color: "#387ed1" }}>
              List of charges
            </a>
            <a href="#" className="text-muted text-decoration-none d-block" style={{ color: "#387ed1" }}>
              Downloads & resources
            </a>
          </div>

          <div className="col footer-nav">
            <p className="text-muted fw-bold">Account</p>
            <a href="#" className="text-muted text-decoration-none d-block" style={{ color: "#387ed1" }}>
              Open an account
            </a>
            <a href="#" className="text-muted text-decoration-none d-block" style={{ color: "#387ed1" }}>
              Fund transfer
            </a>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            AstraTrade Broking Ltd.: Member of NSE, BSE & MCX – SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through AstraTrade Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019. Commodity Trading through AstraTrade Commodities
            Pvt. Ltd. MCX: 46025; NSE: 50001 – SEBI Registration no.:
            INZ000038238. Registered Address: AstraTrade Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For complaints,
            write to{" "}
            <a
              href="mailto:complaints@astratrade.com"
              className="text-primary text-decoration-none" style={{ color: "#387ed1" }}
            >
              complaints@astratrade.com
            </a>
            , or for DP queries,{" "}
            <a
              href="mailto:dp@astratrade.com"
              className="text-primary text-decoration-none" style={{ color: "#387ed1" }}
            >
              dp@astratrade.com
            </a>
            . Procedure to file a complaint on{" "}
            <a href="#" className="text-primary text-decoration-none" style={{ color: "#387ed1" }}>
              SEBI SCORES
            </a>
            .
            <a href="#" className="text-primary text-decoration-none" style={{ color: "#387ed1" }}>
              Smart Online Dispute Resolution
            </a>{" "}
            |
            <a href="#" className="text-primary text-decoration-none" style={{ color: "#387ed1" }}>
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities are subject to market risks; read all
            related documents before investing. Attention investors: 1) Pledging
            required for margin use w.e.f Sep 01, 2020. 2) Keep email & phone
            updated to receive OTPs. 3) Track holdings via NSDL/CDSL monthly
            statement. "Prevent unauthorized transactions in your account by
            keeping contact info updated. KYC is a one-time process."
          </p>

          <p>
            Dear Investor, for IPOs: no need for cheques. Just sign & mention
            account number. Unused funds stay in your account. AstraTrade
            doesn't provide stock tips or trade on behalf of others. If anyone
            claims otherwise, please{" "}
            <a href="#" className="text-primary text-decoration-none" style={{ color: "#387ed1" }}>
              create a ticket here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
