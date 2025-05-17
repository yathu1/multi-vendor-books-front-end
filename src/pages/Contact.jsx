import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send to backend)
        setSubmitted(true);
    };

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
             <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
                        <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                                <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>Contact Page </h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                    <Link to='/'>Home</Link>
                                    <span className='pt-1'>
                                    <IoIosArrowForward />
                                    </span>
                                    <span>Contact </span>
                                  </div>
                                </div> 
                            </div> 
                        </div> 
                       </section>
            <div className="flex-1 flex items-center justify-center bg-gray-50 py-12">
                <div className="w-full max-w-md bg-white p-8 rounded shadow">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                    {submitted ? (
                        <div className="text-green-600 text-center">Thank you for contacting Book Nation! We will get back to you soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border px-3 py-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border px-3 py-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full border px-3 py-2 rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;