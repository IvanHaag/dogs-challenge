import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const DOGS_API_URLS = {
  allBreeds: "https://dog.ceo/api/breeds/list/all",
  randomImage: "https://dog.ceo/api/breeds/image/random",
  images: "https://dog.ceo/api/breed/hound/images",
};

export const App = () => {
  const [image, setImage] = useState([]);
  const [breedList, setBreedList] = useState([]);

  //First Call
  useEffect(() => {
    console.log("called fetch");
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);
        setImage(data.message);
      })
      .catch((err) => console.error("received error", err));
  }, []);
  useEffect(() => {
    console.log("called fetch");
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);
        setBreedList(data.message);
      })
      .catch((err) => console.error("received error", err));
  }, []);

  const handleInput = (v) => {
    if (v !== null) {
      console.log("fetch");
      fetch(v)
        .then((response) => response.json())
        .then((data) => {
          console.log("response", data);
          if (data.status !== "error") {
            setImage(data.message);
          }
        })
        .catch((err) => console.error("received error", err));
    } else {
      console.log("Did not Fetch");
    }
  };
  return (
    <div>
      <div>
        <h1>Razas de perro</h1>
        <SearchBar breedList={breedList} onClick={handleInput} />
      </div>
      <div>
        {image.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
    </div>
  );
};
