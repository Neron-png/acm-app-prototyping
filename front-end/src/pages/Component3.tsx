import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component3.module.css";

const Component3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-33.svg" />
        <div className={styles.parent}>
          <b className={styles.b}>ΜΕΝΟΥ ΛΕΣΧΗΣ</b>
          <img className={styles.cutleryIcon} alt="" src="/cutlery@2x.png" />
        </div>
      </div>
      <div className={styles.navbar}>
        <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
        <img
          className={styles.navbarChild}
          alt=""
          src="/group-11.svg"
          onClick={onGroupIconClick}
        />
        <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <b className={styles.b1}>ΔΕΥΤΕΡΑ</b>
          <img className={styles.groupInner} alt="" src="/vector-71.svg" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <img className={styles.groupInner} alt="" src="/vector-8.svg" />
          <b className={styles.b2}>ΤΡΙΤΗ</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <img className={styles.groupInner} alt="" src="/vector-9.svg" />
          <b className={styles.b3}>ΤΕΤΑΡΤΗ</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <img className={styles.groupInner} alt="" src="/vector-10.svg" />
          <b className={styles.b4}>ΠΕΜΠΤΗ</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <img className={styles.groupInner} alt="" src="/vector-11.svg" />
          <b className={styles.b5}>ΠΑΡΑΣΚΕΥΗ</b>
        </div>
      </div>
    </div>
  );
};

export default Component3;
