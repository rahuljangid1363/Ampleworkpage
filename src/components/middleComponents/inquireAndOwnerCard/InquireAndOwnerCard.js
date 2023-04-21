import React from 'react'
import InquireForm from './inquireForm/InquireForm'
import OwnerDetailsCard from './ownerDetailsCard/OwnerDetailsCard'

const InquireAndOwnerCard = () => {
    return (
        <div className='container-fluid pt-5' style={{backgroundColor:'rgb( 243 246 255)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <InquireForm />
                    </div>
                    <div className="col-lg-5 offset-lg-1 px-5" style={{backgroundColor:'rgb( 6 19 100)'}}>
                        <OwnerDetailsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InquireAndOwnerCard
