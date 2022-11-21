import React, { useEffect } from 'react';
import { useState } from "react";


import './MovieForm.css';

export default function MovieForm() {
    return(
        <container className='FormPage'>
            <div className='AddMovie'>
                 <div className='Form'>
                 <h1> Add Movie </h1>
                    <MyForm></MyForm>
              </div> 
            </div>
        </container>

    )
}

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
        <>
        <div className='MovieForm'>
            <div className='MovieInfo'> 
            <form onSubmit={handleSubmit}>
                    <label>Movie Title
                        <input
                            type="text"
                            name="title"
                            value={inputs.title || ""}
                            onChange={handleChange} />
                    </label>
                    <label> Year of Release
                        <input
                            type="number"
                            name="genres"
                            value={inputs.genres || ""}
                            onChange={handleChange} />
                    </label>
                    <label> IMBD
                        <input
                            type="number"
                            step="0.1"
                            name="imdb"
                            value={inputs.imdb || ""}
                            onChange={handleChange} />
                    </label>
                    <label> Synopsis
                        <textarea
                            type="number"
                            name="yearRelease"
                            value={inputs.yearRelease || ""}
                            onChange={handleChange} />
                    </label>

                    <input type="submit" className="SubmitBtn"/>
                </form>
            </div>
                <div class="movie-img">
                    <div class="movie-poster">
                        <i class='bx bx-image'></i>
                    </div>
                    <UploadImages></UploadImages>
                </div>
            </div>
        </>
    )
  }

  function UploadImages() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach (image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
            <input type='file' multiple accept='image/*' onChange={onImageChange} className='Upload'/>
            { imageURLs.map(imageSrc => <img src={imageSrc} /> ) }
        </>
    )
};

