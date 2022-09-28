import React from 'react';
import './App.css';


const Card = () => {
    return(
        <div className='main--container'>
            <div className='wrapper'>
                <div className='card--container'>
                    <img src="https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/the_great_gatsby_key_art.jpg" alt="" />
                    <h1>Author: F. Scott Fitzgerald</h1>
                    <h2>Published: April 10, 1925</h2>
                    <p><b>Definition:</b> Ex magnam possimus sit, esse, essitatibus hic eveniet. Officia!</p>
                    <h3>Price: $ 35</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;