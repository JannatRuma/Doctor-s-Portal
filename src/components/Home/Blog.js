import React from 'react';
import BlogDetail from './BlogDetail';
import review1 from '../../images/review1.png'
import review2 from '../../images/review2.png'
import review3 from '../../images/review3.png'

const Blog = () => {
    const blogData = [
        {
            id:1,
            name: 'Dr. Caudi',
            date: '23 april 2020',
            img: review1,
            title: '2 times of brush in a day can keep you healdy',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dignissimos omnis reiciendis in ea, iure corrupti. '
        },
        {
            id:2,
            name: 'Dr. John Mitchel',
           date: '23 april 2020',
            img: review2,
            title: '2 times of brush in a day can keep you healdy',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dignissimos omnis reiciendis in ea, iure corrupti. '
        },
        {
            id:3,
            name: 'Dr. Suhan Chandy',
            date: '23 april 2020',
            img: review3,
            title: '2 times of brush in a day can keep you healdy',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dignissimos omnis reiciendis in ea, iure corrupti. '
        }
    ]
    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="blog__header">
                        <h5>Our Blog</h5>
                        <h3>From Our Blog News</h3>
                    </div>
                    <div className="blog__content">
                        {
                            blogData.map(item=><BlogDetail blog={item} key={item.id}></BlogDetail>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default Blog;