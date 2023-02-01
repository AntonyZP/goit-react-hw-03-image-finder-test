import React, { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import getImages from 'components/Api';
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
// import { nanoid } from 'nanoid'
// import ContactList from 'components/ContactList';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';



export default class App extends Component {
  state ={
    images: [],
    page: 1,
    searchImg: '',
  };

  formSubmitHandler = searchQuery => {
    this.setState({
      page: 1,
      images: [],
      searchImg: searchQuery,
    });

  };

  render () {
      return ( 
    <div>
  <Searchbar onSubmit={this.formSubmitHandler}/>

  <ImageGallery 
    images={this.state.images} 
    searchImg={this.state.searchImg}/>

  <button>LoadMore</button>

  <Toaster autoClose={3000}/>
    </div>
      );
    }
  }
 