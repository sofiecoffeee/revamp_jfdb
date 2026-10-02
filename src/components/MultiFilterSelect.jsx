import React from "react";
import Select, { components } from "react-select";

// Custom ValueContainer untuk mengatur tampilan Tag Pertama + Badge "+N"
const CustomValueContainer = ({ children, ...props }) => {
  const selected = props.getValue();
  const count = selected.length;

  // Jika belum ada yang dipilih, tampilkan placeholder bawaan
  if (count === 0) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }

  // Jika cuma 1 item dipilih, tampilkan tag item itu saja
  if (count === 1) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }

  // Jika > 1 item dipilih, ambil tag item pertama dan tambahkan kotak "+N" persegi
  const multiValues = children[0];
  const firstTag = Array.isArray(multiValues) ? multiValues[0] : null;

  return (
    <components.ValueContainer {...props}>
      <div className="d-flex align-items-center gap-1 w-100 overflow-hidden flex-nowrap">
        {/* Render Tag Pertama */}
        {firstTag}

        {/* Render Kotak "+N" Persegi Sesuai Style Gambar */}
        <span
          style={{
            backgroundColor: "#e2e8f0", // Warna abu-abu kebiruan lembut
            color: "#0284c7", // Warna teks biru persis seperti di gambar
            borderRadius: "4px", // Kotak persegi tumpul halus (bukan bulat)
            padding: "2px 8px",
            fontSize: "0.85rem",
            fontWeight: "600",
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            height: "26px",
          }}
        >
          +{count - 1}
        </span>
      </div>
      {/* Input bawaan react-select */}
      {Array.isArray(children) ? children[1] : null}
    </components.ValueContainer>
  );
};

// Custom Option dengan Checkbox di Menu Dropdown
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div className="d-flex align-items-center gap-2">
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => {}}
          className="form-check-input mt-0"
          style={{ cursor: "pointer" }}
        />
        <span>{props.label}</span>
      </div>
    </components.Option>
  );
};

// Custom Clear Indicator (Tombol 'x' di kanan dalam box)
const CustomClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <i
        className="bi bi-x-lg text-muted"
        style={{ fontSize: "0.8rem", cursor: "pointer" }}
      ></i>
    </components.ClearIndicator>
  );
};

export default function MultiFilterSelect({
  options,
  value,
  onChange,
  placeholder = "Any",
}) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#ffffff",
      borderColor: state.isFocused ? "#38bdf8" : "#e2e8f0",
      borderRadius: "8px",
      height: "38px",
      minHeight: "38px",
      maxHeight: "38px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      cursor: "pointer",
      overflow: "hidden",
    }),

    // Kunci container agar tidak membengkak/ngangkat
    valueContainer: (base) => ({
      ...base,
      height: "38px",
      padding: "0 6px",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      overflow: "hidden",
    }),

    // Style Kotak Tag Item (seperti "Documentary" di gambarmu)
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#e2e8f0", // Warna background abu-abu kebiruan
      borderRadius: "4px", // Kotak persegi tumpul
      margin: "0 2px",
      height: "26px",
      display: "inline-flex",
      alignItems: "center",
      maxWidth: "140px",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#0284c7", // Warna teks biru
      fontSize: "0.85rem",
      fontWeight: "500",
      padding: "2px 6px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "#0284c7",
      cursor: "pointer",
      padding: "0 4px",
      "&:hover": {
        backgroundColor: "#cbd5e1",
        color: "#0369a1",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: "#94a3b8",
      fontSize: "0.9rem",
      whiteSpace: "nowrap",
    }),

    indicatorsContainer: (base) => ({
      ...base,
      height: "38px",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "10px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      zIndex: 9999,
    }),
  };

  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={customStyles}
      components={{
        ValueContainer: CustomValueContainer,
        Option: CustomOption,
        ClearIndicator: CustomClearIndicator,
      }}
      isClearable={true}
    />
  );
}
