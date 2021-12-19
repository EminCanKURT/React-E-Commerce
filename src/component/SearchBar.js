import React from 'react';
import '../App.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Products } from "./Url"

function SearchBar(props) {
    let Product = Products();
    const [text, setText] = useState([]);
    const [sugges, setSugges] = useState([]);

    const onSuggestHandler = (text) => {
        setText(text);
        setSugges([]);
    }
    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = Product.filter(product => {
                const regex = new RegExp(`${text}`, "gi");
                return product.title.match(regex);
            })
        }





        setText(text);


        return (setSugges(matches))

    }



    return (
        <form >
            <div className='form-row mb-5  justify-content-end'>
                <div className='col-auto' style={{ marginTop: 10 }}>
                    <input type="text"
                        onChange={e => onChangeHandler(e.target.value)}
                        value={text}
                        onBlur={() => {
                            setTimeout(() => {
                                setSugges([]);
                            }, 100);
                        }}
                        className='form-control form-control-sm'
                        placeholder={props.placeholder}

                    />

                    {
                        sugges && sugges.map((sugges, i) =>
                            <Link to={`products/${sugges.id}`} key={i}>
                                <div className='suggestion col-md-auto justify-content-md-center '
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