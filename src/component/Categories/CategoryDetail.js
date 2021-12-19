import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

// Writes the catalog list from API to the screen
function CategoryDetail() {
    let params = useParams();
    let catolog = params.name;
    const [categoryDetail, setCategoryDetail] = useState([]);



    useEffect(() => {
        function getFetchData() {
            return `https://fakestoreapi.com/products/category/${catolog}`;
        }
        const CategoryDetail = async () => {
            const res = await axios.get(getFetchData());
            setCategoryDetail(res.data);
        }
        CategoryDetail();
    }, [catolog]);


    return (
        <div className="row pt-7">
            {
                categoryDetail.map((iterate) => (

                    <div className="col-lg-3" style={{ maxwidth: "540px" }} key={iterate.id}>
                        <div className="row no-gutters">
                            <Link to={`/products/${iterate.id}`}>
                                <div className="col-md-auto" style={{ cursor: "pointer" }}>
                                    <img src={iterate.image} className="card-img-top" alt="Sample" />
                                </div>
                            </Link>
                            <div className="col-md-auto">
                                <div className="card-body" style={{ cursor: "pointer" }}>
                                    <h5 className="card-title" >{iterate.title}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{ color: "red" }}>Price: {iterate.price}$</li>
                                        <li className="list-group-item" style={{ color: "red" }}>{iterate.category}</li>
                                    </ul>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="button" className="btn btn-md btn-outline-danger" >Add to Cart</button>
                                        <h5> <span className='badge badge-danger'>  Rate: {iterate.rating.rate} {"|"} Count: {iterate.rating.count}  </span>  </h5>
                                    </div>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default CategoryDetail;