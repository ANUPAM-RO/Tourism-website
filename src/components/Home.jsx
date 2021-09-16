import React, { useState } from "react";
import Card2 from "./Card2";
import Card1 from "./Card1";
import { Data } from "../Data";
const Home = () => {
    const [items, setItems] = useState(Data);
    return (
        <>
            <Card2 />
            <Card1 items={items} />
        </>
    );
};

export default Home;
