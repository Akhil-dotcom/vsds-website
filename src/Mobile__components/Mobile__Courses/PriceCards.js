import React from 'react'
import './PriceCards.scss'
import { Button } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Divider from '@material-ui/core/Divider';

const pricingData = [
    {
        id: 1,
        price: '₹ 7,670',
        pt1: '10hrs of practical course',
        pt2: '7hrs of theoretical course',
        pt3: '2 1/2hrs Simulator Training',
        pt4: '2 1/2hrs Demo Classes',
        course: 'Learner Course'
    },
    {
        id: 2,
        price: '₹ 10,030',
        pt1: '15hrs of practical course',
        pt2: '7hrs of theoretical course',
        pt3: '2 1/2hrs Simulator Training',
        pt4: '2 1/2hrs Demo Classes',
        course: 'Learner Extended Course'
    },
    {
        id: 3,
        price: '₹ 11,800',
        pt1: '20hrs of practical course',
        pt2: '7hrs of theoretical course',
        pt3: '2 1/2hrs Simulator Training',
        pt4: '2 1/2hrs Demo Classes',
        course: 'Learner Detailed Course'
    },
    {
        id: 4,
        price: '₹ 5,900',
        pt1: '6hrs of practical course',
        pt2: '2hrs of theoretical course',
        pt3: '1hr Simulator Training',
        pt4: 'No Demo class',
        course: 'Advance Course'
    },
]
function PriceCards(props) {

    const toggle = () => {
        props.closeCard();
        props.controller(true);
    }
    return (
        pricingData.map((value) => {
            if (value.id === props.id)
                return (
                    <div className="pricing__main" key={value.id}>
                        <div className="pricing__content">
                            <div className="pricing__content__price">{value.price}</div>
                            <div className='pricing__content__gst'>Including GST</div>
                            <div className="pricing__content__course">{value.course}</div>
                            <Divider />
                            <div className="pricing__content__body">
                                <div className='content__tick'><CheckCircleIcon className='icon' />{value.pt1}</div>
                                <div className='content__tick'><CheckCircleIcon className='icon' />{value.pt2}</div>
                                <div className='content__tick'><CheckCircleIcon className='icon' />{value.pt3}</div>
                                <div className='content__tick'><CheckCircleIcon className='icon' />{value.pt4}</div>
                            </div>
                            <div className="pricing__content__button"><Button onClick={() => toggle()} className="btn">Sign Up</Button></div>
                        </div>
                    </div>
                )
        })
    )
}

export default PriceCards
