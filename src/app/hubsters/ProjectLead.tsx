"use client";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import styles from "./page.module.css";
import aboutStyles from "./../about/page.module.css";

const PopoverContent = ({ onClose }: { onClose: () => void }) => (
  <div className={styles.popoverScrim} onClick={onClose}>
    <div className={styles.popover}>
      <p>
        <strong>Aging</strong> is living. It’s how we move through life, from
        birth to death. <strong>Ageism</strong> is discrimination and
        stereotyping based on age. Ageism warps the way we envision our
        futures, pits young against old, and makes it much harder to age well.
        This is why we created Old School:{" "}
        <strong>to educate people about ageism and how to dismantle it</strong>
        .
      </p>
      <p>
        This is why{" "}
        <strong>your project must focus explicitly on ageism</strong> in order
        to be included in the Old School Hub. Whether you’re developing an
        event, a tool, a program, or something else entirely, please explain{" "}
        <strong>how ageism is the barrier you are addressing</strong>, and{" "}
        <strong>how your project will confront it</strong>.
      </p>
    </div>
  </div>
);

const ProjectLead = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <section className={aboutStyles.aboutBlock}>
      <div>
        <h2>
          Are you working to raise awareness of ageism and how to dismantle it?
        </h2>
        <p className={styles.projectIntroParagraph}>
          Would you like input? Collaborators? Co-conspirators? If so, we’d love
          to hear from you!
        </p>
        <Popover
          isOpen={isPopoverOpen}
          align="center"
          positions={["right", "bottom", "top", "left"]} // preferred positions by priority
          content={<PopoverContent onClose={() => setIsPopoverOpen(false)} />}
          transformMode={"absolute"}
          transform={{ top: 0, left: 0 }}
          onClickOutside={() => setIsPopoverOpen(false)}
          containerStyle={{ zIndex: "2" }}
        >
          <p className={styles.projectIntroParagraph}>
            The <strong>Old School Hub</strong> is a platform for people and
            organizations doing anti-ageism work to find and support each
            other’s efforts. Our volunteer working group, the Hubsters, can be
            involved in whatever ways make sense to the people behind each
            project, —whether you’re just starting out or already making an
            impact. We welcome projects of all types and sizes—as long as they
            focus{" "}
            <button
              type="button"
              className={styles.link}
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              <strong>explicitly</strong> on ageism
            </button>
            .
          </p>
        </Popover>
        <p className={styles.projectIntroParagraph}>
          If you’d like to submit a project or learn more, scroll down for our{" "}
          <strong>Ten Guiding Questions</strong> and the{" "}
          <strong>Old School Hub Submission Form</strong>.
        </p>
      </div>
    </section>
  );
};

export default ProjectLead;
