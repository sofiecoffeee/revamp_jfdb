// src/components/Navbar.jsx

function Footer() {
  return (
    <footer id="footer" className="footer mt-5 bg-body-tertiary">
      <div className="container py-5">
        <div className="row g-4 d-flex justify-content-between">
          <div className="col-md-6 text-justify">
            <h5 style={{ color: " #0074be" }}>About JFDB</h5>
            <p>
              The Japanese Film Database (JFDB) is a database of Japanese films
              co-managed by the Japan Foundation and UNIJAPAN. Film synopses,
              cast & staff, and production & distribution company information
              are searchable and available for public perusal. With the goal of
              propagating Japanese films abroad, information on theatrically
              released films as well as the contact details for the companies
              are provided in both English and Japanese.
            </p>

            <p>
              Please go to the inquiries page by clicking the logo send UNIJAPAN
              inquiries regarding this database or to request corrections and
              revisions.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold" style={{ color: " #0074be" }}>
              Contact Us
            </h5>
            <a href="">
              <img
                src="https://www.unijapan.org/images/common/logo.gif"
                alt="UNIJAPAN"
                className="mt-1"
              />
            </a>
            <p>
              <span>
                Togeki Bldg.15th Floor, 4-1-1 Tsukiji, Chuo-ku, Tokyo 104-0045
              </span>

              <span> Telp: +81-3-6226-3025</span>
            </p>

            <a href="">
              <img
                src="https://www.jpf.go.jp/common/images/logo_organization.svg"
                alt="Japan-Foundation"
                class="jf-logo mt-1 w-75"
              />
            </a>
            <p>
              <span>
                Togeki Bldg.15th Floor, 4-1-1 Tsukiji, Chuo-ku, Tokyo 104-0045
              </span>
              <span> Telp: +81-3-6226-3025</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="sartras-row">
          <a href="" className="d-inline-flex align-items-center">
            <img
              src="https://jfdb.jp/assets/images/logo/logo_sartras.png"
              alt="logo-satras"
              className="sartras-logo"
            />
          </a>
          <span className="sartras-text">
            This site is supported by the Common Purpose Fund from the Society
            for the Administration of Remuneration for Public Transmission for
            School Lessons (SARTRAS).
          </span>
        </div>
      </div>

      <div className="container py-5 text-center">
        <div className="copyright">
          @{new Date().getFullYear()}UNIJAPAN All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
