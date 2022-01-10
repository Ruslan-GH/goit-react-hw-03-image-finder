import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ key, smallImage, largeImage }) => {
 return (
  <li className={s.ImageGalleryItem}>
   <img className={s.ImageGalleryItemImage} src={smallImage} alt="" />
  </li>
 );
};

ImageGalleryItem.propTypes = {
 id: PropTypes.number.isRequired,
 webformatURL: PropTypes.string.isRequired,
 largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
