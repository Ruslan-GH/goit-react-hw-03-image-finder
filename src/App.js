import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

class App extends Component {
 state = {
  imageName: '',
 };

 handleFormSubmit = imageName => {
  this.setState({ imageName });
 };

 render() {
  return (
   <div>
    <Searchbar onSubmit={this.handleFormSubmit} />
    <ImageGallery imageName={this.state.imageName} />
    <ToastContainer position="bottom-center" />
   </div>
  );
 }
}

export default App;

// class App extends Component {
//   state = {
//     searchQuery: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({ loading: true });

//     const KEY = '24082194-32c1b396cbebb1b9a26199ae3';

//     fetch(`https://pixabay.com/api/?q=car&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//       .then(res => res.json())
//       .then(image => this.setState({ searchQuery: image }))
//       .finally(this.setState({loading: false}));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loading && <h1>Download</h1> }
//         {this.state.searchQuery && (<div>There is images</div>)}
//       </div>
//     )
//   }
// }

// export default App;
