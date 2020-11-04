import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from "./data";
function App() {
  /*  initial State */
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  /* useEffect is used to check whether index negative and greater than people.length - 1 or not*/
  /* 2 parameters is used in: index, people */
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      return setIndex(lastIndex);
    }
    if (index > lastIndex) {
      return setIndex(0);
    }
  }, [index, people]);

  /* useEffect is used to make a slide to change the profile in 3s */
  useEffect(() => {
    let slide = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slide);/* eradicate(destroy) async */
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div>
      {/* center */}
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          {
            /* create a position that using in article className */
          }
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          {
            /*  occur overload data in array => solution: useEffect to check index negative and greater than people.length - 1 or not*/
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        {/* create 2 btns prev and next */}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
