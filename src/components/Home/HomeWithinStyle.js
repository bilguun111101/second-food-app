export const styles = {
  topBox: {
    background: "#F5F5F7",
    width: "100vw",
    minHeight: "100vh",
  },
  rightScroll: {
    width: "100vw",
    borderBottom: "1px solid silver",
    boxShadow: "0 0 5px grey",
    display: "flex",
    paddingTop: "5.2em",
    paddingLeft: "1em",
    paddingBottom: "1em",
    overflow: "scroll",
    gap: "1em",
  },
  foodsSection: theme => ({
    display: "flex",
    width: "100vw",
    minHeight: "50vh",
    flexWrap: "wrap",
    gap: "1em",
    padding: "4em",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: "2em"
    },
    [theme.breakpoints.down("sm")]: {
      // width: "190px",
      padding: "0em",
      gap: "5px"
    },
  }),
  cardSection: theme => ({
    width: "240px",
    backgroundColor: "#F5F5F7",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    position: "relative",
    boxShadow: "none",
    borderBottom: "1px solid silver",
    [theme.breakpoints.down("sm")]: {
      width: "190px",
    }
  }),
  img: theme => ({
    width: "70%",
    borderRadius: "50%",
    zIndex: "10",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "50%"
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
  addFood: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "2.5em",
    alignItems: "center",
  },
  card: {
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "140%",
  },
  btn: {
    width: "4em",
  },
  bottom: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
