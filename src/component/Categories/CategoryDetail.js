import React,{useEffect,useState} from 'react';
import {useParams,Link} from "react-router-dom";

// Writes the catalog list from API to the screen
function CategoryDetail() {
    let params = useParams();
    let catolog = params.name;
    const [Jewelery, setJewelery] = useState([]);
    const [Electronics, setElectronics] = useState([]);
    const [MensClothing, setMensClothing] = useState([]);
    const [WomensClothing, setWomensClothing] = useState([]);
    useEffect(() => {
        jeweleryData();
        electronicsData();
        mensClothingData();
        womensClothingData();
         
        
    } ,[])
  const electronicsData = async () =>{
   let res = await(
     await fetch('https://fakestoreapi.com/products/category/electronics')
   ) .json();
   setElectronics(res) ;   
      
  }
  const jeweleryData = async () =>{
   let res = await(
     await fetch('https://fakestoreapi.com/products/category/jewelery')
   ) .json();
   setJewelery(res) ;   
      
  }
  const mensClothingData = async () =>{
   let res = await(
     await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
   ) .json();
   setMensClothing(res) ;   
      
  }
  const womensClothingData = async () =>{
   let res = await(
     await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
   ) .json();
   setWomensClothing(res) ;   
      
  }
            
            
    
       
     
         
    if (catolog === "jewelery"){
        return (
            <div className = "row pt-7">
                {
                    Jewelery.map((iterate) => (
                        
                        <div className = "col-lg-3" style={{maxwidth: "540px"}} key = {iterate.id}>
                        <div className="row no-gutters">
                            <Link to = {`/products/${iterate.id}`}>
                            <div className="col-md-auto" style={{cursor: "pointer"}}>
                            <img src = {iterate.image}  className  = "card-img-top" alt = "Sample" />
                            </div>
                            </Link>
                            <div className="col-md-auto">
                            <div className="card-body" style={{cursor: "pointer"}}>
                                <h5 className="card-title" >{iterate.title}</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{color : "red"}}>Price: {iterate.price}$</li>
                                    <li className="list-group-item" style={{color : "red"}}>{iterate.category}</li>                                   
                                </ul>
                                <div className = "d-flex justify-content-between align-items-center">
                                    <button type = "button" className = "btn btn-md btn-outline-danger" >Add to Cart</button>
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
    // men's clothing output
    else if(catolog === "men's clothing") {       
            return (
                <div className = "row pt-7">
                    {
                        MensClothing.map((iterate) => (
                            
                            <div className = "col-lg-4" key = {iterate.id}>
                            <div className= "card mb-4" style={{maxwidth: "540px"}}>
                            <Link to = {`/products/${iterate.id}`}>
                                <div className = 'col-md-8 ' style={{cursor: "pointer"}}>
                                    <img src = {iterate.image} className  = "card-img-top" alt = "Sample" />
                                </div> 
                            </Link>       
                                <div className="col-md-8">
                                    <div className="card-body" style={{cursor: "pointer"}}>
                                        <h5 className="card-title"> {iterate.title}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" style={{color : "red"}}>Price: {iterate.price}$</li>
                                            <li className="list-group-item" style={{color : "red"}} >{iterate.category}</li>  
                                        </ul>
                                        <div className = "d-flex justify-content-between align-items-center">
                                        <div className = "d-flex justify-content-between align-items-center">
                                        <button type = "button" className = "btn btn-md btn-outline-danger" >Add to Cart</button>
                                            <h5> <span className='badge badge-danger'>  Rate: {iterate.rating.rate} {"|"} Count: {iterate.rating.count}  </span>  </h5>
                                            
                                        </div>
                                            
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
    // electronics Output
    else if(catolog === "electronics") {
            return (
                <div className = "row pt-7">
                    {
                        Electronics.map((iterate) => (
                            
                            <div className = "col-lg-3" style={{maxwidth: "540px"}} key = {iterate.id}>
                            <div className="row no-gutters">
                            <Link to = {`/products/${iterate.id}`}>
                                <div className="col-md-auto" style={{cursor: "pointer"}}>
                                <img src = {iterate.image}  className  = "card-img-top" alt = "Sample" />
                                </div>
                            </Link>    
                                <div className="col-md-auto">
                                <div className="card-body" style={{cursor: "pointer"}}>
                                    <h5 className="card-title" >{iterate.title}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{color : "red"}}>Price: {iterate.price}$</li>
                                        <li className="list-group-item" style={{color : "red"}} >{iterate.category}</li>                                       
                                    </ul>
                                    <div className = "d-flex justify-content-between align-items-center">
                                        <button type = "button" className = "btn btn-md btn-outline-danger" >Add to Cart</button>
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
     // women's clothing Output
     else if(catolog === "women's clothing") {
            return (
                <div className = "row pt-7">
                    {
                        WomensClothing.map((iterate) => (
                            
                            <div className = "col-lg-4" key = {iterate.id}>
                            <div className= "card mb-4" style={{maxwidth: "540px"}}>
                            <Link to = {`/products/${iterate.id}`}>
                                <div className = 'col-md-8 ' style={{cursor: "pointer"}}>
                                    <img src = {iterate.image} className  = "card-img-top" alt = "Sample" />
                                </div>    
                            </Link>    
                                <div className="col-md-8">
                                    <div className="card-body" style={{cursor: "pointer"}}>
                                        <h5 className="card-title" > {iterate.title}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" style={{color : "red"}}>Price: {iterate.price}$</li>
                                            <li className="list-group-item" style={{color : "red"}}>{iterate.category}</li>                                                                                     
                                        </ul>
                                        <div className = "d-flex justify-content-between align-items-center">
                                        <button type = "button" className = "btn btn-md btn-outline-danger" >Add to Cart</button>
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
}
export default  CategoryDetail;