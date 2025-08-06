import React, { Component } from 'react'
import BooksItem from './BooksItem';


export class Book extends Component {
    mybook =
        [
    
    {
      "id": 2,
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 450,
      "image": "https://m.media-amazon.com/images/I/51-uspgqWIL.jpg"
    },
    
    {
      "id": 4,
      "title": "The Psychology of Money",
      "author": "Morgan Housel",
      "price": 500,
      "image": "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
      "id": 5,
      "title": "Ikigai",
      "author": "Héctor García",
      "price": 280,
      "image": "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
    },
    
    
    {
      "id": 9,
      "title": "The Subtle Art of Not Giving a F*ck",
      "author": "Mark Manson",
      "price": 349,
      "image": "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
    },
    {
      "id": 10,
      "title": "Think and Grow Rich",
      "author": "Napoleon Hill",
      "price": 275,
      "image": "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
    },
    
    {
      "id": 13,
      "title": "Grit",
      "author": "Angela Duckworth",
      "price": 385,
      "image": "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg"
    },
    {
      "id": 14,
      "title": "Make Your Bed",
      "author": "William H. McRaven",
      "price": 250,
      "image": "https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg"
    },
    
    
    {
      "id": 18,
      "title": "The Four Agreements",
      "author": "Don Miguel Ruiz",
      "price": 310,
      "image": "https://m.media-amazon.com/images/I/81N7FmJhbhL.jpg"
    },
    
    
    {
      "id": 24,
      "title": "Sapiens",
      "author": "Yuval Noah Harari",
      "price": 500,
      "image": "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
    },
    
    {
      "id": 26,
      "title": "The Intelligent Investor",
      "author": "Benjamin Graham",
      "price": 600,
      "image": "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg"
    },
    
    {
      "id": 28,
      "title": "The Lean Startup",
      "author": "Eric Ries",
      "price": 390,
      "image": "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
    },
    {
      "id": 29,
      "title": "Rework",
      "author": "Jason Fried",
      "price": 330,
      "image": "https://m.media-amazon.com/images/I/61McsadO1OL.jpg"
    },
    {
      "id": 30,
      "title": "Zero to One",
      "author": "Peter Thiel",
      "price": 350,
      "image": "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg"
    }
  ]


  


    constructor(){
        super();
        this.state ={
          
           priceFilter:"",
           books: this.mybook,
            
        };
        console.log("i am constructor");
    }
    
    handlePriceFilterChange =(filter)=>{
        this.setState({priceFilter: filter});


    }
    
    
    filterBooks =()=>{
        const {  books , priceFilter}= this.state;
        const search = (this.props.search||"").toLowerCase();
        return books.filter(book => { 
             const matchesSearch =
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search);
           
            const matchesPrice =
        priceFilter === '' ||
        (priceFilter === 'low' && book.price < 300) ||
        (priceFilter === 'mid' && book.price >= 300 && book.price <= 400) ||
        (priceFilter === 'high' && book.price > 400);
        return matchesPrice && matchesSearch;


        });

    };


    
  render() {
    const filteredBooks =this.filterBooks();
    console.log("i am render");
    return (
        
      <div className='container my-4'>
        <h1 className='text-center mb-4'style={{marginTop:'90px'}}>Some Weekly Bestsellers</h1>
        <div className='mb-4 text-center'>
            <button className='btn btnprimary mx-2' onClick={() =>this.handlePriceFilterChange('')}>All Books</button>

            <button className='btn btnprimary mx-2' onClick={() =>this.handlePriceFilterChange('low')}>price below 300</button>
             <button className='btn btnprimary mx-2' onClick={() =>this.handlePriceFilterChange('mid')}>price between 300 and 400</button>
              <button className='btn btnprimary mx-2' onClick={() =>this.handlePriceFilterChange('high')}>price above 400</button>
        </div>
        <div className='row justify-content-center'>
            {filteredBooks.length > 0 ?(
                filteredBooks.map(book => (

            
              <div className='col-md-4'key ={book.id}>
                <BooksItem title = {book.title} author={book.author} image={book.image} id={book.id} price={book.price} onAddToCart={()=>this.props.onAddToCart(book)} 
                    />
            </div>
            ))
        ):(
             <p className="text-center">No books match your search or filter.</p>
        )}
        </div>

      </div>

    )
  }
}


