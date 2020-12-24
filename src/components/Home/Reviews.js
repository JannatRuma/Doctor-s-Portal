import React from 'react';
import ReviewDetail from './ReviewDetail';
import review1 from '../../images/review1.png'
import review2 from '../../images/review2.png'
import review3 from '../../images/review3.png'

const Reviews = () => {
    const reviewData = [
        {
            id:1,
            name: 'Winson Herry',
            place: 'California',
            img: review1,
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dignissimos omnis reiciendis in ea, iure corrupti, dolorem mollitia perferendis cum voluptate iste iusto eius at numquam blanditiis cupiditate odit. '
        },
        {
            id:2,
            name: 'Winson Herry',
            place: 'California',
            img: review2,
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dignissimos omnis reiciendis in ea, iure corrupti, dolorem mollitia perferendis cum voluptate iste iusto eius at numquam blanditiis cupiditate odit. '
        },
        {
            id:3,
            name: 'Winson Herry',
            place: 'California',
            img: review3,
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dignissimos omnis reiciendis in ea, iure corrupti, dolorem mollitia perferendis cum voluptate iste iusto eius at numquam blanditiis cupiditate odit. '
        },
    ]
    return (
        <section className="reviews" id="reviews">
                <div className="container">
                    <div className="reviews__header">
                        <h5>Testimomial</h5>
                        <h3>What's Our Patients Says</h3>
                    </div>
                    <div className="reviews__content">
                        {
                            reviewData.map(item=><ReviewDetail review={item} key={item.id}></ReviewDetail>)
                        }
                    </div>
                </div>
            </section>
    );
};

export default Reviews;