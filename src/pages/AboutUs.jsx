import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const AboutUs = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>About Us</h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                <Link to='/'>Home</Link>
                                <span className='pt-1'>
                                    <IoIosArrowForward />
                                </span>
                                <span>About Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex-1 flex items-center justify-center bg-gray-50 py-12">
                <div className="w-full max-w-2xl bg-white p-8 rounded shadow">
                    <h2 className="text-2xl font-bold mb-4 text-center text-[#059473]">Welcome to Book Nation</h2>
                    <p className="mb-4 text-gray-700 text-lg text-center">
                        <strong>Book Nation</strong> is your trusted multi-vendor marketplace where anyone can buy or sell books—both new and used. Our platform connects book lovers, students, and sellers, making it easy to find the books you need or give your pre-loved books a new home.
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>Sell your used or new books easily and reach a wide audience.</li>
                        <li>Discover a variety of books from different sellers across the country.</li>
                        <li>Enjoy a safe, user-friendly, and supportive community for all book enthusiasts.</li>
                    </ul>
                    <p className="text-gray-700 text-center">
                        Join Book Nation today and be part of a growing community where books find new readers every day!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;