const isMobile = window.innerWidth <= 550;

const textStyle = {
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "102.4%",
};

export const styles = {
  control: (provided) => ({
    ...provided,
    padding: "16px 21px",
    backgroundColor: "#f4b02b",
    cursor: "pointer",
    border: "none",
    boxShadow: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    ...textStyle,
    padding: "0",
    color: "white",
    fontSize: isMobile ? "18px" : "20px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    width: "12px",
    height: "12px",
    top: "50%",
    position: "absolute",
    right: "30px",
    transform: "translateY(-50%)",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgba(244, 176, 43, 0.42)",
  }),
  option: (provided, state) => {
    const backgroundColor = state.isFocused ? "#f4b02b" : "#fadea6";

    return {
      ...provided,
      ...textStyle,
      backgroundColor,
      padding: "16px 21px",
      color: state.isFocused ? "white" : "black",
      cursor: "pointer",
      fontSize: isMobile ? "18px" : "20px",
    };
  },
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
  }),
};
