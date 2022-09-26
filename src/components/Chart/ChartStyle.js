export const styles = {
    chartContainerPage: {
        marginTop: "6em",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    chartContainer: theme => ({
        width: "80%",
        justifyContent: "center",
        borderRadius: "2em",
        gap: "2em",
        paddingTop: "3em",
        paddingBottom: "3em",
        boxShadow: "0 0 5px silver",
        marginBottom: "1em",
        [theme.breakpoints.down("lg")]: {
            width: "97%",
            gap: "1.3em",
            // marginBottom: "2em"
        },
        [theme.breakpoints.down("md")]: {
            width: "95%",
            gap: "1.5em",
        }
    }),
    oneChart: theme => ({
        width: "40%",
        border: "1px solid silver",
        [theme.breakpoints.down("lg")]: {
            width: "45%",
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    })
}
