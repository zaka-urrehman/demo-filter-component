"use client";

import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Circle from "@/components/Circle";
import SubComponent from "@/components/SubComponent";
<<<<<<< HEAD
import PriceRange from "./priceRange";
import SortBy from "./sortBy";
=======
>>>>>>> bac42193460d9ad09a7dc56f04fea0ef7bc1fea3

// import SubComponent3 from "./subComponent3";

const Filter = () => {
  return (
    <Wrapper>
      <SubComponent  //heading 1 
        heading="Availability"
        subHeading={["In stock", "Out of stock"]}
      />
 
      <SubComponent heading="Price" subHeading={null} /> {/*this one is for the price range*/}

      <SubComponent heading="Size" subHeading={["COMPACT", "GRANDE", "MIDI"]} />
      <SubComponent heading="Product type" subHeading={["Tote Bag"]} />
      <SortBy
        heading="Sort by"
        subHeading={[
          "Best selling",
          "Alphabetically, A-Z",
          "Alphabetically, Z-A",
          "Price, low to high",
          "Price, high to low",
          "Date, old to new",
          "Date, new to old",
        ]}
      />
<<<<<<< HEAD

=======
>>>>>>> bac42193460d9ad09a7dc56f04fea0ef7bc1fea3
    </Wrapper>
  );
};

export default Filter;
