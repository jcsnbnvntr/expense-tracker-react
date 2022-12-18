import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    /* percentage between 0 - 100 by which this bar should be fill*/
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          className={classes["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={classes["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
