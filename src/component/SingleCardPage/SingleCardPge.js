import React from 'react';
import {useParams,Link} from "react-router-dom";
import {useState,useEffect} from 'react';

function SingleCardPge ()  {
  const [error, setError] = useState(null);
  const [id, setId] = useState([]);
  
  // get id from Url
    let params = useParams();
    let SingleCard = params.id;
    //Get single product
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${SingleCard}`)
          .then(res => res.json())
          .then(
            (result) => {
            
              setId(result);
            },
          
            (error) => {
              setError(error);
            }
          )
      }, [SingleCard])
   
     
   if(error) {
       return <div>Error: {error.message}</div>
   }else{
    return (       
        
        <div className="card mb-3 pt-7"  >
        <div className="row g-0">
            <div className="col-md-4">
            <img src= {id.image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{id.title}</h5>
                <p className="card-text">{id.description}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"style={{color: "red"}}>Price: {id.price}$</li>
                    <li className="list-group-item" ><Link to = {`/categories/${id.category}`} style={{color : "red"}}>{id.category}</Link> </li>
                </ul>
                <div className = "d-flex justify-content-between align-items-center">                                   
                 <button type = "button" className = "btn btn-md btn-outline-danger" >Add to Cart</button> 
               </div>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>   
)
   }
        
    }

export default SingleCardPge;