import React, { Component } from 'react'

export class Cart extends Component {
  render() {
    const { cartItems , onRemoveFromCart} =this.props;
    const total = cartItems.reduce((sum,book)=> sum + book.price, 0);
    return (
      <div className='container my-4'>
        <h1 style={{marginTop: '100px'}}>View Cart</h1>
        {cartItems.length === 0 ? (
            <p>Your Cart is Empty</p>

        ):(
            <div>
                {cartItems.map((book) =>(
                    <div key={book.id} className="card mb-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{book.title}</h5>
                    <p>Price: ₹{book.price}</p>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => onRemoveFromCart(book.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
                ))}
                <h4 className='mt-3'>Total : ₹{total}</h4>
            </div>

        )}
        
      </div>
    )
  }
}

export default Cart;
