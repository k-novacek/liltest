import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Product extends React.Component {
    render () {
        const rating = this.props.rating;
        const ratingElements = Array(5).fill(null).map((val, index) => {
            return (
                <span className={`fa fa-star ${index <= rating ? "checked" : ""}`}></span>
            )
        });
        return (
            <div className="product">
                <a href="#">
                    <img src={this.props.image}>
                    </img>
                    <div className="rating">
                        {ratingElements}
                        <span className="ratings">
                            ({this.props.ratings})
                        </span>
                    </div>
                    <div className="category">
                        {this.props.category}
                    </div>
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="contents">
                        {this.props.contents}
                    </div>
                    <div className={`price ${this.props.specialPrice ? "special" : ""}`}>
                        {this.props.specialPrice ? this.props.specialPrice : this.props.price}
                    </div>
                    <a href="#" className="add-to-cart">add to cart</a>
                    {this.props.specialOffer ? (<span className="special-offer">{this.props.specialOffer}</span>) : ""}
                </a>
            </div>
        );
    }
}

class Products extends React.Component {
    renderProduct(p) {
        return <Product 
            {...p}
        />
    }
    
    render() {
        const products = this.props.products;
        return (
            <div className="products">
                {products.map((p) => {
                    console.log(p);
                    return this.renderProduct(p);
                })}
            </div>
        )
    }
}

const products = [
    {
        image:"./images/SW1113.webp",
        category: "Swanson Premium",
        name:"Zinc Picolinate - Body Preferred From",
        rating:5,
        ratings:440,
        contents:"5,000 IU 250 Sgels",
        price:"$2.59"
    },
    {
        image:"./images/SW1371.webp",
        category: "Swanson Premium",
        name:"Vitamin D3 - Highest Potency",
        rating:5,
        ratings:95,
        contents:"22 mg 60 caps",
        price:"$10.99"
    },
    {
        image:"./images/SW1613.webp",
        category: "Swanson Premium",
        name:"Tumeric & Black Pepper",
        rating:5,
        ratings:823,
        contents:"60 Veg Caps",
        price:"$13.99",
        specialPrice:"2 for $13.99",
        specialOffer:"BOGO"
    },
    {
        image:"./images/DELIVERYINS01.webp",
        category: "Swanson Health Products, Inc.",
        name:"Delivery Insurance",
        rating:5,
        ratings:78,
        contents:"",
        price:"$1.00",
    },
    {
        image:"./images/SWA051.webp",
        category: "Swanson Premium",
        name:"Dr. Stephen Langer's Ultimate 16 Strain Probiotic with FOS",
        rating:5,
        ratings:238,
        contents:"3.2 Billion CFU 60 Veg Drcaps",
        price:"$14.79",
        specialPrice:"2 for $14.79",
        specialOffer:"BOGO"
    },
]

ReactDOM.render(<Products products={products}/>, document.getElementById('root'));