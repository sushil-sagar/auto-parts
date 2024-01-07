import React from 'react'
import PartList from "./PartList";
import LogoCarousels from "../carousels/logocarousels";
import PopularProducts from "../homepage/CardCarousels/Cardcarousels";
import PartImage from "../PartImage/PartImage";
const main = () => {
  return (
    <div>
        < PartList/>
        <PopularProducts/>
        <LogoCarousels/>
        <PartImage/>
    </div>
  )
}

export default main