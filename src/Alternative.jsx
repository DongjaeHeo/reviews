import { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaRandom,
} from "react-icons/fa";
const App = () => {
  const [number, setNumber] = useState(0);
  const { name, job, image, text } = people[number];

  const nextPerson = () => {
    setNumber((number) => {
      const nextNumber = (number + 1) % people.length;
      console.log(nextNumber);
      return nextNumber;
    });
  };
  const prevPerson = () => {
    setNumber((number) => {
      const nextNumber = (number - 1 + people.length) % people.length;
      console.log(nextNumber);
      return nextNumber;
    });
  };
  const randomPerson = () => {
    const randomNuber = Math.floor(Math.random() * people.length);
    if (randomNuber === number) {
      randomPerson();
    } else {
      setNumber(randomNuber);
    }
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          <FaRandom />
        </button>
      </article>
    </main>
  );
};
export default App;
