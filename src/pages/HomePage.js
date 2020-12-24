import React from 'react';
import Appointment from '../components/Home/Appointment';
import Background from '../components/Home/Background';
import Blog from '../components/Home/Blog';
import Contact from '../components/Home/Contact';
import Doctors from '../components/Home/Doctors';
import Footer from '../components/Home/Footer';
import Reviews from '../components/Home/Reviews';
import Service from '../components/Home/Service';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const HomePage = () => {
    return (
        <section>
            <Background></Background>
            <Service></Service>
            <WhyChooseUs></WhyChooseUs>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default HomePage;