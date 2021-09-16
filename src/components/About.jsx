import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { Place } from "../Data";
import { useLocation } from "react-router";

const About = () => {
    const [data, setData] = useState(Place);
    const [dataPlace, setPlace] = useState(Place[1]);
    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        Place.map((curElm) => {
            const { id, title, image, desc, img1, img2, img3 } = curElm;
            if (location.pathname.replace("/about/", "") == title) {
                setPlace(curElm);
            }
        });
    }, []);

    return (
        <>
            {location.pathname === "/about" ? (
                data.map((elem) => {
                    const { id, title, image, desc } = elem;
                    return (
                        <div className="about">
                            <h2 className="text-center">{title}</h2>
                            <Image
                                src={"/" + image}
                                style={{ width: "20rem", height: "15rem" }}
                            />
                            <p>{desc}</p>
                            <hr></hr>
                        </div>
                    );
                })
            ) : (
                <div className="menu-items container-fluid mt-5 ">
                    <h1 className="text-center">{dataPlace.title}</h1>
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row my-5">
                                <div className="col-12 col-md-3 col-lg-3 img-div ">
                                    <img
                                        src={"/" + dataPlace.image}
                                        className="card-img-top myImg"
                                        style={{
                                            height: "10rem",
                                            width: "15rem",
                                        }}
                                    />
                                </div>

                                <div className="col-12 col-md-12 col-lg-3 mb-3  img-div ">
                                    <img
                                        src={"/" + dataPlace.img1}
                                        className="card-img-top myImg"
                                        style={{
                                            height: "10rem",
                                            width: "15rem",
                                        }}
                                    />
                                </div>

                                <div className="col-12 col-md-12 col-lg-5 img-div ">
                                    <img
                                        src={"/" + dataPlace.img2}
                                        className="card-img-top myImg"
                                        style={{
                                            height: "10rem",
                                            width: "15rem",
                                        }}
                                    />
                                </div>

                                <div className="col-12 col-md-12 col-lg-4 pb-3 img-div ">
                                    <img
                                        src={"/" + dataPlace.img3}
                                        className="card-img-top myImg"
                                        style={{
                                            height: "10rem",
                                            width: "15rem",
                                        }}
                                    />
                                </div>
                                <hr />
                                <h2>About {dataPlace.title}:</h2>
                                <p>{dataPlace.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default About;
