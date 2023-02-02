import React, { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import getImages from 'components/Api';
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import { Wrapper } from './App.styled'


// import { nanoid } from 'nanoid'
// import ContactList from 'components/ContactList';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';



export default class App extends Component {
  state ={
    images: [],
    searchImg: '',
    page: 1,
  };

  handleFormSubmit = searchQuery => {
    this.setState({
      page: 1,
      images: [],
      searchImg: searchQuery,
    });
  };

  handleOnClickMoreButton = e => {
    e.preventDefault();
    this.setState( prevState => ({
    page: prevState.page + 1
    })  )
  }


  render () {
      return ( 
    
      <Wrapper>
      <Searchbar onSubmit={this.handleFormSubmit}/>

<ImageGallery 
  images={this.state.images} 
  searchImg={this.state.searchImg}
  page = {this.state.page}
/>

<Button onClick = {this.handleOnClickMoreButton}>LoadMore</Button>

<Toaster autoClose={3000}/>
      </Wrapper>

    
      );
    }
  }
 