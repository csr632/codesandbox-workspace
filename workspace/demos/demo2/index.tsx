import React from "react";
import { Box } from "../../src";
import styles from "./index.module.css";

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <div>
      <div className={styles.header}>Box demo</div>
      <Box>test</Box>
    </div>
  );
};

export default Demo;
