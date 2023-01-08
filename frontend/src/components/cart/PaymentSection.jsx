import React from 'react'
import { Link } from 'react-router-dom'
const PaymentSection = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1> Order confirmed</h1>
            <p>Order placed successfully ,you can check your order status below </p>
            <Link to='/myorders'>Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSection