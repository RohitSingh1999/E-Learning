import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PythonHome from './PythonHome';


function Python() {
    const [selectedLink, setSelectedLink] = useState('Python Home');

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
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Home' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Home')}
                        >
                            Python Home
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Pyhton Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Introduction')}
                        >
                            Python Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Comments' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Comments')}
                        >
                            Python Comments
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Variables' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Variables')}
                        >
                           Python Variables
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Data Types' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Data Types')}
                        >
                            Python Data Types
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Numbers' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Numbers')}
                        >
                            Python Numbers
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Casting' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Casting')}
                        >
                            Python Casting
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Strings' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Strings')}
                        >
                            Python Strings
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Booleans' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Booleans')}
                        >
                            Python Booleans
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Operators' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Operators')}
                        >
                           Python Operators
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Lists' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Lists')}
                        >
                            Python Lists
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Tuples' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Tuples')}
                        >
                            Python Tuples
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python If ... Else' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python If ... Else')}
                        >
                            Python If ... Else
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Functions' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Functions')}
                        >
                           Python Functions
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Python Arrays' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Python Arrays')}
                        >
                            Python Arrays
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'Python Home' && (
                            <>
                              <PythonHome/>
                            </>
                        )}
                        {selectedLink === 'Python Introduction' && (
                            <>
                               
                            </>
                        )}
                        {selectedLink === 'Python Comments' && (
                            <>
                               
                            </>
                        )}
                        {selectedLink === 'HTML Comment' && (
                            <>
                               
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
