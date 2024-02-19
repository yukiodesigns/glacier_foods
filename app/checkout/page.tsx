import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      <div className="bg-white shadow-md rounded-md p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <p>Total:</p>
          <p>$99.99</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Shipping Fee:</p>
          <p>$5.00</p>
        </div>
        <div className="border-t border-gray-200 py-4 mb-4"></div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold">Grand Total:</p>
          <p className="font-semibold">$104.99</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
        {/* Payment options */}
        <div className="flex items-center mb-4">
          <input type="radio" id="cardPayment" name="paymentMethod" className="mr-2" />
          <label htmlFor="cardPayment">Credit Card</label>
          {/* Display card payment details */}
          <p className="ml-auto">Pay securely with your credit card.</p>
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="mpesaPayment" name="paymentMethod" className="mr-2" />
          <label htmlFor="mpesaPayment">M-Pesa</label>
          {/* Display M-Pesa payment details */}
          <p className="ml-auto">Pay using M-Pesa mobile money.</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/cart" className="bg-yellow-500 text-white px-4 py-2 rounded-md inline-block mr-4">
          Back to Cart
        </Link>
        <button className="bg-black text-white px-4 py-2 rounded-md inline-block">Place Order</button>
      </div>
    </div>
    </div>
  )
}

export default page