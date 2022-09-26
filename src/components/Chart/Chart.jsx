// import { Container, createTheme, Card } from "@mui/material";
// import { Box } from "@mui/system";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { Main } from "../Navbar/NavbarStyles";
// import { styles } from "./ChartStyle"
// import useGetData from "../TakeData";
// import _ from "lodash"
// // import faker from "faker";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// const dataNumber = [1, 2, 3, 4, 5, 6, 7];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: dataNumber,
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: dataNumber,
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

// const theme = createTheme();

// const Chart = () => {
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//     },
//   };

//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//   ];

//   const orders = useGetData("orders");
//   const foodNames = _.map(orders, "name");
//   const weekQuantity = _.map(orders, "ports")

//   const data = {
//     foodNames,
//     datasets: [
//       {
//         label: "Захиалсан түүхүүд",
//         data: weekQuantity,
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   return (
//     <Box
//       sx={styles.chartContainerPage}
//     >
//       <Grid sx={styles.chartContainer} container>
//         <Grid item sx={styles.oneChart}>
//           <Bar options={options} data={data} />
//         </Grid>
//         <Grid item sx={styles.oneChart}>
//           <Bar options={options} data={{}} />
//         </Grid>
//         <Grid item sx={styles.oneChart}>
//           <Bar options={options} data={{}} />
//         </Grid>
//         <Grid item sx={styles.oneChart}>
//           <Bar options={options} data={{}} />
//         </Grid>
//         </Grid>
//       </Box>
//   );
// };

// export default Chart;
