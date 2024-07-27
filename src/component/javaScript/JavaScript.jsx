import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JsHome from './JsHome';



function JavaScript() {
    const [selectedLink, setSelectedLink] = useState('JavaScript HOME');

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
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript HOME' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript HOME')}
                        >
                            JavaScript HOME
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Introduction')}
                        >
                            JavaScript Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Output' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Output')}
                        >
                            JavaScript Output
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Statement' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Statement')}
                        >
                            JavaScript Statement
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Comment' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Comment')}
                        >
                           JavaScript Comment
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' JavaScript Variable' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' JavaScript Variable')}
                        >
                            JavaScript Variable
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' JavaScript let' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' JavaScript let')}
                        >
                            JavaScript let
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' JavaScript const' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' JavaScript const')}
                        >
                             JavaScript const
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === '  JavaScript Operator' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('  JavaScript Operator')}
                        >
                            JavaScript Operator
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Arithmetic' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Arithmetic')}
                        >
                              JavaScript Arithmetic
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Assignment' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Assignment')}
                        >
                            JavaScript Assignment
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' JavaScript Data Type' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' JavaScript Data Type')}
                        >
                           JavaScript Data Type
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' JavaScript Function' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' JavaScript Function')}
                        >
                             JavaScript Function
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'JavaScript Object' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('JavaScript Object')}
                        >
                            JavaScript Object
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' JavaScript Event' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' JavaScript Event')}
                        >
                          JavaScript Event
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'JavaScript HOME' && (
                            <>
                               <JsHome/>
                            </>
                        )}
                        {selectedLink === 'HTML Introduction' && (
                            <>
                                
                            </>
                        )}
                        {selectedLink === 'HTML Heading' && (
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

export default JavaScript;
