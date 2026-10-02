// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="d-flex align-items-center container">
        <div className="w-25 p-2 mx-2">
          <img
            src="https://jfdb.jp/assets/images/logo/jfdb_logo_wide_nb.svg"
            alt="JFDB logo"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-3">
              <div className="marketlook-container">
                <a href="#" className="fw-bold text-black text-decoration-none">
                  Market Look
                </a>
              </div>
            </li>

            <li className="nav-item px-3">
              <div className="JFDBColumn-container">
                <a href="#" className="fw-bold text-black text-decoration-none">
                  JFDB Column
                </a>
              </div>
            </li>

            <li className="nav-item px-3 py-3">
              <div className="JFTheater-container">
                <div className="card px-3 py-2 border-0 bg-body-tertiary">
                  <a href="https://www.jff.jpf.go.jp/">
                    <img
                      src="https://jfdb.jp/assets/images/outbound/jff_theater_vertical.png"
                      alt="JFFTheater"
                      width="60"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item px-3">
              <button
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#0074be" }}
              >
                Contact Us
              </button>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-center px-3 gap-2">
                <i className="bi bi-translate" aria-hidden="true"></i>
                <select
                  id="language"
                  className="form-select text-muted"
                  aria-label="Choose Language"
                >
                  <option value="ja">日本語</option>
                  <option value="en">English</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
