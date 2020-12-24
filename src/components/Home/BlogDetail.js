import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogDetail = ({blog}) => {
    return (
        <div className="blogDetail">
            <div className="blogDetail__header">
                <div className="blogDetail__header-img">
                    <img src={blog.img} alt=""/>
                </div>
                <div className="blogDetail__header-date">
                    <h5>{blog.name}</h5>
                    <p>{blog.date}</p>
                </div>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>

            <div className="blog_detail_overlay">
                <h5>{blog.name}</h5>
                <p>{blog.date}</p>
                <h3>{blog.title}</h3>
                 <FontAwesomeIcon icon={faArrowRight} className="blogdetail__icon"/>
            </div>
        </div>
    );
};

export default BlogDetail;