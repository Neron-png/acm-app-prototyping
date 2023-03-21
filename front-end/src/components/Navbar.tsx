import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Navbar.module.css";

type NavbarType = {
  vector?: string;
  group1?: string;
  vector1?: string;

  /** Style props */
  navbarLeft?: Property.Left;
  navbarWidth?: Property.Width;
  navbarBoxSizing?: Property.BoxSizing;
  navbarJustifyContent?: Property.JustifyContent;
  navbarGap?: Property.Gap;

  /** Action props */
  onGroupIconClick?: () => void;
};

const Navbar: FunctionComponent<NavbarType> = ({
  navbarLeft,
  navbarWidth,
  navbarBoxSizing,
  navbarJustifyContent,
  navbarGap,
  vector,
  group1,
  onGroupIconClick,
  vector1,
}) => {
  const navbarStyle: CSS.Properties = useMemo(() => {
    return {
      left: navbarLeft,
      width: navbarWidth,
      boxSizing: navbarBoxSizing,
      justifyContent: navbarJustifyContent,
      gap: navbarGap,
    };
  }, [
    navbarLeft,
    navbarWidth,
    navbarBoxSizing,
    navbarJustifyContent,
    navbarGap,
  ]);

  return (
    <div className={styles.navbar} style={navbarStyle}>
      <img className={styles.vectorIcon} alt="" src={vector} />
      <img
        className={styles.navbarChild}
        alt=""
        src={group1}
        onClick={onGroupIconClick}
      />
      <img className={styles.vectorIcon} alt="" src={vector1} />
    </div>
  );
};

export default Navbar;
