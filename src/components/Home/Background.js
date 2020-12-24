import React from 'react';
import Banner from './Banner';
import Header from './Header';
import HeaderServices from './HeaderServices';

const Background = () => {
    return (
        <div className="headerBackground">
          <Header></Header>
          <Banner></Banner>
          <HeaderServices></HeaderServices>
        </div>
    );
};

export default Background;