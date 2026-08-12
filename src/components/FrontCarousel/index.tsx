"use client";

import Carousel from "@/components/Carousel";
import { SlideList } from "./slides";
import type { QuoteRecord } from "@/types/index";

const FrontCarousel = ({
  quotes,
  // newResources, // this is needed for SlideList.newResources
}: {
  quotes: QuoteRecord[];
  // newResources: ResourceItem[];
}) => {
  return (
    <Carousel>
      {SlideList.whatIsOldSchool}
      {SlideList.winterSchoolSlide}
      {SlideList.whereToBegin}
      {/* {SlideList.jobSlide} */}
      {SlideList.justOneTestimonal(quotes)}
      {SlideList.categorySlide}
      {SlideList.officeHours}
      {/* {SlideList.resourceSpotlight} */}
      {SlideList.fiveYearStategicPlan}
      {SlideList.impactReport2025}
      {/* {SlideList.centurySummit} */}
      {/* {SlideList.ageismAwarenessDay} */}
      {SlideList.raisely}
    </Carousel>
  );
};

export default FrontCarousel;
