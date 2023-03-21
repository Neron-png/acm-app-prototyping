import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/vector-35.svg" />
        <b className={styles.heyUserHowContainer}>
          <span className={styles.txt}>
            <p className={styles.heyUser}>{`Hey User, `}</p>
            <p className={styles.heyUser}>{`How i can help you ? `}</p>
          </span>
        </b>
      </div>
      <div className={styles.upcommingLessosParent}>
        <div className={styles.upcommingLessos}>
          <div className={styles.upcomingLesson}>{`Upcoming Lesson `}</div>
          <div className={styles.groupParent}>
            <img className={styles.frameItem} alt="" src="/group-2@2x.png" />
            <div className={styles.parent}>
              <b className={styles.b}>ΘΕΩΡΙΑ ΥΠΟΛΟΓΙΣΜΟΥ</b>
              <div className={styles.clockParent}>
                <img className={styles.clockIcon} alt="" src="/clock@2x.png" />
                <b className={styles.b}>12:15 - 15:00</b>
              </div>
              <div className={styles.div}>ΑΜΦΙΘΕΑΤΡΟ ΕΜΠΕΙΡΙΚΟΣ</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameInner} alt="" src="/frame-6.svg" />
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon} alt="" src="/vector-51.svg" />
              <div className={styles.div1}>ΠΡΟΓΡΑΜΜΑ ΜΑΘΗΜΑΤΩΝ</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.cutleryWrapper}>
              <img
                className={styles.cutleryIcon}
                alt=""
                src="/cutlery@2x.png"
              />
            </div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon} alt="" src="/vector-62.svg" />
              <div className={styles.div2}>
                <span className={styles.txt}>
                  <p className={styles.heyUser}>{`ΜΕΝΟΥ `}</p>
                  <p className={styles.heyUser}>ΛΕΣΧΗΣ</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.wrapper}>
            <b className={styles.b2}>ΑΝΑΛΥΤΙΚΗ ΒΑΘΜΟΛΟΓΙΑ</b>
          </div>
          <div className={styles.vectorParent1}>
            <img className={styles.frameChild2} alt="" src="/vector-72.svg" />
            <img
              className={styles.studentMaleIcon}
              alt=""
              src="/student-male1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
        <img
          className={styles.navbarChild}
          alt=""
          src="/group-13.svg"
          onClick={onGroupIconClick}
        />
        <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
      </div>
    </div>
  );
};

export default MainPage;
