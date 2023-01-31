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
    images: [
      {id: 1, webformatURL: 'Rosie Simpson', largeImageURL: '459-12-56'},
      {id: 2, webformatURL: 'Hermione Kline', largeImageURL: '443-89-12'},
      {id: 3, webformatURL: 'Eden Clements', largeImageURL: '645-17-79'},
      {id: 4, webformatURL: 'Annie Copeland', largeImageURL: '227-91-26'},
    ],
    page: 1,
    searchImg: '2',
  };

  // formSubmitHandler = searchQuery =>{
  //   this.setState({
  //     images: [],
  //     page: 1,
  //     searchImg: searchQuery,
  //   });
    // e.target.reset();
    // console.log(data)


  formSubmitHandler = searchQuery => {
    this.setState({
      page: 1,
      images: [],
      searchImg: searchQuery,
    });
    console.log(searchQuery)
    console.log(this.state.searchImg)
  };





render () {
    return ( 
  <div>
<Searchbar onSubmit={this.formSubmitHandler}/>

<ImageGallery images={this.state.images}/>

    <button>LoadMore</button>
    <Toaster autoClose={3000}/>
  </div>


     );
  }
}
 //
