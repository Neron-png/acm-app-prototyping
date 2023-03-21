import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component4.module.css";

const Component4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-34.svg" />
        <div className={styles.parent}>
          <b className={styles.b}>
            <p className={styles.p}>ΠΡΟΓΡΑΜΜΑ</p>
            <p className={styles.p}>{`ΜΑΘΗΜΑΤΩΝ `}</p>
          </b>
          <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
        </div>
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
      <div className={styles.navbar}>
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
        <img
          className={styles.navbarChild}
          alt=""
          src="/group-12.svg"
          onClick={onGroupIconClick}
        />
        <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
      </div>
    </div>
  );
};

export default Component4;
