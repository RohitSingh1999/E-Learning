import React from 'react'

function JsHome() {
  return (
    <>
    <div>
        <div className='bg-sky-100 py-10 pl-3 text-3xl font-bold'>Learn JavaScript
             </div>
             <p className='w-[800px] mt-5'>JavaScript is the most powerful and versatile web programming language. It is used for making the websites interactive. JavaScript helps us add features like animations, interactive forms and dynamic content to web pages.</p>

             <h2 className='text-2xl font-bold mt-5'>What is JavaScript?</h2>
             <p className='mt-5'>JavaScript is a programming language used for creating dynamic content on websites. It is a lightweight, cross-platform and single-threaded programming language. JavaScript is an interpreted language that executes code line by line providing more flexibility. It is a commonly used programming language to create dynamic and interactive elements in web applications. It is easy to learn.</p>

             <h2 className='mt-5 font-bold text-2xl'>Print Hello World In JavaScript</h2>
             <div className='bg-sky-100 p-5 mt-5'>
             <code className=' text-red-600'>{`
             console.log("Hello World")
             
             `}</code></div>
    </div>
    
    </>
  )
}

export default JsHome
