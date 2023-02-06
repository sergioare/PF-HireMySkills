import React from 'react'
import {loadStripe} from '@stripe/stripe-js' //come the stripe to connect platform
import NavBar from '../Navbar/Navbar'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js' // this element get the stripePromise to englobe another components like provider, here I bring the payment form for example, CardElemnt is the input that you put the number, date and postal code of the cardPayment
import axios from 'axios'
import { useSelector } from 'react-redux'

import "bootswatch/dist/lux/bootstrap.min.css";


// ? useElement --> is to call the elements to upload
const stripePromise = loadStripe('pk_test_51MUXsPIUj9w23It9mYyk2OKN7wdkoqil8Uoq3tTXesnFVLfE5WYwRWogToyMee6uSW1G7XM6fYskjyC4ioc0oLOm00IKbCmSa9')

// ! to another component 

const CheckoutForm = ()=>{ //this a componente and is the payment formulary
    const stripe = useStripe()//here we aregoing to call the methods of the checkout
    const elements = useElements()
    const shopping= useSelector((state) => state.shoppingCart);
    const total = shopping.map(service=>service.quantity * service.price).reduce((acc, element)=> acc +element, 0)



    const handleSubmit = async (e)=>{
        e.preventDefault()

    const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        })//this return two things... one error or the paymentMehtod
        if(!error){
            const { id } = paymentMethod;

            const {data} = await axios.post('http://localhost:4000/checkout',{
                id,
                amount: 10000
            })
            
            console.log(paymentMethod)

            console.log("ACA ESTA EL OTRO", data )
            elements.getElement(CardElement).clear();
        }
    }
    return (
        <form  className="card card-body" onSubmit={handleSubmit}>
            <img 
            src='https://idreamcareer.com/wp-content/uploads/2020/03/teaching-as-a-profession-all-you-need-to-know.webp' 
            alt='k68 keyborad'
            className="img-fluid"
            />

            <h3 className="text-center my-2">Price: ${total}</h3>
            <div className="form-group">

            <CardElement/>
            </div>
            <button className="btn btn-success">
                PAY SERVICES
            </button>
        </form>
    )
}

function PaymentCheckout() {
  return (
    <>
        <Elements stripe={stripePromise}>
        <div className="container p-4">
        <div className="row h-100">
          <div className="col-md-12 offset-md-4 h-100">
            <CheckoutForm />
          </div>
        </div>
      </div>
        </Elements>
    </>
  )
}

export default PaymentCheckout