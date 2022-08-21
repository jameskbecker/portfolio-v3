import { AppDispatch } from '@/app/store';
import ChevronLeft from '@/assets/icons/chevron-left.svg';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import { useDispatch } from 'react-redux';
import { nextItem, previousItem } from './gallerySlice';
import { StyledGalleryNavButton } from './styles';

const GalleryNavButton = ({ prev }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNext = () => {
    dispatch(nextItem());
  };

  const handlePrevious = () => {
    dispatch(previousItem());
  };

  return (
    <StyledGalleryNavButton
      prev={prev}
      onClick={prev ? handlePrevious : handleNext}
    >
      {prev ? <ChevronLeft /> : <ChevronRight />}
    </StyledGalleryNavButton>
  );
};

export default GalleryNavButton;
