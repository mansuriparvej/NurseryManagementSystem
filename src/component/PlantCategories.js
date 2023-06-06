import React from "react";
import { Link } from "react-router-dom";
import { FLOWERS } from "../shared/data/flowers";
import PlantList from "./PlantList";

// Display all plants in a specific category
export const Flowers = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h3>
          <Link
            to="/catalog"
            className="no-underline"
            style={{ fontSize: "0.5em" }}
          >
            <span role="img" aria-label="Go Back">
              🔙
            </span>
          </Link>{" "}
          Flowers
        </h3>

        <PlantList plantsData={FLOWERS} />
      </div>
      </React.Fragment>

  );
};
