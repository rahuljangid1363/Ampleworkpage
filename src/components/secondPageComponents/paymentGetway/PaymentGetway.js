import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import paymentGetwayBg from './asset/paymentGetway.png'
import { Button, Image } from 'react-bootstrap';
const PaymentGetway = () => {
  return (
    <div className='container-fluid py-5' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(255 255 255)' }}>
    <div className="container">
        <div className="row">

            <h3 className='text-center'>Payment Gateway Integrations </h3>
            <p className='text-center px-3 pt-2 pb-3 '>If your websites involve the activities of financial transactions then utilize the payment gateway to facilitate secure online payments. It enables customers to complete transactions using credit/debit cards, bank transfers or digital wallets. We effectively configure the payment gateway, testing the functionality, and ensuring that it meets industry standards. We believe that secure payment gateway integration is essential for the success of any online business that accepts payments.</p>
        </div>
        <div className="row">
            <div className="col-md-6  text-center">
                <Image src={paymentGetwayBg} width='80%' className='rounded' />  
            </div>
            <div className="col-md-6">
                <h5 className='text-dark py-3'>Seamless Secure Transactions</h5>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Secure and reliable payment for customers.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Integration with multiple payment methods and gateways.</span> </p>
                <p><BsCheckCircle className='text-primary' /><span className='px-2'>Simplified checkout process for customers.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Reduced risk of fraud and chargebacks.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Compliance with industry standards.</span> </p>
                <Button className='bg-primary rounded-0 '>Let's Talk</Button>
            </div>
        </div>
    </div>
</div>
  )
}

export default PaymentGetway
