import { FunctionComponent } from "react";
import styles from "./LessonTitle.module.css";

type LessonTitleType = {
  title?: string;
};

const LessonTitle: FunctionComponent<LessonTitleType> = ({ title }) => {
  return <b className={styles.b}>{title}</b>;
};

export default LessonTitle;
