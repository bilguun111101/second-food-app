export const styles = {
  cardSection: theme => ({
    width: "240px",
    backgroundColor: "#F5F5F7",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    position: "relative",
    boxShadow: "none",
    borderBottom: "1px solid silver",
    [theme.breakpoints.down("md")]: {
      width: "180px"
    }
  }),
  img: theme => ({
    width: "70%",
    height: "158px",
    borderRadius: "50%",
    zIndex: "10",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      height: "40%"
    }
  }),
  foodImpormation: {
    padding: "1em",
    width: "100%",
    top: "50%",
    marginTop: "40%",
    height: "auto",
    zIndex: "0",
    border: "1px solid #F5F5F7",
    backgroundColor: "#FFF",
    paddingTop: "3em",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
  },
  cost: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "1em",
    alignItems: "center",
  },
};
