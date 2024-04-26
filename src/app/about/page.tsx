// import Link from "next/link";
import { Link } from "next-view-transitions";
import TheTeam from "@/components/TheTeam";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <article className={styles.about}>
      <section className={styles.aboutBlock}>
        <div>
          <h2>What Is Old School?</h2>
          <p>
            Old School curates, creates, commissions and disseminates free
            resources to educate people about ageism and how to end it; hosts
            and facilitates spaces where age advocates around the world can
            connect; collaborates with other pro-aging organizations; and shows
            up for other social-justice movements.
          </p>
          <p>
            Old School is working towards a world where everyone has the
            opportunity to live long and to live well. We are advancing the
            movement to dismantle ageism, and we are leveraging the fact that
            everyone ages (and experiences age bias) in order to address the
            intersectional nature of all oppression—and of all activism.
          </p>
        </div>
      </section>
      <section className={styles.theTeam}>
        <div>
          <TheTeam />
        </div>
      </section>
      <section>
        <div>
          <h2>
            <Link href={"/origins"}>The Story Of Old School</Link>
          </h2>
        </div>
      </section>
    </article>
  );
}
