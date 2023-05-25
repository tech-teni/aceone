import React from 'react'
import { BsApple } from "react-icons/bs";

const Invoices = () => {
  return (
    <div className="invoices">
    <div className="invoices-top">  </div>
    <div className="invoices-body"> 
    <ul>
     <li><h4>Company</h4>  <p><span className='company-icon'><BsApple/></span><span>Apple</span></p></li>
     <li><h4>Order Number</h4>  <p>1266201</p></li>
     <li><h4>Product</h4>  <p>Mac Book Air</p></li>
     <li><h4>VAT(20%)</h4>  <p>$100.00</p></li>
    </ul>
     </div>
     <div className="design">
       <div className="white-circle"></div>
       <div className="white-circle2"></div>
 
     </div>
    <div className="invoices-footer"> 
    <div className="sub-invoices-footer" >
    <h5>You have to pay </h5>
    <div className="total-price">
    <h5><b>549</b> <span className="kobo">.99</span><span>USD</span></h5>
     <img src='./images/file.jpg'/>
    </div>
    </div>
 
 
 
     </div>
 
 
       </div>
 
  )
}

export default Invoices
