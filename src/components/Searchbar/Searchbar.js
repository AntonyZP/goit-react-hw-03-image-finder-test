 import React, {Component} from "react";
 import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { Header, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";


 export default class Searchbar extends Component {
    state ={
        searchQuery: '',
     }

     static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

     handleSubmit = e =>{
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
          toast.error('Enter a request!');
          return;
        }
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
     }
    
     handleChangeInput = e => {
        this.setState({
            searchQuery: e.target.value
        })
      }

     render () {
        return (
          <Header onSubmit={this.handleSubmit}>
            <SearchForm>
              <SearchFormButton type="submit">
              <IconContext.Provider value={{ size: '3em', color: "blue", }}>
                <div>
                <FcSearch/>
                </div>
              </IconContext.Provider>              
              </SearchFormButton>          
              <SearchFormInput
                type="text"
                value={this.state.name}
                onChange={this.handleChangeInput}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </SearchForm>
          </Header>  
        )
     }

 }