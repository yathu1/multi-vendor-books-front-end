import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>Blog</h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                <Link to='/'>Home</Link>
                                <span className='pt-1'>
                                    <IoIosArrowForward />
                                </span>
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex-1 flex items-center justify-center bg-gray-50 py-12">
                <div className="w-full max-w-2xl bg-white p-8 rounded shadow">
                    <h2 className="text-2xl font-bold mb-4 text-center text-[#059473]">Book Nation Blog</h2>
                    <p className="mb-4 text-gray-700 text-lg text-center">
                        Welcome to the Book Nation Blog! Here you’ll find the latest news, tips, and stories about buying, selling, and loving books. Stay tuned for updates from our community of readers and sellers.
                    </p>
                    <div className="text-gray-700">
                        {/* Example blog post preview */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg mb-1">How to Sell Your Used Books Successfully</h3>
                            <p className="text-sm mb-1">Discover tips and tricks to make your used books stand out and find new owners quickly on Book Nation.</p>
                            <Link to="#" className="text-[#059473] text-sm">Read more...</Link>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg mb-1">Why Buy Pre-Loved Books?</h3>
                            <p className="text-sm mb-1">Explore the benefits of buying used books and how it helps both your wallet and the environment.</p>
                            <Link to="#" className="text-[#059473] text-sm">Read more...</Link>
                        </div>
                        {/* Add more blog previews as needed */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;