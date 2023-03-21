import { FunctionComponent } from "react";
import styles from "./LessonTime.module.css";

type LessonTimeType = {
  time?: string;
};

const LessonTime: FunctionComponent<LessonTimeType> = ({ time }) => {
  return <b className={styles.b}>{time}</b>;
};

export default LessonTime;
