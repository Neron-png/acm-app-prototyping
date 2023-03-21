import { FunctionComponent } from "react";
import styles from "./SquareWidgets.module.css";

const SquareWidgets: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/frame-6.svg" />
        <div className={styles.vectorParent}>
          <img className={styles.frameItem} alt="" src="/vector-51.svg" />
          <div className={styles.div}>ΠΡΟΓΡΑΜΜΑ ΜΑΘΗΜΑΤΩΝ</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.cutleryWrapper}>
          <img className={styles.cutleryIcon} alt="" src="/cutlery@2x.png" />
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameItem} alt="" src="/vector-62.svg" />
          <div className={styles.div1}>
            <span className={styles.txt}>
              <p className={styles.p}>{`ΜΕΝΟΥ `}</p>
              <p className={styles.p}>ΛΕΣΧΗΣ</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareWidgets;
