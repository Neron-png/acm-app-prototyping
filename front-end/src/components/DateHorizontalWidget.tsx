import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./DateHorizontalWidget.module.css";

type DateHorizontalWidgetType = {
  /** Style props */
  vector7Color?: Property.Color;
};

const DateHorizontalWidget: FunctionComponent<DateHorizontalWidgetType> = ({
  vector7Color,
}) => {
  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      color: vector7Color,
    };
  }, [vector7Color]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <b className={styles.b}>ΔΕΥΤΕΡΑ</b>
      <img
        className={styles.groupItem}
        alt=""
        src="/vector-71.svg"
        style={vectorIconStyle}
      />
    </div>
  );
};

export default DateHorizontalWidget;
