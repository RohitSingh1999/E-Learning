import React from 'react'

function CssHome() {
  return (
  <>
  <div>
    <h2 className='text-3xl font-extrabold'>CSS Tutorial</h2>
    <div className='bg-sky-100 p-5 mt-5 rounded-md'>
    <p><span className='font-bold underline font-serif'>Cascading Style Sheets (CSS)</span> is a Stylesheet Language used to describe the presentation of a document written in HTML or XML.</p>
    <p className='font-serif'>CSS is Among the core Languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.</p>
    </div>
    <div className='bg-sky-100 mt-5 p-5'>
    <h2 className='text-2xl font-bold pb-3'>CSS Example</h2>
    <div className='bg-white pl-20 border-4 border-sky-400 '>
        <pre>
        <code>
            {`
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>My First CSS Example</h1>
<p>This is a paragraph.</p>

</body>
</html>



            

            `}
        </code>
        </pre>
    </div>
    </div>
  </div>
  
  </>
  )
}

export default CssHome
