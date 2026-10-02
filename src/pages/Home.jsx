import BannerCarousel from "../components/BannerCarousel";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <BannerCarousel />
      <SearchBar />

      <section className="news">
        <div className="container d-flex justify-content-center mt-5">
          <div className="row g-4">
            <div className="col-12 col-lg-8 text justify-content-start mb-4">
              <h5 className="fw-bold mb-0 h4">📰 JFDB Column</h5>

              <div className="card border-rounded-5 shadow-sm p-3 mb-4 mt-4">
                <img
                  src="https://jfdb.jp/assets/images/feature/column/jfdb_column_016_en.png"
                  width="300"
                  alt=""
                />
                <article className="JFDB-column text-justify py-3 px-4">
                  On November 1, 2024 at the talk session “How We Make Our
                  Films” with directors selected for the Nippon Cinema Now
                  section of the Tokyo International Film Festival, Cannes Film
                  Festivals Film Department Director-Deputy General Delegate
                  Christian Jeune remarked on the emerging contours of young
                  directors in the Japanese film industry over the past several
                  years, and he expressed confidence that something new is
                  happening..
                </article>

                <a
                  href="#"
                  className="btn text-white w-100 2-md-auto"
                  style={{ backgroundColor: "#0074be" }}
                >
                  Read More
                </a>
              </div>

              <div className="card border-rounded-5 shadow-sm p-3 mb-4">
                <img
                  src="https://jfdb.jp/assets/images/feature/column/jfdb_column_016_en.png"
                  width="300"
                  alt=""
                />
                <article className="JFDB-column text-justify py-3 px-4">
                  On November 1, 2024 at the talk session “How We Make Our
                  Films” with directors selected for the Nippon Cinema Now
                  section of the Tokyo International Film Festival, Cannes Film
                  Festivals Film Department Director-Deputy General Delegate
                  Christian Jeune remarked on the emerging contours of young
                  directors in the Japanese film industry over the past several
                  years, and he expressed confidence that something new is
                  happening..
                </article>

                <a
                  href="#"
                  className="btn text-white w-100 2-md-auto"
                  style={{ backgroundColor: "#0074be" }}
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-4 text justify-content-start mb-4">
              <h5 className="fw-bold mb-0 h4">
                📱 Stay Connected on Social Media!
              </h5>

              <div className="card border-rounded-5 shadow-sm p-3 mb-4 mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
