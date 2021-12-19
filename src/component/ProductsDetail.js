import React from 'react';
import { Link } from "react-router-dom";
import { Products } from "./Url";
function ProductsDetail() {

    let Product = Products();

    return (
        <div className="row pt-7 " >

            {

                Product.map((product) => (
                    <div className="col-lg-4" key={product.id}>
                        <div className="card mb-4"  >
                            <div className='col-md-8 '>

                                <Link to={`/products/${product.id}`} >
                                    <img src={product.image} className="card-img-top" alt="Sample" />
                                </Link>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 className="card-title" > {product.title}</h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{ color: "red" }}>Price: {product.price}$</li>
                                        <li className="list-group-item"   ><Link to={`/categories/${product.category}`} style={{ color: "red" }}>{product.category}</Link></li>
                                    </ul>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="button" className="btn btn-md btn-outline-danger" >Add to Cart</button>


                                    </div>
                                    <h5> <span className='badge badge-danger'> Rate: {product.rating.rate} {"|"} Count: {product.rating.count} </span>  </h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>

                        </div>
                    </div>

                ))}



        </div>
    )
}



export default ProductsDetail;