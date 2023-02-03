 import React, {Component} from "react";
 import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Header, SearchForm } from "./Searchbar.styled";


 export default class Searchbar extends Component {
    state ={
        searchQuery: '',
     }

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
              <button type="submit" className="button">
                <span className="button-label">Search</span>
              </button>          
              <input
                className="input"
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