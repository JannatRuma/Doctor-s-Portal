import React from 'react';

const ReviewDetail = ({review}) => {
    return (
        <div className="review__card">
            <p>{review.description}</p>
            <div className="review__card_detail">
                <div className="review__card_img">
                    <img src={review.img} alt=""/>
                </div>
                <div className="review__card_name">
                    <h5>{review.name}</h5>
                    <p>{review.place}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;