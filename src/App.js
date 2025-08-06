
import './App.css';

import React, { Component } from 'react'
import {Navbar} from './components/Navbar';
import {Book} from './components/book';
import Cart from './components/Cart';



export class App extends Component {
  constructor(){
    super();
    this.state={
      search:'',
      cart:[],
      showCart: false,
    }
  }
     handleSearchChange =(searchTerm)=>{
      this.setState({search: searchTerm});
    };
    handleAddToCart = (book)=>{
      console.log("Book added to cart:",book);
      this.setState((prevState)=>({
        cart:[...prevState.cart, book]
      }));
    }
    handleRemoveFromCart = (bookId)=>{
      this.setState((prevState)=>({
        cart: prevState.cart.filter(book => book.id !== bookId)
      }));
    }
    toggleCart =()=>{
      this.setState((prevState)=>({
        showCart: !prevState.showCart

      }));
    }
  
  render() {
    return (
      <div>
        <Navbar onSearchChange ={this.handleSearchChange} cartCount={this.state.cart.length} onCartClick={this.toggleCart}/>
        {this.state.showCart ? (<Cart cartItems ={this.state.cart} onRemoveFromCart={this.handleRemoveFromCart}/>) : (<Book search ={this.state.search} onAddToCart={this.handleAddToCart}/>)}
  
      </div>
    )
  }
}

export default App;



