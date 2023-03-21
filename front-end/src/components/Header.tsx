import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.frameChild} alt="" src="/vector-35.svg" />
      <b className={styles.heyUserHowContainer}>
        <span className={styles.heyUserHowContainer1}>
          <p className={styles.heyUser}>{`Hey User, `}</p>
          <p className={styles.heyUser}>{`How i can help you ? `}</p>
        </span>
      </b>
    </div>
  );
};

export default Header;
