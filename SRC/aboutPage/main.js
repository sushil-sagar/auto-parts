import React from 'react'
import About from "./About";
import FrequentlyAskedQuestions from './faq/faq';
import CardCarousels from '../carousels/logocarousels';
import PartListPage from '../PartImage/PartImage';
const main = () => {
  return (
    <div>
        <About/>
        <FrequentlyAskedQuestions/>
        <CardCarousels/>
        <PartListPage/>
    </div>
  )
}

export default main