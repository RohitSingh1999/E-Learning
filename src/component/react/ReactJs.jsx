import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function ReactJs() {
    const [selectedLink, setSelectedLink] = useState('React Home');

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <>
            <div className="flex h-screen">
                <aside className="w-64 bg-sky-100 p-4 overflow-y-auto">
                    <nav className="flex flex-col">
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Home' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Home')}
                        >
                            React Home
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Introduction')}
                        >
                            React Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Rander Html' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Rander Html')}
                        >
                            React Rander Html
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Jsx' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Jsx')}
                        >
                            React Jsx
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Component' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Component')}
                        >
                          React Component
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Class' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Class')}
                        >
                            React Class
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Props' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Props')}
                        >
                            React Props
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Event' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Event')}
                        >
                            React Event
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Conditionals' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Conditionals')}
                        >
                            React Conditionals
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Table' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Table')}
                        >
                            React List
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React ES6' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React ES6')}
                        >
                           React ES6
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Form' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Form')}
                        >
                            React Form
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Router' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Router')}
                        >
                           React Router
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Memo' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Memo')}
                        >
                            React Memo
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'React Css Style' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('React Css Style')}
                        >
                           React Css Style
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'React Home' && (
                            <>
                               <h1>home</h1>
                            </>
                        )}
                        {selectedLink === 'HTML Introduction' && (
                            <>
                                <h2>intro</h2>
                            </>
                        )}
                        {selectedLink === 'HTML Heading' && (
                            <>
                               <h2>bfjd</h2>
                            </>
                        )}
                        {selectedLink === 'HTML Comment' && (
                            <>
                                <h1>rohit</h1>
                            </>
                        )}
                        {/* Add more conditions for other selected links */}
                    </section>
                </main>
            </div>
        </>
    );
}

export default ReactJs;
