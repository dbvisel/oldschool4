"use client";

import { useCallback, ReactNode, PropsWithChildren } from "react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import styles from "./styles.module.css";

// TODO: make this accessible: https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/

interface CarouselProps extends PropsWithChildren<any> {
  noControls?: boolean;
  children: ReactNode;
  header: ReactNode;
}

const Carousel = ({ children, header, noControls = false }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({ delay: 6000 }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className={styles.wrapper}>
      {header}
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>{children}</div>
      </div>

      {!noControls && (
        <div className={styles.controls}>
          <div className={styles.controlButtons}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
