import { useEffect, useState } from "react";
import CardHolder from "@/components/CardHolder";
import getNewestData from "@/lib/getNewestData";

export const LoadingTopResources = () => (
  <section>
    <h2>Loading top resources...</h2>
  </section>
);

const TopResources = async () => {
  const { resources } = await getNewestData();

  return resources.length ? (
    <section>
      <h2>Newest resources</h2>
      <CardHolder resources={resources} />
    </section>
  ) : (
    <LoadingTopResources />
  );
};

export default TopResources;