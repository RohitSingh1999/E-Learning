import React from 'react'

function ReactHome() {
    const pStyle={
        marginTop: 5
    }
  return (
    <>
    <div>
        <h2 className='text-3xl font-extrabold'>
            React Js
        </h2>
        <div className='mt-5 bg-sky-100 p-5 rounded-md'>
            <p style={pStyle}>React is a JavaScript library for building user interfaces.</p>
            <p style={pStyle}>React is used to build single-page applications.</p>
            <p style={pStyle}>React allows us to create reusable UI components.</p>
        </div>
        <div className='mt-5 border-2 p-2 '>
            <h3 className='font-bold bg-sky-100 p-2 pl-4'>Example</h3>
            <pre>
                <code>
                    {`
    import React from 'react';
    import ReactDOM from 'react-dom/client';

    function Hello(props) {
    return <h1>Hello World!</h1>;
     }

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<Hello />);


                    
                    `}
                </code>
            </pre>
        </div>
    </div>
    </>
  )
}

export default ReactHome
