import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Python() {
    const [selectedLink, setSelectedLink] = useState('HTML HOME');

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
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML HOME' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML HOME')}
                        >
                            HTML HOME
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Introduction')}
                        >
                            HTML Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Heading' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Heading')}
                        >
                            HTML Heading
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Comment' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Comment')}
                        >
                            HTML Comment
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Style' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Style')}
                        >
                            HTML Style
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Color' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Color')}
                        >
                            HTML Color
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Links' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Links')}
                        >
                            HTML Links
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Image' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Image')}
                        >
                            HTML Image
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Page Title' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Page Title')}
                        >
                            HTML Page Title
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Table' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Table')}
                        >
                            HTML Table
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML List' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML List')}
                        >
                            HTML List
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Div' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Div')}
                        >
                            HTML Div
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Classes' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Classes')}
                        >
                            HTML Classes
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Id' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Id')}
                        >
                            HTML Id
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Iframe' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('HTML Iframe')}
                        >
                            HTML Iframe
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'HTML HOME' && (
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

export default Python;
