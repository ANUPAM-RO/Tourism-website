import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Card1 from "./Card1";

const Images = createContext();
const Title = createContext();
const Desc = createContext();
const Detailsplace = () => {
    return (
        <div className="container-fluid">
            <Row className="pd-3">
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                <Col>
                    <Images.Provider value={"images/Gangtok/Namchi.jpg"}>
                        <Title.Provider value={"Gangtok"}>
                            <Desc.Provider
                                value={
                                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            >
                                <Card1 />
                            </Desc.Provider>
                        </Title.Provider>
                    </Images.Provider>
                </Col>
                {/* <Col>
                    <Details
                        img="images/Mumbai/a3434ea6a272b73a521807a36d25d1ca.jpg"
                        title="Mumbai"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Delhi/1896134.jpg"
                        title="Delhi"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col>
                <Col>
                    <Details
                        img="images/Kolkata/photo-1542709618-9fa4290f0cfc.jpeg"
                        title="Kolkata"
                        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Details>
                </Col> */}
            </Row>
        </div>
    );
};
export default Detailsplace;
export { Images, Title, Desc };
