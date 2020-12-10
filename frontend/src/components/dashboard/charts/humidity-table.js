import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { withStyles, Typography } from "@material-ui/core";
import "./table.css";

const pageStyles = (theme) => ({
  title: {
    color: "white",
    marginBottom: "5%",
    fontWeight: "700",
  },
});

const HumidityTable = (props) => {
  const [data, setData] = React.useState([]);
  const { classes } = props;
  React.useEffect(() => {
    if (props.sensorData.records !== undefined) {
      setData([]);
      const data = Object.values(props.sensorData.records.sensor);
      for (let i = data.length; data.length - 6 < i; i--) {
        setData((oldArray) => [
          ...oldArray,
          {
            name: data[i - 1].time,
            humidity: data[i - 1].humidity,
          },
        ]);
      }
    }
  }, [props]);
  return (
    <>
      <Typography className={classes.title} variant="h4">
        HUMIDITY
      </Typography>
      <LineChart
        className="humidity-chart-container"
        width={600}
        height={300}
        data={data.reverse()}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          activeDot={{ strokeWidth: 2, r: 5 }}
          strokeWidth="3"
          type="monotone"
          dataKey="humidity"
          stroke="#D0CA9C"
          unit="%"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="7 7" />
        <XAxis strokeWidth="3" stroke="#D0CA9C" dataKey="name" padding={{ left: 60 }} />
        <YAxis strokeWidth="3" stroke="#D0CA9C" unit="%" />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default withStyles(pageStyles)(HumidityTable);
