import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { Place } from "../Data";
import { useLocation } from "react-router";

function ImageComponent({ image, title }) {
  return (
    <div className="img-div">
      <img
        src={"../" + image}
        className="card-img-top myImg"
        style={{
          width: "100%",
          height: "auto",
        }}
        alt={title}
      />
    </div>
  );
}

const About = () => {
  const [data] = useState(Place);
  const [dataPlace, setPlace] = useState(Place[1]);
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    Place.forEach((curElm) => {
      const { title } = curElm;
      if (location.pathname.replace("/about/", "") === title) {
        setPlace(curElm);
      }
    });
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/about" ? (
        data.map((elem) => {
          const { title, image, desc } = elem;
          return (
            <div className="about">
              <h2 className="text-center text-uppercase">{title}</h2>
              <Image
                src={image}
                style={{ width: "20rem", height: "15rem" }}
              />
              <p>{desc}</p>
              <hr></hr>
            </div>
          );
        })
      ) : (
        <div className="menu-items container-fluid mt-5 ">
          <h1 className="text-center text-uppercase display-1">
            {dataPlace.title}
          </h1>
          <div className="m-5 p-5 border-bottom border-top">
            <h2>About {dataPlace.title}:</h2>
            <p>{dataPlace.desc}</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
            className="border m-5 p-5"
          >
            <ImageComponent image={dataPlace.image} title={dataPlace.title} />
            <ImageComponent image={dataPlace.img3} title={dataPlace.title} />
            <ImageComponent image={dataPlace.img2} title={dataPlace.title} />
            <ImageComponent image={dataPlace.img1} title={dataPlace.title} />
          </div>
        </div>
      )}
    </>
  );
};
export default About;
