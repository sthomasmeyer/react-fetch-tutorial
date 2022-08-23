// Import React itself (+) the 'useState' and 'useEffect' hooks.
import React, { useState, useEffect } from 'react';
import './SpaceImage.css';
import { NASA_API_KEY } from './secrets';

function SpaceImage() {
  // Declare three new state variables --> 'error', 'isLoaded', and 'image'
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    // After the first query parameter 'api_key' (prefixed by a [?])...
    // is added to the url, subsuquent query parameters are preceded by...
    // an ampersand [&].
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=2018-08-11`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImage(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='SpaceImage'>
        <h1 className='SpaceImage-header'>
          The NASA Astronomy Picture of the Day
        </h1>
        <img className='SpaceImage-image' src={image.url} alt='NASA PoD' />
        <p className='SpaceImage-caption'>{image.explanation}</p>
      </div>
    );
  }
}

export default SpaceImage;
