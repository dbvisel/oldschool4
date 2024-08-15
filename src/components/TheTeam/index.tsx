import * as React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import getCleanTeam from "@/lib/getTeam";

const TheTeam = async () => {
  const team = await getCleanTeam();
  const theTeam = team.filter((x) => x.type === "team");
  const collaborators = team.filter((x) => x.type === "collaborator");
  return (
    <div className={styles.teamWrapper}>
      <h2>The Team</h2>
      <div>
        {theTeam.map((person, index) => {
          const hasWebsite = person.website.length;
          return (
            <div className={styles.person} key={index}>
              <Image
                src={person.image.path}
                alt={person.name}
                width={person.image.width}
                height={person.image.height}
                style={{ transform: `rotate(${index % 2 ? -3 : 3}deg)` }}
                priority
              />
              <div>
                <h3>
                  {hasWebsite ? (
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {person.name}
                    </a>
                  ) : (
                    person.name
                  )}{" "}
                  <span>{person.title}</span>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: person.bio,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <h2>Collaborators</h2>
      <div>
        {collaborators.map((person, index) => (
          <div className={styles.person} key={index}>
            <Image
              src={person.image.path}
              alt={person.name}
              width={person.image.width}
              height={person.image.height}
              style={{ transform: `rotate(${index % 2 ? -3 : 3}deg)` }}
            />
            <div>
              <h3>
                {person.name} <span>{person.title}</span>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: person.bio,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TheTeam;
