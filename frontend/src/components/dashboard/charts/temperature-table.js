import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

const TemperatureTable = (props) => {
  const [data, setData] = React.useState([]);
  const { classes } = props;
  React.useEffect(() => {
    if (props.sensorData.records !== undefined && props.sensorData.records !== null) {
      setData([]);
      const data = Object.values(props.sensorData.records.sensor);
      for (let i = data.length; data.length - 6 < i; i--) {
        setData((oldArray) => [
          ...oldArray,
          {
            name: data[i - 1].time,
            temperature: data[i - 1].temperature,
          },
        ]);
      }
    }
  }, [props]);

  return (
    <>
      <Typography className={classes.title} variant="h4">
        TEMPERATURE
      </Typography>
      <LineChart
        className="temperature-chart-container"
        width={600}
        height={300}
        data={data.reverse()}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          activeDot={{ strokeWidth: 2, r: 5 }}
          strokeWidth="3"
          type="monotone"
          dataKey="temperature"
          stroke="#FF8700"
          unit="°C"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="7 7" />
        <XAxis strokeWidth="3" stroke="#FF8700" dataKey="name" padding={{ left: 60 }} />
        <YAxis strokeWidth="3" stroke="#FF8700" unit="°C" />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default withStyles(pageStyles)(TemperatureTable);
