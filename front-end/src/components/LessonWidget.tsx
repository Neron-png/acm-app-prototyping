import { FunctionComponent } from "react";
import LessonTitle from "./LessonTitle";
import LessonTime from "./LessonTime";
import LessonVenue from "./LessonVenue";
import styles from "./LessonWidget.module.css";

const LessonWidget: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.frameChild} alt="" src="/group-2@2x.png" />
      <div className={styles.parent}>
        <LessonTitle title="ΘΕΩΡΙΑ ΥΠΟΛΟΓΙΣΜΟΥ" />
        <div className={styles.clockParent}>
          <img className={styles.clockIcon} alt="" src="/clock@2x.png" />
          <LessonTime time="12:15 - 15:00" />
        </div>
        <LessonVenue place="ΑΜΦΙΘΕΑΤΡΟ ΕΜΠΕΙΡΙΚΟΣ" />
      </div>
    </div>
  );
};

export default LessonWidget;
