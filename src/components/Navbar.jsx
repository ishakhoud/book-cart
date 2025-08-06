import React, { Component} from 'react'

export class Navbar extends Component {
    handleSearch =(event) =>{
        this.props.onSearchChange(event.target.value);
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{
    top: 0,
    zIndex: 999,
    
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    
  }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Book-Store</a>
    <button className='btn btn-outline-success me-6 d-lg-flex'type='button'onClick={this.props.onCartClick}> View your cart : {this.props.cartCount}</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        
        
      </ul>
       <form className='d-none d-lg-flex' role='search' target='_blank'>
        <button className='btn btn-outline-success mx-2 ' type='button' onClick={this.props.onCartClick}>  View your cart : {this.props.cartCount}</button>
       </form>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search By Title or Author" aria-label="Search" onChange={this.handleSearch}/>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

