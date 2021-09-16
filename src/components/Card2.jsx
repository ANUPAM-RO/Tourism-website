import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
const Card2 = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        style={{ height: "25rem" }}
                        src="images/Kolkata/aerial-view-kolkata-city-india-aerial-view-kolkata-city-india-beautiful-sunset-over-famous-howrah-bridge-historic-114227808.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "
                        src="images/Delhi/india-new-delhi-government-parliament.jpg"
                        alt="Second slide"
                        style={{ height: "25rem" }}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/Kasmir/srinagar.jpg"
                        alt="Third slide"
                        style={{ height: "25rem" }}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/Karala/Best-Places-to-Visit-in-Kerala.jpg"
                        alt="Third slide"
                        style={{ height: "25rem" }}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="text-center pt-3">
                <h2>Must Popular Places</h2>
                <h4 className="text-secondary">
                    From historical cities to natural splendours, come see the
                    best of India
                </h4>
            </section>
        </>
    );
};

export default Card2;
