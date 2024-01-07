import React from 'react'
import CustomerServicePage from './CustomerService'
import CardCarousels from '../carousels/logocarousels'
import PartImage from '../PartImage/PartImage'

const main = () => {
  return (
    <div>
        <CustomerServicePage/>
        <CardCarousels/>
        <PartImage/>
    </div>
  )
}

export default main