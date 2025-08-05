import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore by Location"
            subtitle="Discover beautiful homes across Nigeria—from vibrant cities to peaceful towns. Find the perfect place that fits your lifestyle and budget."
          />

         
        </div>
      </section>
    </>
  );
}

export default Location
