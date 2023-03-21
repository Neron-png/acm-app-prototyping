import { FunctionComponent } from "react";
import styles from "./HorizontalWidget.module.css";

const HorizontalWidget: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>ΑΝΑΛΥΤΙΚΗ ΒΑΘΜΟΛΟΓΙΑ</b>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/vector-72.svg" />
        <img
          className={styles.studentMaleIcon}
          alt=""
          src="/student-male1@2x.png"
        />
      </div>
    </div>
  );
};

export default HorizontalWidget;
