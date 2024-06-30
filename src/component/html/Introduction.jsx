import React from 'react'

function Introduction() {
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold mb-2">HTML Introduction</h1>
                <div className="bg-sky-100 p-4 rounded">
                    <p>HTML is the standard markup language for creating Web pages.</p>
                    {/* Add specific content for HTML Introduction */}
                </div>
                <h2 className='text-3xl font-bold mt-5'>What Is The HTML ?</h2>
                <ul className='list-disc mt-5 pl-5'>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML is the standard markup language for creating Web pages</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                    <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                </ul>

                <h2 className='text-3xl mt-6'>A Simple HTML Document</h2>
                <div>
                <pre className="bg-sky-100 p-4 rounded">
                    <code>
                        {`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
                    </code>
                </pre>
                </div>
            </div>
        </>
    )
}

export default Introduction
