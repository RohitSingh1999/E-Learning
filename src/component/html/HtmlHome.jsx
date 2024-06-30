import React from 'react'

function HtmlHome() {
  return (
    <>
    <div>
        <h2 className='text-3xl font-bold'>
        HTML Tutorial
        </h2>
        <div className='bg-sky-100 mt-5 p-5'>
            <p>HTML is the standard markup language for Web pages.</p>
            <p>With HTML you can create your own Website.</p>
            <p>HTML is easy to learn - You will enjoy it!</p>
        </div>

        <h2 className='text-2xl mt-5' >Easy Learning with HTML "Try it Yourself"</h2>
        <p className='mt-5'>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
        <div className='mt-5 bg-sky-100 px-5 pb-5 pt-4'>
            <h2 className='text-2xl pb-2'>Example</h2>
            <div className='bg-white'>
                <pre>
               <code>
                {
                    `
 <!DOCTYPE html>
    <html>
        <head>
         <title>Page Title</title>
      </head>
           <body>
                   <h1>This is a Heading</h1>
                    <p>This is a paragraph.</p>

            </body>
    </html>
                    `
                }
               </code>
               </pre>
            </div>
        </div>

    </div>
    </>
  )
}

export default HtmlHome
