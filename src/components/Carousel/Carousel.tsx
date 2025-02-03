import ArrowLeftIcon from '@/assets/chevron-left-filled-icon.svg?react';
import ArrowRightIcon from '@/assets/chevron-right-filled-icon.svg?react';
import { ClassNames } from '@emotion/react';
import { IconButton } from '@mui/material';
import CarouselComponent from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { RESPONSIVE_SETTINGS } from './Carousel.constants';
import { useStyles } from './Carousel.styles';

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  const styles = useStyles();
  //TODO: add check availability for next and prev buttons (disable or hide state)
  return (
    <div css={styles.carouselBackground}>
      <div css={styles.carouselBackgroundButton}>
        <IconButton aria-label="arrow-previous" onClick={previous}>
          <ArrowLeftIcon />
        </IconButton>
      </div>
      <div css={styles.carouselBackgroundButton}>
        <IconButton aria-label="arrow-next" onClick={next}>
          <ArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export const Carousel: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const styles = useStyles();

  return (
    <ClassNames>
      {({ css, cx }) => (
        <CarouselComponent
          // additionalTransfrom={0}
          arrows={false}
          // autoPlaySpeed={3000}
          centerMode={false}
          className=""
          css={styles.root}
          // due to lib requires such way for define custom arrows
          // @ts-ignore
          customButtonGroup={<CustomButtonGroupAsArrows />}
          dotListClass=""
          draggable={false}
          focusOnSelect={false}
          infinite={false}
          keyBoardControl
          // minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={RESPONSIVE_SETTINGS}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay={false}
          showDots={false}
          sliderClass=""
          // slidesToSlide={1}
          swipeable={false}
          partialVisible={false}
        >
          {children}
        </CarouselComponent>
      )}
    </ClassNames>
  );
};
