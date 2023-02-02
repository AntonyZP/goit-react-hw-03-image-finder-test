import { Component } from 'react';
import PropTypes from 'prop-types';
import fetchImages from 'components/Api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';




export default class ImageGallery extends Component {
 state = {
    images: [],
    loading: false,
    error: null,
 }
    
    componentDidUpdate(prevProps, prevState) {
        const prevSearchImg = prevProps.searchImg;
        const nextSearchImg = this.props.searchImg;
        const prevPage = prevProps.Page;
        const nextPage = this.props.Page;
        if (prevSearchImg !== nextSearchImg ||
            prevPage !== nextPage) {
            this.setState({loading: true})
           
                fetchImages(nextSearchImg)
                .then(response=>{
                    this.setState({images: response.hits})})
                .catch(error=>this.setState({error}))
                .finally(()=> this.setState({loading: false}))
                
                
            }
        }    
    
    render (){
        const {images, loading, error} = this.state;
        const {searchImg} = this.props;
        return ( 
            <Gallery>
                {error && <div>Change query</div>}
                {loading && <div>Загружаем</div>}
                {!searchImg && <div>Give me name</div>}
                {images && 
                    <Gallery>
                        {images.map(({id, webformatURL, largeImageURL}) =>(
                            <ImageGalleryItem
                            key= {id}
                            smallImage= {webformatURL}
                            largeImage= {largeImageURL}
                            />      
                        ))}  
                    </Gallery>}
   
            </Gallery>   
        )
    }
    

}

                      /*      */

// getImages(nextSearchImg)
// .then(response => {
//     console.log(response)
// //   if (page !== prevState.page) {
// //     this.setState(prevState => ({
// //       images: [...prevState.images, ...response.data.hits],
// //       lastPage: Math.ceil(response.data.totalHits / 12),
// //     }));
// //   } else 
// // if (searchImg !== prevState.searchQuery) {
//     this.setState({
//       images: response.data.hits,
//     //   lastPage: Math.ceil(response.data.totalHits / 12),
//     });
//   })
  
// ({images, searchImg})