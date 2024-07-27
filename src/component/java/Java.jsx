import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JavaHome from './JavaHome';
import JavaIntoduction from './JavaIntoduction';



function Java() {
    const [selectedLink, setSelectedLink] = useState('Java HOME');

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
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java HOME' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java HOME')}
                        >
                            Java HOME
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Introduction')}
                        >
                            Java Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Commments' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Commments')}
                        >
                           Java Commments
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Output' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Output')}
                        >
                            Java Output
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Variable' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Variable')}
                        >
                           Java Variable
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Data Types' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Data Types')}
                        >
                            Java Data Types
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Operators' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Operators')}
                        >
                            Java Operators
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java String' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java String')}
                        >
                            Java String
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Math' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Math')}
                        >
                            Java Math
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Booleans' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Booleans')}
                        >
                            Java Booleans
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java if...else' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java if...else')}
                        >
                           Java if...else
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Loops' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Loops')}
                        >
                            Java Loops
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Function' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Function')}
                        >
                            Java Function
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Arrays' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Arrays')}
                        >
                            Java Arrays
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Java Break/Continue' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Java Break/Continue')}
                        >
                           Java Break/Continue
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'Java HOME' && (
                            <>
                              <JavaHome/>
                            </>
                        )}
                        {selectedLink === 'Java Introduction' && (
                            <>
                                <JavaIntoduction/>
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

export default Java;
