import React, { useState, useRef, useEffect } from "react";
import MultiFilterSelect from "./MultiFilterSelect";
import {
  statusOptions,
  genreOptions,
  creditOptions,
  companyTypeOptions,
  subtitleOptions,
  releaseYearOptions,
} from "../data/filterData";

export default function SearchBar({ movieList = [], onFilteredResult }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const popoverRef = useRef(null);

  const [filters, setFilters] = useState({
    status: [],
    genre: [],
    releaseYear: [],
    credit: [],
    companyType: [],
    subtitle: [],
    productionYearMax: 2026,
    durationMax: 180,
  });

  // Fitur menutup Popover jika user mengklik di luar area popover
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowAdvanced(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyFilter = (keyword, currentFilters) => {
    const getValues = (arr) => (arr || []).map((item) => item.value);

    const filtered = movieList.filter((movie) => {
      const matchesKeyword =
        !keyword ||
        movie.title?.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.synopsis?.toLowerCase().includes(keyword.toLowerCase());

      const selectedGenre = getValues(currentFilters.genre);
      const matchesGenre =
        selectedGenre.length === 0 ||
        movie.genres?.some((g) => selectedGenre.includes(g));

      const selectedReleaseYear = getValues(currentFilters.releaseYear);
      const matchesReleaseYear =
        selectedReleaseYear.length === 0 ||
        selectedReleaseYear.includes(String(movie.releaseYear));

      const selectedStatus = getValues(currentFilters.status);
      const matchesStatus =
        selectedStatus.length === 0 || selectedStatus.includes(movie.status);

      const selectedCredit = getValues(currentFilters.credit);
      const matchesCredit =
        selectedCredit.length === 0 ||
        movie.credits?.some((c) => selectedCredit.includes(c));

      const selectedCompany = getValues(currentFilters.companyType);
      const matchesCompany =
        selectedCompany.length === 0 ||
        movie.companyTypes?.some((comp) => selectedCompany.includes(comp));

      const selectedSubtitle = getValues(currentFilters.subtitle);
      const matchesSubtitle =
        selectedSubtitle.length === 0 ||
        movie.subtitles?.some((sub) => selectedSubtitle.includes(sub));

      const matchesProdYear =
        !movie.productionYear ||
        movie.productionYear <= currentFilters.productionYearMax;

      const matchesDuration =
        !movie.duration || movie.duration <= currentFilters.durationMax;

      return (
        matchesKeyword &&
        matchesGenre &&
        matchesReleaseYear &&
        matchesStatus &&
        matchesCredit &&
        matchesCompany &&
        matchesSubtitle &&
        matchesProdYear &&
        matchesDuration
      );
    });

    if (onFilteredResult) {
      onFilteredResult(filtered);
    }
  };

  const handleKeywordChange = (e) => {
    const val = e.target.value;
    setSearchKeyword(val);
    applyFilter(val, filters);
  };

  const handleSelectChange = (key, selectedValues) => {
    const updatedFilters = { ...filters, [key]: selectedValues };
    setFilters(updatedFilters);
    applyFilter(searchKeyword, updatedFilters);
  };

  const handleSliderChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: Number(value) };
    setFilters(updatedFilters);
    applyFilter(searchKeyword, updatedFilters);
  };

  const handleRemoveChip = (key, itemValue) => {
    const updatedList = filters[key].filter((item) => item.value !== itemValue);
    const updatedFilters = { ...filters, [key]: updatedList };
    setFilters(updatedFilters);
    applyFilter(searchKeyword, updatedFilters);
  };

  const handleReset = () => {
    const resetState = {
      status: [],
      genre: [],
      releaseYear: [],
      credit: [],
      companyType: [],
      subtitle: [],
      productionYearMax: 2026,
      durationMax: 180,
    };
    setSearchKeyword("");
    setFilters(resetState);
    applyFilter("", resetState);
  };

  const activeTags = [
    ...filters.genre.map((item) => ({ ...item, categoryKey: "genre" })),
    ...filters.releaseYear.map((item) => ({
      ...item,
      categoryKey: "releaseYear",
    })),
    ...filters.status.map((item) => ({ ...item, categoryKey: "status" })),
    ...filters.credit.map((item) => ({ ...item, categoryKey: "credit" })),
    ...filters.companyType.map((item) => ({
      ...item,
      categoryKey: "companyType",
    })),
    ...filters.subtitle.map((item) => ({ ...item, categoryKey: "subtitle" })),
  ];

  const hasActiveFilters = activeTags.length > 0 || searchKeyword !== "";

  return (
    <section className="search-bar my-4">
      <div className="container">
        {/* Container Utama Biru */}
        <div
          className="p-4 rounded-3 shadow position-relative"
          style={{ backgroundColor: "#0074be" }}
          ref={popoverRef}
        >
          {/* Main Controls Row */}
          <div className="row g-3 align-items-end">
            <div className="col-12 col-sm-6 col-lg">
              <label
                htmlFor="titleSearch"
                className="form-label fw-bold text-white mb-2"
              >
                Search All
              </label>
              <div className="position-relative">
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted z-2"></i>
                <input
                  id="titleSearch"
                  type="search"
                  className="form-control shadow-sm ps-5"
                  placeholder="Title or keyword..."
                  value={searchKeyword}
                  onChange={handleKeywordChange}
                  style={{ height: "38px" }}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <label className="form-label fw-bold text-white mb-2">
                Genre
              </label>
              <MultiFilterSelect
                options={genreOptions}
                value={filters.genre}
                onChange={(val) => handleSelectChange("genre", val)}
                placeholder="Any"
              />
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <label className="form-label fw-bold text-white mb-2">
                Release Year
              </label>
              <MultiFilterSelect
                options={releaseYearOptions}
                value={filters.releaseYear}
                onChange={(val) => handleSelectChange("releaseYear", val)}
                placeholder="Any Year"
              />
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <label className="form-label fw-bold text-white mb-2">
                IP Status
              </label>
              <MultiFilterSelect
                options={statusOptions}
                value={filters.status}
                onChange={(val) => handleSelectChange("status", val)}
                placeholder="Any"
              />
            </div>

            {/* Anchor Tombol Slider Icon */}
            <div className="col-12 col-lg-auto d-flex align-items-end justify-content-end">
              <button
                type="button"
                className="btn border-0 shadow-sm d-flex align-items-center justify-content-center p-2"
                onClick={() => setShowAdvanced(!showAdvanced)}
                style={{
                  backgroundColor: showAdvanced
                    ? "#fff"
                    : "rgba(255, 255, 255, 0.2)",
                  color: showAdvanced ? "#0074be" : "#fff",
                  height: "38px",
                  width: "42px",
                  borderRadius: "8px",
                }}
                title="Advanced Search"
              >
                <i className="bi bi-sliders fs-5"></i>
              </button>
            </div>
          </div>

          {/* --- FLOATING POPOVER CARD (MELAYANG DI SEBELAH KANAN) --- */}
          {showAdvanced && (
            <div
              className="card border-0 shadow-lg p-4 position-absolute rounded-4"
              style={{
                top: "calc(100% + 12px)",
                right: "24px",
                width: "min(680px, 92vw)",
                backgroundColor: "#ffffff",
                zIndex: 99999,
              }}
            >
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <label className="form-label fw-semibold text-secondary mb-1 small">
                    Credits / Role
                  </label>
                  <MultiFilterSelect
                    options={creditOptions}
                    value={filters.credit}
                    onChange={(val) => handleSelectChange("credit", val)}
                    placeholder="Any"
                  />
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label fw-semibold text-secondary mb-1 small">
                    Company / Studio
                  </label>
                  <MultiFilterSelect
                    options={companyTypeOptions}
                    value={filters.companyType}
                    onChange={(val) => handleSelectChange("companyType", val)}
                    placeholder="Any"
                  />
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label fw-semibold text-secondary mb-1 small">
                    Subtitle
                  </label>
                  <MultiFilterSelect
                    options={subtitleOptions}
                    value={filters.subtitle}
                    onChange={(val) => handleSelectChange("subtitle", val)}
                    placeholder="Any"
                  />
                </div>
              </div>

              {/* Sliders Range */}
              <div className="row g-4 mt-2">
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-between text-secondary fw-semibold small mb-1">
                    <span>Production Year</span>
                    <span className="text-primary fw-bold">
                      {filters.productionYearMax} & older
                    </span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="1900"
                    max="2026"
                    step="1"
                    value={filters.productionYearMax}
                    onChange={(e) =>
                      handleSliderChange("productionYearMax", e.target.value)
                    }
                  />
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-between text-secondary fw-semibold small mb-1">
                    <span>Duration</span>
                    <span className="text-primary fw-bold">
                      Up to {filters.durationMax} mins
                    </span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="180"
                    step="5"
                    value={filters.durationMax}
                    onChange={(e) =>
                      handleSliderChange("durationMax", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- ACTIVE FILTER CHIPS --- */}
        {hasActiveFilters && (
          <div className="d-flex flex-wrap align-items-center gap-2 mt-3 ps-1">
            <i className="bi bi-tag-fill text-muted fs-5 me-1"></i>

            {searchKeyword && (
              <span
                className="badge d-inline-flex align-items-center gap-2 px-3 py-2 text-white fw-medium shadow-sm"
                style={{ backgroundColor: "#38bdf8", borderRadius: "8px" }}
              >
                "{searchKeyword}"
                <i
                  className="bi bi-x-lg"
                  onClick={() => {
                    setSearchKeyword("");
                    applyFilter("", filters);
                  }}
                  style={{ cursor: "pointer", fontSize: "0.75rem" }}
                ></i>
              </span>
            )}

            {activeTags.map((tag) => (
              <span
                key={`${tag.categoryKey}-${tag.value}`}
                className="badge d-inline-flex align-items-center gap-2 px-3 py-2 text-white fw-medium shadow-sm"
                style={{ backgroundColor: "#38bdf8", borderRadius: "8px" }}
              >
                {tag.label}
                <i
                  className="bi bi-x-lg"
                  onClick={() => handleRemoveChip(tag.categoryKey, tag.value)}
                  style={{ cursor: "pointer", fontSize: "0.75rem" }}
                ></i>
              </span>
            ))}

            <button
              type="button"
              className="badge d-inline-flex align-items-center gap-1 px-3 py-2 text-white fw-medium border-0 shadow-sm"
              style={{
                backgroundColor: "#94a3b8",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={handleReset}
            >
              Clear All
              <i className="bi bi-x-lg" style={{ fontSize: "0.75rem" }}></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
