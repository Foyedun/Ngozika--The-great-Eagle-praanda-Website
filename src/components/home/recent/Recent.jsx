import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent-section">
        <div className="recent-wrapper">
          <Heading
            title="Recently Listed Properties"
            subtitle="Browse the latest properties available across Nigeria. From modern apartments to spacious family homes—find a place you’ll love to call home."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
