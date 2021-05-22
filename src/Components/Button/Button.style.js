const styles = {
  baseStyle: {
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "center",
    padding: "8px 16px",
    boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    "&:hover": {
      backgroundColor: "red",
    },
  },

  // Sizes
  small: {
    padding: "6px 12px",
  },
  medium: {
    padding: "8px 16px",
  },
  large: {
    padding: "11px 22px",
  },
  // Colors
  default: {
    color: "#3f3f3f",
    backgroundColor: "#E0E0E0",
  },
  primaryColor: {
    color: "#ffffff",
    backgroundColor: "#2962FF",
  },
  secondaryColor: {
    color: "#ffffff",
    backgroundColor: "#455A64",
  },
  dangerColor: {
    color: "#ffffff",
    backgroundColor: "#D32F2F",
  },
  text: {
    color: "#3f3f3f",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}

export default styles
