import React from 'react';
import axios from 'axios';
import '../App.css'
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";

function SearchBar(props) {
    const [Products, setProducts] = useState([]);
    const [text, setText] = useState([]);
    const [sugges, setSugges] = useState([]);

    useEffect(() => {
       const loadProduct = async () => {
           const res = await axios.get('https://fakestoreapi.com/products');
           setProducts(res.data);
       }
       loadProduct();
    }, [])
    const onSuggestHandler = (text) => {
        setText(text);
        setSugges([]);
    }
    const onChangeHandler = (text) =>{
        let matches = [];
        if(text.length>0) {
            matches = Products.filter(product => {
                const regex = new RegExp (`${text}`,"gi");
                return product.title.match(regex);
            })
        }
      
        const Product = setSugges(matches);
    
        
       
        setText(text);
       
   
       return (Product)          
    
    }
 

    
    return (
            <form >
                <div className='form-row mb-5  justify-content-end'>
                    <div className='col-auto'style={{marginTop : 10}}>
                        <input  type = "text"
                        onChange={e => onChangeHandler(e.target.value)}
                        value = {text}
                        onBlur={() => {
                            setTimeout(() => {
                                setSugges([]);
                            }, 100);
                        }}
                        className='form-control form-control-sm'
                        placeholder={props.placeholder}
                       
                        />
                      
                        {
                            sugges && sugges.map((sugges,i) =>
                            <Link to = {`products/${sugges.id}`} key ={i}>
                            <div  className='suggestion col-md-auto justify-content-md-center '
                            onClick={() => onSuggestHandler(sugges.title)}> {sugges.title} </div>
                            </Link>
                            )
                        }
                        
                            
                        
                    </div>
                </div>
                
            </form>
            )
}

export default SearchBar;