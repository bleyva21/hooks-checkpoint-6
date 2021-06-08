// eslint-disable-next-line
import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      productList: [],
      product: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.formatter = this.formatter.bind(this)
  }

  handleClick(event){
    this.setState({product: this.state.productList[event.target.id-1]})  
    // return {this.formatter()}
  } 

  formatter(){
    if(this.state.product !== '') { 
      return (
        <ul className="description">
          <li>Name: {this.state.product.name}</li>
          <li>Slogan: {this.state.product.slogan}</li>
          <li>Description: {this.state.product.description}</li>
          <li>Category: {this.state.product.category}</li>
          <li>Price: {this.state.product.default_price}</li>
        </ul>
      )
    }
  }

  componentDidMount() {
    fetch("http://18.224.200.47/products/list")
      .then(response => response.json())
      .then(json => this.setState({ productList: json }))
      //.then(() => console.log(this.state.productList))
  }

  render() {
    const productFormatted = this.state.productList.map(product => 
    <div key={product.id}>
        <li>{product.name}</li>
        <button id={product.id} onClick={this.handleClick}>Info</button>
    </div>)

    return (
      <div>
        {productFormatted}
        {this.formatter()}
      </div>
    )
  }
  
}

export default ProductList;
    