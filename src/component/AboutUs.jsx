import React from 'react';

function AboutUs() {
  return (
    <>
      <div className='bg-sky-100 text-center  pb-[110px]'>
        <h2 className='text-3xl font-bold pt-10 underline underline-offset-4'>About Us</h2>
        <div className='max-w-3xl px-4 mx-auto'>
          <p className='mt-5'>
          Welcome to <span className='font-bold'>E-Learning</span> your go-to resource for mastering programming languages. Whether you're a beginner just starting out or an experienced coder looking to sharpen your skills, we’re here to help you on your journey.
          </p>
        </div>
        <h2 className='text-3xl font-bold mt-5 underline underline-offset-2'>Our Mission</h2>
        <div className='max-w-3xl px-5 mx-auto '>
          <p className='mt-5'>
          At <span className='font-bold'>E-Learning</span> we believe that coding is for everyone. Our mission is to make learning programming languages accessible, engaging, and effective. We offer a wide range of tutorials covering languages like Java, C, HTML, and many more, designed to take you from beginner to pro.

          </p>
        </div>
        <h2 className='text-3xl font-bold mt-5 underline underline-offset-4'>Our Story</h2>

        <div className='max-w-3xl mx-auto px-4'>
          <p className='mt-5'>
          <span className='font-bold'>E-Learning</span> was founded out of a passion for coding and a desire to share that knowledge with others. What started as a small project has grown into a comprehensive learning platform, serving thousands of learners worldwide.

          </p>
        </div>
        <h2 className='text-3xl font-bold mt-5 underline underline-offset-2'>Why Choose Us</h2>
        <div className='max-w-3xl mx-auto mt-5'>
          <p>Our platform stands out because we focus on hands-on learning with real-world projects and challenges. We offer interactive coding environments where you can test your skills right away, and our step-by-step guides ensure that you never feel lost.</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
