import React from "react";

import styles from "./index.module.css";

interface IProps {}

export const Box: React.FC<IProps> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};
