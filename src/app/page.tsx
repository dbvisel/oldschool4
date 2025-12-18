import { Suspense } from "react";
import { Link } from "next-view-transitions";
import { getQuotes } from "@/utils/airtable";
import TopResources, { LoadingTopResources } from "@/components/TopResources";
// import FrontCarousel from "@/components/FrontCarousel";
import styles from "./page.module.css";
import aboutStyles from "@/app/about/page.module.css";
import dynamic from "next/dynamic";
const FrontCarousel = dynamic(() => import("@/components/FrontCarousel"), {
  ssr: false,
});

// import getNewestData from "@/lib/getNewestData";

// (this was added to make search work)
// export const dynamic = "force-dynamic";

// Maybe: we need to have all loading happen here and "use client" on the things that consume them?

const HomePage = async () => {
  const quotes = await getQuotes();
  // const { resources } = await getNewestData();

  // console.log(resources);
  return (
    <article className={styles.frontpage}>
      <section>
        <FrontCarousel quotes={quotes} /*newResources={resources}*/ />
      </section>
      <Suspense fallback={<LoadingTopResources />}>
        <TopResources />
      </Suspense>
      <section className={aboutStyles.aboutBlock}>
        <div
          style={{
            maxWidth: 1024,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto 0",
          }}
        >
          <div>
            <h2>What Is Old School?</h2>
            <p>
              Old School curates, creates, commissions and disseminates free
              resources to educate people about ageism and how to end it; hosts
              and facilitates spaces where age advocates around the world can
              connect; collaborates with other pro-aging organizations; and
              shows up for other social-justice movements.
            </p>
            <p>
              Old School is working towards a world where everyone has the
              opportunity to live long and to live well. We are advancing the
              movement to dismantle ageism, and we are leveraging the fact that
              everyone ages (and experiences age bias) in order to address the
              intersectional nature of all oppression—and of all activism.{" "}
              <strong>
                <Link href={"/about"}>Learn more.</Link>
              </strong>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HomePage;
