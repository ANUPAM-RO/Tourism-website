import "bootstrap/dist/css/bootstrap.min.css";
import "../card.css";
import { Link } from "react-router-dom";
import { Data as items } from "../Data";

const Card1 = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          {items.map((elem) => {
            const { id, title, image } = elem;
            return (
              <div key={id}>
                <Link to={"/about/" + title}>
                  <div className="card">
                    <img
                      src={image}
                      className="card-img-top"
                      style={{
                        height: "20rem",
                        width: "100%",
                      }}
                      alt="title"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card1;
