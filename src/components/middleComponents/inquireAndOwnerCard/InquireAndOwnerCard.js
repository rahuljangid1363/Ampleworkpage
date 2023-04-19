import React from 'react'
import InquireForm from './inquireForm/InquireForm'
import OwnerDetailsCard from './ownerDetailsCard/OwnerDetailsCard'

const InquireAndOwnerCard = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <InquireForm />
                    </div>
                    <div className="col-md-6">
                        <OwnerDetailsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InquireAndOwnerCard
