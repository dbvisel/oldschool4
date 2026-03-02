// import { Metadata } from "next";
import SubmitComponent from "@/components/SubmitComponent";
// import styles from "./page.module.css";

export default function SubmitPage() {
  return (
    <article style={{ maxWidth: "var(--narrowBlockWidth)", width: "100%" }}>
      <h2
        className="pageheader"
        style={{ marginBottom: "var(--paddingOutside", textAlign: "center" }}
      >
        Submit a resource
      </h2>
      <p>Please use this form to describe the resource you’re submitting.</p>
      <SubmitComponent />
    </article>
  );
}

export const metadata = {
  title: `Old School: Submit a resource`,
};
