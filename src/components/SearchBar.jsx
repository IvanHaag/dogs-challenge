import { useState } from "react";

const SearchBar = (props) => {
  const [inputName, setInputName] = useState("");
  let [breed, subBreed] = inputName.split(" ");
  let valid = "";
  const MAX_ELEMENTS = "10";

  function breedCheck() {
    let temp = "";
    if (subBreed !== undefined) {
      temp = breed;
      breed = subBreed;
      subBreed = temp;
    }

    if (props.breedList[breed] !== undefined) {
      if (subBreed !== undefined) {
        if (props.breedList[breed].includes(subBreed) === true) {
          valid = true;
        } else {
          valid = false;
        }
      } else {
        console.log("Is Breed");
        valid = true;
      }
    } else {
      console.log("Not Breed");
      valid = false;
    }
    console.log("valid=" + valid);
    return valid;
  }

  function fullLink() {
    let link = "https://dog.ceo/api/breed/";
    console.log(breed);
    console.log(subBreed);
    if (breedCheck() === true) {
      link += breed;
      if (subBreed !== undefined) {
        link += "/" + subBreed;
      }
      link += "/images/random/" + MAX_ELEMENTS;
    } else {
      link = null;
    }
    console.log(link);
    return link;
  }

  const onButtonPress = () => {
    props.onClick(fullLink());
  };

  return (
    <div>
      <input value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <button onClick={onButtonPress}>Search</button>
    </div>
  );
};
export default SearchBar;
