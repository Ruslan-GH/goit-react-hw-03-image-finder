import React from 'react';
// import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { Component } from 'react/cjs/react.production.min';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
 state = {
  imageName: '',
 };

 handleNameChange = event => {
  this.setState({ imageName: event.currentTarget.value.toLowerCase() });
 };

 handleSubmit = event => {
  event.preventDefault();
  if (this.state.imageName.trim() === '') {
   toast.error('Put the name of the image!');
   return;
  }
  this.props.onSubmit(this.state.imageName);

  this.setState({ imageName: '' });
 };

 render() {
  return (
   <header className={s.searchbar}>
    <form onSubmit={this.handleSubmit} className={s.form}>
     <button type="submit" className="button">
      <span className={s.buttonLabel}>Search</span>
     </button>
     <input
      className={s.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.imageName}
      onChange={this.handleNameChange}
     />
    </form>
   </header>
  );
 }
}

// Searchbar.propTypes = {

// };

export default Searchbar;
