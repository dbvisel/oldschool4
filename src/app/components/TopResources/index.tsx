import { useEffect, useState } from "react";
import CardHolder from "@/app/components/CardHolder";
import getNewestData from "@/lib/getNewestData";

const TopResources = async () => {
  const { resources } = await getNewestData();

  return (
    <section>
      <h2>Newest resources</h2>
      {resources.length ? (
        <CardHolder resources={resources} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default TopResources;
