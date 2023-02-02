 import React, {Component} from "react";
 import PropTypes from 'prop-types';
//  import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import { Header, Searchform } from "./Searchbar.styled";


 export default class Searchbar extends Component {
    state ={
        searchQuery: '',
     }

     handleSubmit = e =>{
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
          toast.error('🦄 Wow so easy!');
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
            <Header className="searchbar" onSubmit={this.handleSubmit}>
            <Searchform className="form">
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
            </Searchform>
          </Header>  
        )
     }

 }