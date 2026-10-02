function BannerCarousel() {
  return (
    <section className="event-banner">
      <div className="container">
        <div
          id="eventCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#eventCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="slide-1"
            ></button>

            <button
              type="button"
              data-bs-target="#eventCarousel"
              data-bs-slide-to="1"
              aria-label="slide-2"
            ></button>

            <button
              type="button"
              data-bs-target="#eventCarousel"
              data-bs-slide-to="2"
              aria-label="slide-3"
            ></button>
          </div>

          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
              <a href="#">
                <img
                  src="https://jfdb.jp/assets/images/marketlook/annecy/2026/mv.jpg"
                  className="d-block w-100"
                  alt="Event 1"
                />
              </a>
            </div>

            <div className="carousel-item">
              <img
                src="https://jfdb.jp/assets/images/marketlook/cannes/2026/mv.jpg"
                className="d-block w-100"
                alt="Event 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://jfdb.jp/assets/images/marketlook/hongkong/2026/mv.png"
                className="d-block w-100"
                alt="Event 3"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="prev"
          >
            <i className="bi bi-chevron-left fs-1"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="next"
          >
            <i className="bi bi-chevron-right fs-1"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerCarousel;
