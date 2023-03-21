import { FunctionComponent } from "react";
import styles from "./LessonVenue.module.css";

type LessonVenueType = {
  place?: string;
};

const LessonVenue: FunctionComponent<LessonVenueType> = ({ place }) => {
  return <div className={styles.div}>{place}</div>;
};

export default LessonVenue;
