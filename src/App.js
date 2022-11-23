import "./App.css";
import React from "react";
import fate from "./images/netflixFate.png";
import gambit from "./images/netflixGambit.png";
import outside from "./images/netflixOutside.png";
import startrek from "./images/netflixStarTrek.png";
import witcher from "./images/netflixWitcher.png";
import petsallowed from "./images/airbnbPets.png";
import homes from "./images/airbnbHome.png";
import cabines from "./images/airbnbCabin.png";
import uniquestays from "./images/airbnbUnique.png";
import pandemic from "./images/bbcPandemic.png";
import bbcpay from "./images/bbcPay.png";
import bbcmorgan from "./images/bbcMorgan.png";
import bbcunilever from "./images/bbcUnilever.png";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Movies movieImg={fate} />
        <Movies movieImg={outside} />
        <Movies movieImg={startrek} />
        <Movies movieImg={gambit} />
        <Movies movieImg={witcher} />
      </div>
      <div className="container">
        <Vacation type="Entire homes" locationImg={homes} />
        <Vacation type="Unique stays" locationImg={uniquestays} />
        <Vacation type="Cabins and cottages" locationImg={cabines} />
        <Vacation type="pets allowed" locationImg={petsallowed} />
      </div>
      <div className="container">
        <News text="Unlocking to quickly..." newsImg={pandemic} />
        <News text="NHS england..." newsImg={bbcpay} />
        <News
          text="Mental health charity says it is disappointed..."
          newsImg={bbcmorgan}
        />
        <News
          text="The owner of Dove and Vaseline will ..."
          newsImg={bbcunilever}
        />
      </div>
    </React.Fragment>
  );
};
// const Person = (props) => {
//   return (
//     <div>
//       <p>
//         I'm {props.name} and I'm {props.age}
//       </p>
//       <img src={props.personImg} alt="mario" />
//       <Pet
//         food="cookies"
//         pet={props.petName}
//         type={props.petType}
//         myName={props.name}
//       />
//     </div>
//   );
// };

// const Job = (props) => {
//   return <p> Hi I'm {props.title} </p>;
// };
// // why is this not rendering?
// const Pet = (props) => {
//   return (
//     <p>
//       My name is {props.myName}, my {props.type} name is {props.pet}. He like{" "}
//       {props.food}
//     </p>
//   );
// };

const Movies = (props) => {
  return <img id="movie" src={props.movieImg} alt="movie" />;
};

const Vacation = (props) => {
  return (
    <div>
      <img id="vacation" src={props.locationImg} alt="vacation" />
      <p>{props.type}</p>
    </div>
  );
};

const News = (props) => {
  return (
    <div>
      <img id="news" src={props.newsImg} alt="news" />
      <p>{props.text}</p>
    </div>
  );
};

export default App;
