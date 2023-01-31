 import React, {Component} from "react";
 import PropTypes from 'prop-types';


 export default class Searchbar extends Component {
    state ={
        searchQuery: '',
     }

     handleSubmit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state)
      }
    

     handleChangeInput = e => {
        this.setState({
            searchQuery: e.target.value
        })
      }

     render () {
        return (
            <header className="searchbar" onSubmit={this.handleSubmit}>
            <form className="form">
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
            </form>
          </header>  
        )
     }

 }