import React, { useState } from "react";
import "./App.css";
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
  // const [toggle, settoggle] = useState(false);
  let [number, setnumber] = useState(0);
  const addNumber = () => {
    setnumber((number += 1));
  };
  const subtractNumber = () => {
    setnumber((number -= 1));
  };

  // const handleToggle = () => {
  //   settoggle(!toggle);
  // };
  // // this is the least common way of conditionally rendering something
  // if (toggle) {
  //   return (
  //     <div>
  //       <h1>Good Bye!</h1>
  //       <button onClick={handleToggle}>CLICK ME!</button>
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <div className="container">
        <Movies movieImg={fate} />
        <Movies movieImg={outside} />
        <Movies movieImg={startrek} />
        <Movies movieImg={gambit} />
        <Movies movieImg={witcher} />
      </div>
      <div className="container2">
        <Vacation type="Entire homes" locationImg={homes} />
        <Vacation type="Unique stays" locationImg={uniquestays} />
        <Vacation type="Cabins and cottages" locationImg={cabines} />
        <Vacation type="pets allowed" locationImg={petsallowed} />
      </div>
      <div className="container2">
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
      {/* <div>
        {toggle ? <h1>Hello</h1> : <h1>Goodbye</h1>}
        ternary operator is a better way of creating conditional rendering when
        we have if or else
        <button className={toggle ? "yellow" : "green"} onClick={handleToggle}>
          CLICK ME!
        </button>
        {toggle && (
          <div>
            <h3>This is a pop-up</h3>
            <p>some cool text</p>
          </div>
        )}
      </div> */}

      <div className="toggle-btn">
        <button className="btn" onClick={subtractNumber}>
          -
        </button>
        <h1>{number}</h1>
        <button className="btn" onClick={addNumber}>
          +
        </button>
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
