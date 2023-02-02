import React, { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import fetchImages from 'components/Api';
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
    loadMore: true,
    loading: false,
    error: null,

  };
  
  componentDidUpdate(_, prevState) {
    const {searchImg, page, images, loadMore} = this.state
    const prevSearchImg = prevState.searchImg;
    const prevPage = prevState.page;
    if (prevSearchImg !== searchImg 
      || prevPage !== page
      ) {
        this.setState({loading: true});     
            fetchImages(searchImg, page)
            .then(response => {
              console.log(response)
              if (page !== prevPage) {
                console.log("asdgasdg")
                if (response.hits.length<80){
                  console.log(response.hits.length)
                  this.setState({
                    
                     loadMore: false,
                  })
                }
                this.setState(prevState => ({
                  images: [...prevState.images, ...response.hits],                    
                }));
              } else if 
              (searchImg !== prevSearchImg) {
                this.setState({
                  images: response.hits,
              });
              }
            })
            .catch(error=>this.setState({error}))
            .finally(()=> this.setState({loading: false}))          
        }
    }   

  handleFormSubmit = searchQuery => {
    this.setState({
      page: 1,
      images: [],
      searchImg: searchQuery,
    });
  };

  handleOnClickMoreButton = e => {
    e.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))

  }

  render () {
    const {images, loading, error, searchImg, loadMore} = this.state;
    
    return (       
<Wrapper>
  <Searchbar onSubmit={this.handleFormSubmit}/>
    {error && <div>Change query</div>}
    {loading && <div>Загружаем</div>}
    {!searchImg && <div>Give me name</div>}
    {images && 
    <ImageGallery 
      images={this.state.images} 
    />}

    {images.length>0 &&
      (<Button onClick = {this.handleOnClickMoreButton} onLoadMoreBtn={loadMore}>LoadMore</Button>
)}
    <Toaster autoClose={3000}/>
</Wrapper>    
      );
    }
  }
 
  //{} if (resp.data.hits.length < 40) {(
     // "We're sorry, but you've reached the end of search results."
    //  );
   // loadMore.disabled = true;