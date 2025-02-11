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
      {SlideList.justOneTestimonal(quotes)}
      {SlideList.categorySlide}
      {SlideList.officeHours}
      {SlideList.centurySummit}
      {SlideList.yoda}
      {SlideList.raisely}
    </Carousel>
  );
};

export default FrontCarousel;
