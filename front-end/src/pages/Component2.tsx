import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component2.module.css";

const Component2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-32.svg" />
        <div className={styles.parent}>
          <b className={styles.b}>
            <p className={styles.p}>{`ΑΝΑΛΥΤΙΚΗ `}</p>
            <p className={styles.p}>ΒΑΘΜΟΛΟΓΙΑ</p>
          </b>
          <img
            className={styles.studentMaleIcon}
            alt=""
            src="/student-male@2x.png"
          />
        </div>
      </div>
      <b className={styles.b1}>?</b>
      <div className={styles.navbar}>
        <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
        <img
          className={styles.navbarChild}
          alt=""
          src="/group-1.svg"
          onClick={onGroupIconClick}
        />
        <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
      </div>
    </div>
  );
};

export default Component2;
