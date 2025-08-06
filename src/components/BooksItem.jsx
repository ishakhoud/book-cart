import React, { Component } from 'react'

export class BooksItem extends Component {
  render() {
   
    let { title , author , price , image ,onAddToCart} = this.props;
    return (
      <div>
        <div className="card" style={{ width: '250px', height:'400px' ,margin: '10px' }}>
  <img src={image} className="card-img-top" style={{ height: '200px', objectFit: 'contain', padding:'10px' }}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">by {author}</p>
    <p className="card-text">Price - ₹{price}</p>
     <button onClick={onAddToCart} className="btn btn-success mx-2">Add to cart</button>

  </div>
</div>
</div>
    )
  }
}

export default BooksItem
