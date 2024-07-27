import React from 'react'

function PythonHome() {
  return (
    <>
      <div>
        <h2 className='text-3xl font-extrabold'>Python Tutorial</h2>
        <div className='bg-sky-100 p-5 mt-5 rounded'>
          <p className=''>Python is a popular programming language.</p>
          <p>Python can be used on a server to create web applications.</p>
        </div>
        <div className='mt-5 border-2'>
          <h3 className=' mb-5 bg-sky-100 p-2'>Example</h3>
          <div className='p-4'>
            <code>
              {`
            print("Hello, World!")
            `}
            </code>
            <div className='mt-5'>
              <span className='text-lg font-bold'>Output:</span><span> Hello World!</span>
            </div>
          </div>
        </div>
        <h3 className='text-3xl font-bold mt-5'>What is Python?</h3>
        <p className='mt-5'>Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. Like Perl, Python source code is also available under the GNU General Public License (GPL).</p>
      </div>

    </>
  )
}

export default PythonHome
