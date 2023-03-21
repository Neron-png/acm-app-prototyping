import { FunctionComponent } from "react";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img className={styles.item} alt="" src="/ellipse-1.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.inner} alt="" src="/vector-3.svg" />
      <b className={styles.b}>{`ΠΡΟΓΡΑΜΜΑ ΜΑΘΗΜΑΤΩΝ `}</b>
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.child1} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <b className={styles.b1}>ΘΕΩΡΙΑ ΥΠΟΛΟΓΙΣΜΟΥ</b>
      <b className={styles.b2}>12:15 - 15:00</b>
      <div className={styles.div1}>ΑΜΦΙΘΕΑΤΡΟ ΕΜΠΕΙΡΙΚΟΣ</div>
      <img className={styles.child2} alt="" src="/vector-5.svg" />
      <b className={styles.b3}>ΔΕΥΤΕΡΑ</b>
      <div className={styles.child} />
      <img className={styles.item} alt="" src="/ellipse-2.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.inner} alt="" src="/vector-6.svg" />
      <b className={styles.b}>{`ΠΡΟΓΡΑΜΜΑ ΜΑΘΗΜΑΤΩΝ `}</b>
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.child1} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <b className={styles.b5}>{`ΠΙΘ. & ΣΤΑΤΙΣΤΙΚΗ`}</b>
      <b className={styles.b2}>9:15 - 11:00</b>
      <div className={styles.div1}>ΑΜΦΙΘΕΑΤΡΟ ΕΜΠΕΙΡΙΚΟΣ</div>
      <div className={styles.child7} />
      <img className={styles.maskGroupIcon2} alt="" src="/mask-group@2x.png" />
      <b className={styles.b7}>{`ΨΗΦ. ΣΧΕΔΙΑΣΗ `}</b>
      <b className={styles.b8}>11:15 - 13:00</b>
      <div className={styles.div3}>ΑΜΦΙΘΕΑΤΡΟ ΕΜΠΕΙΡΙΚΟΣ</div>
      <img className={styles.child2} alt="" src="/vector-7.svg" />
      <b className={styles.b9}>ΤΡΙΤΗ</b>
    </div>
  );
};

export default Component;
