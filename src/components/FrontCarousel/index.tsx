"use client";

import Carousel from "@/components/Carousel";
import { SlideList } from "./slides";

const FrontCarousel = ({
  quotes,
  // newResources, // this is needed for SlideList.newResources
}: {
  quotes: any;
  // newResources: any;
}) => {
  return (
    <Carousel>
      {SlideList.whatIsOldSchool}
      {SlideList.whereToBegin}
      {/* {SlideList.jobSlide} */}
      {SlideList.justOneTestimonal(quotes)}
      {SlideList.categorySlide}
      {SlideList.officeHours}
      {/* {SlideList.resourceSpotlight} */}
      {SlideList.impactReport2025}
      {/* {SlideList.centurySummit} */}
      {/* {SlideList.ageismAwarenessDay} */}
      {SlideList.raisely}
    </Carousel>
  );
};

export default FrontCarousel;
