export const styles = {
  cardSection: theme => ({
    minWidth: "300px",
    width: "50%",
    height: "auto",
    display: "flex",
    padding: "2em",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      width: "70%"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
  }),
  closeBtn: {
    color: "#000",
    position: "absolute",
    right: "1em",
    top: "0.4em",
  },
  img: { width: "50%", height: "auto" },
  getImpormation: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    height: "90%",
    gap: "3em",
    paddingTop: "3.4em",
  },
};
