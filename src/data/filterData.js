export const statusOptions = [
  { value: "in_production", label: "In Production" },
  { value: "completed", label: "Completed" },
];
export const genreOptions = [
  {
    label: "MAIN GENRE",
    options: [
      { value: "animation", label: "Animation" },
      { value: "documentary", label: "Documentary" },
      { value: "experimental", label: "Experimental" },
      { value: "fiction", label: "Fiction" },
    ],
  },

  {
    label: "SPESIFY GENRE",
    options: [
      { value: "action", label: "Action" },
      { value: "adventure", label: "Adventure" },
      { value: "children", label: "Children" },
      { value: "comedy", label: "Comedy" },
      { value: "drama", label: "Dorama" },
      { value: "fantasy", label: "Fantasy" },
      { value: "horror", label: "Horror" },
      { value: "romance", label: "Romance" },
      { value: "science-fiction", label: "Science Fiction" },
      { value: "suspense", label: "Suspense" },
      { value: "thriller", label: "Thriller" },
    ],
  },
];

export const creditOptions = [
  { value: "cast", label: "Cast" },
  { value: "producer", label: "Producer" },
  { value: "director", label: "Director" },
  { value: "screenplay", label: "Screenplay" },
  { value: "cinematography", label: "Cinematography" },
  { value: "editor", label: "Editor" },
  { value: "production_design", label: "Production Design" },
  { value: "music", label: "Music" },
];

export const companyTypeOptions = [
  { value: "PH_company", label: "Production House" },
  { value: "film_commision", label: "Film Commision" },
  { value: "distributor", label: "Distributor" },
  { value: "associations", label: "Associations" },
  { value: "PH_anime", label: "Anime Production House" },
  { value: "film_festivals", label: "Film Festival" },
  { value: "film_schools", label: "Film Schools" },
  { value: "production_equipment", label: "Production Equipment & Facilities" },
  { value: "funds", label: "Funds" },
  { value: "sales", label: "Sales" },
  { value: "casting", label: "Casting" },
  { value: "subtitle", label: "Subtitle" },
  { value: "translation", label: "Translation/Interpretation" },
  { value: "contact", label: "Contact" },
];

export const ScreenTimeOptions = [
  { value: "under_15", label: "Less than 15 mins" },
  { value: "15_to_30", label: "15mins-30mins" },
  { value: "30_to_60", label: "30mins-60mins" },
  { value: "over_60", label: "More than 60mins" },
];

export const subtitleOptions = [
  { value: "english", label: "English" },
  { value: "others", label: "Others" },
];

export const releaseYearOptions = Array.from(
  { length: 2026 - 1900 + 1 },
  (_, index) => {
    const year = String(2026 - index);
    return { value: year, label: year };
  },
);
