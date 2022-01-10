import react, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
 state = {
  imageName: null,
  loading: false,
 };

 componentDidUpdate(prevProps, pervState) {
  if (prevProps.imageName !== this.props.imageName) {
   console.log('Change Name');

   const KEY = '24082194-32c1b396cbebb1b9a26199ae3';

   this.setState({ loading: true });
   fetch(
    `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
   )
    .then(res => res.json())
    .then(imageName => this.setState({ imageName }))
    .finally(() => this.setState({ loading: false }));
  }
 }

 render() {
  const { imageName, loading } = this.state;

  return (
   <div>
    {loading && <div>Download........</div>}
    {imageName && (
     <ul className={s.ImageGallery}>
      {imageName.map(image =>
       console.log(image),
       // <li>
       // <ImageGalleryItem
       //     key={image.id}
       //     smallImage={image[0].webformatURL}
       //     largeImage={image.largeImageURL}
       //     />
       // </li>
      )}
      {/* <ImageGalleryItem
                            key={imageName.hits[0].id}
                            smallImage={imageName.hits[0].webformatURL}
                            largeImage={imageName.hits[0].largeImageURL}
                        /> */}
     </ul>
    )}
   </div>
  );
 }
}

ImageGallery.propTypes = {
 images: PropTypes.arrayOf(
  PropTypes.shape({ id: PropTypes.number.isRequired }),
 ),
};

export default ImageGallery;
