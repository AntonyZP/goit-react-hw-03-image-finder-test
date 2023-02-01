import { Component } from 'react';
import PropTypes from 'prop-types';
import getImages from 'components/Api';
import ImageGalleryItem from 'components/ImageGalleryItem';




export default class ImageGallery extends Component {
 state = {
    images: [],
    loading: false
 }
    
    componentDidUpdate(prevProps, prevState) {
        const prevSearchImg = prevProps.searchImg;
        const nextSearchImg = this.props.searchImg;
        if (prevSearchImg !== nextSearchImg) {
            this.setState({loading: true})
            setTimeout(()=>{
                getImages(nextSearchImg)
                .then(response=>{
                    console.log(response.hits)
                    this.setState({images: response.hits})
                    console.log(this.state.images)
    
                })
                .finally(()=> this.setState({loading: false}))
                }, 1000
                )
            }
        }    
    
    render (){
        const {images, loading} = this.state;
        const {searchImg} = this.props;
        return ( 
            <div>
                {loading && <div>Загружаем</div>}
                {!searchImg && <div>Give me name</div>}
                {images && 
                    <div>
                        {images.map(({id, webformatURL, largeImageURL}) =>(
                            <ImageGalleryItem
                            key= {id}
                            smallImage= {webformatURL}
                            largeImage= {largeImageURL}
                            />      
                        ))}  
                    </div>}
   
            </div>   
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