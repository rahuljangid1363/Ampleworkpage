import React from 'react'
import './PortfolioBanner.css'
import { BsGooglePlay, BsShieldPlus } from "react-icons/bs";
// const PortfolioBanner = () => {
//     return (<>
//         <div className="container-fluid py-4" style={{backgroundColor:'rgb(245 245 245)'}}>
//             <h3 className='text-center fw-bold' style={{ wordSpacing: '0.4rem' }}>Portfolio of Our Accomplishments</h3>
//         </div>

//         <div className='PortfolioBanner container-fluid py-5'>
//             <div className="row pt-5">
//                 <div className="col-md-5 offset-md-1">
//                     <h2 className='text-center fw-bold text-light'>Sweatcoin</h2>
//                     <p className='text-light fw-semibold pt-3' style={{ letterSpacing: '0.07rem' }}>A new breed of step counter and activity tracker that converts your steps into a
//                         currency you can spend on gadgets, sports and fitness kit, services and experiences. You can exchange
//                         them with friends and family.</p>
//                     <p className='text-light fw-semibold'>Available on <span className='fs-3 text-light'><BsGooglePlay /> <BsShieldPlus /></span></p>
//                     <div className="row text-light">
//                         <div className="col-4 border-3  text-center border-end" style={{ height: '3.5rem' }}><h4>50M+</h4><p>Downloads</p></div>
//                         <div className="col-4 border-3 text-center border-end" style={{ height: '3.5rem' }}><h4>4.6/5</h4><p>Rating</p></div>
//                         <div className="col-4 border-3 text-center border-end" style={{ height: '3.5rem' }}><h4>$20M</h4><p>Fund Raised</p></div>
//                     </div>
//                     <div className="row text-light mt-5 justify-content-around">
//                         <div className="col text-center border-2 border-end">Rewards</div>
//                         <div className="col text-center border-2 border-end">Wallet</div>
//                         <div className="col text-center border-2 border-end">Tracker</div>
//                         <div className="col text-center border-2 border-end">eCommerce</div>
//                         <div className="col text-center border-2 border-end">Fintech</div>
//                     </div>
//                 </div>
//                 <div className="col-md-6 d-none d-md-block">
//                     <div className='PortfolioImage'>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     )
// }

// export default PortfolioBanner

import Carousel from 'react-bootstrap/Carousel';

function PortfolioBanner() {
  return (
    <Carousel variant='primary' controls={false} >
      <Carousel.Item>
      <div className="container-fluid py-4" style={{backgroundColor:'rgb(245 245 245)'}}>
             <h3 className='text-center fw-bold' style={{ wordSpacing: '0.4rem' }}>Portfolio of Our Accomplishments</h3>
         </div>

         <div className='PortfolioBanner container-fluid py-5'>
             <div className="row pt-5">
                 <div className="col-md-5 offset-md-1">
                     <h2 className='text-center fw-bold text-light'>Sweatcoin</h2>
                     <p className='text-light fw-semibold pt-3' style={{ letterSpacing: '0.07rem' }}>A new breed of step counter and activity tracker that converts your steps into a
                         currency you can spend on gadgets, sports and fitness kit, services and experiences. You can exchange
                         them with friends and family.</p>
                     <p className='text-light fw-semibold'>Available on <span className='fs-3 text-light'><BsGooglePlay /> <BsShieldPlus /></span></p>
                     <div className="row text-light">
                         <div className="col-4 border-3  text-center border-end" style={{ height: '3.5rem' }}><h4>50M+</h4><p>Downloads</p></div>
                         <div className="col-4 border-3 text-center border-end" style={{ height: '3.5rem' }}><h4>4.6/5</h4><p>Rating</p></div>
                         <div className="col-4 border-3 text-center border-end" style={{ height: '3.5rem' }}><h4>$20M</h4><p>Fund Raised</p></div>
                     </div>
                     <div className="row text-light mt-5 justify-content-around">
                         <div className="col text-center border-2 border-end">Rewards</div>
                         <div className="col text-center border-2 border-end">Wallet</div>
                         <div className="col text-center border-2 border-end">Tracker</div>
                         <div className="col text-center border-2 border-end">eCommerce</div>
                         <div className="col text-center border-2 border-end">Fintech</div>
                     </div>
                 </div>
                 <div className="col-md-6 d-none d-md-block">
                     <div className='PortfolioImage'>

                     </div>
                 </div>
             </div>
         </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="container-fluid py-4" style={{backgroundColor:'rgb(245 245 245)'}}>
             <h3 className='text-center fw-bold' style={{ wordSpacing: '0.4rem' }}>Portfolio of Our Accomplishments</h3>
         </div>

         <div className='PortfolioBanner container-fluid py-5'>
             <div className="row pt-5">
                 <div className="col-md-5 offset-md-1">
                     <h2 className='text-center fw-bold text-light'>Sweatcoin</h2>
                     <p className='text-light fw-semibold pt-3' style={{ letterSpacing: '0.07rem' }}>A new breed of step counter and activity tracker that converts your steps into a
                         currency you can spend on gadgets, sports and fitness kit, services and experiences. You can exchange
                         them with friends and family.</p>
                     <p className='text-light fw-semibold'>Available on <span className='fs-3 text-light'><BsGooglePlay /> <BsShieldPlus /></span></p>
                     <div className="row text-light">
                         <div className="col-4 border-3  text-center border-end" style={{ height: '3.5rem' }}><h4>50M+</h4><p>Downloads</p></div>
                         <div className="col-4 border-3 text-center border-end" style={{ height: '3.5rem' }}><h4>4.6/5</h4><p>Rating</p></div>
                         <div className="col-4 border-3 text-center border-end" style={{ height: '3.5rem' }}><h4>$20M</h4><p>Fund Raised</p></div>
                     </div>
                     <div className="row text-light mt-5 justify-content-around">
                         <div className="col text-center border-2 border-end">Rewards</div>
                         <div className="col text-center border-2 border-end">Wallet</div>
                         <div className="col text-center border-2 border-end">Tracker</div>
                         <div className="col text-center border-2 border-end">eCommerce</div>
                         <div className="col text-center border-2 border-end">Fintech</div>
                     </div>
                 </div>
                 <div className="col-md-6 d-none d-md-block">
                     <div className='PortfolioImage'>

                     </div>
                 </div>
             </div>
         </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default PortfolioBanner; 