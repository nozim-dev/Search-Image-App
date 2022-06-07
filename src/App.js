import { useState } from "react";
import "./App.css";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState([]);
  const ACCESS_KEY = "9EP-vL2-kO_uIX-Eg_CDHZ4Co7XzRaWRmSpkQ26o7n0";

  const getValue = (event) => {
    setImage(event.target.value);
  };

  const getImages = () => {
    const urlAPI =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      ACCESS_KEY;
    axios.get(urlAPI).then((response) => {
      setResult(response.data.results);
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Search Image App using unsplash.com Api</h1>
        <div className="formSection">
          <div className="formSection_box">
            <input
              type="text"
              name="image"
              placeholder="Search free high-resolution photos"
              onChange={getValue}
            />
            <svg
              className="DFW_E nT46U NIGLg"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
              onClick={getImages}
            >
              <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="row">
        {result.map((image) => (
          <div key={image.id} className="column">
            <LazyLoadImage
              className="resultImage"
              src={image.urls.full}
              effect="blur"
              delayTime={300}
            />
            <p className="username"> Photo by {image.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
