import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../card.css";
import { Link } from "react-router-dom";

const Card1 = ({ items }) => {
    const takeData = () => {};

    return (
        <>
            <div className="menu-items container-fluid mt-5 ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {items.map((elem) => {
                                const { id, title, image } = elem;
                                return (
                                    <div
                                        className="items col-12 col-md-3 col-lg-3 col-xl-3 m-3"
                                        key={id}
                                    >
                                        <div className="row ">
                                            {/* for Image */}
                                            <div className="col-12 col-md-12 col-lg-4 img-div ">
                                                <div
                                                    className="card"
                                                    style={{ width: "15rem" }}
                                                >
                                                    <Link
                                                        to={"/about/" + title}
                                                    >
                                                        <img
                                                            src={image}
                                                            className="card-img-top myImg"
                                                            style={{
                                                                height: "10rem",
                                                            }}
                                                        />
                                                    </Link>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-center">
                                                            {title}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card1;
