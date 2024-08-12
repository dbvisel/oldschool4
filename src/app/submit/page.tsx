"use client";

import SubmitComponent from "@/components/SubmitComponent";
import styles from "./page.module.css";

export default function SubmitPage() {
  return (
    <article style={{ maxWidth: "var(--narrowBlockWidth)", width: "100%" }}>
      <h2
        className="pageheader"
        style={{ marginBottom: "var(--paddingOutside", textAlign: "center" }}
      >
        Submit a resource
      </h2>
      <p>
        If you’ve created or discovered an ageism-related resource we don’t know
        about, please send it our way! Here’s the submission form.
      </p>{" "}
      <SubmitComponent />
    </article>
  );
}
