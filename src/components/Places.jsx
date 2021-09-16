import React, { useState } from "react";
import "../Data";
const Places = () => {
    const [places, setPlaces] = useState(Data[1]);
    return (
        <>
            {places.map((item) => {
                const { id, title, image, desc } = item;

                return (
                    <div className="container">
                        <h2 className="text-center">{title}</h2>
                        <Image
                            src={"/" + image}
                            style={{ width: "10rem", height: "12rem" }}
                        />
                        <p>{desc}</p>
                        <hr></hr>
                    </div>
                );
            })}
        </>
    );
};

export default Places;
