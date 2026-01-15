"use client";

import JotFormReact from "jotform-react";
import styles from "./styles.module.css";

const SubmitComponent = () => (
  <div className={styles.submitDiv}>
    <JotFormReact
      formURL="https://form.jotform.com/212724075719054"
      allowFullScreen={true}
    />
  </div>
);

export default SubmitComponent;
