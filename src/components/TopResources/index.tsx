// import { useEffect, useState } from "react";
import CardHolder from "@/components/CardHolder";
import getNewestData from "@/lib/getNewestData";

// TODO: get rid of new, add categories

export const LoadingTopResources = () => (
  <section>
    <h2>Loading top resources...</h2>
  </section>
);

const TopResources = async () => {
  const { resources } = await getNewestData();

  return resources.length ? (
    <section style={{ justifyContent: "center" }}>
      <h2 className="pageheader">Newest resources</h2>
      <CardHolder resources={resources} showType hideNew />
    </section>
  ) : (
    <LoadingTopResources />
  );
};

export default TopResources;
