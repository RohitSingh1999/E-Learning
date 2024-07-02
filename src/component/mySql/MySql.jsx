import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function MySql() {
    const [selectedLink, setSelectedLink] = useState('MySQL Home');

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
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL Home' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL Home')}
                        >
                           MySQL Home
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL Introduction')}
                        >
                            MySQL Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL SQL' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL SQL')}
                        >
                            MySQL SQL
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL SELECT' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL SELECT')}
                        >
                            MySQL SELECT
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL WHERE' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL WHERE')}
                        >
                            MySQL WHERE
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL AND, OR and NOT' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL AND, OR and NOT')}
                        >
                            MySQL AND, OR and NOT
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL ORDER BY' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL ORDER BY')}
                        >
                           MySQL ORDER BY
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL INSERT INTO' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL INSERT INTO')}
                        >
                            MySQL INSERT INTO
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'HTML Page Title' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL NULL Values')}
                        >
                            MySQL NULL Values
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL UPDATE' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL UPDATE')}
                        >
                            MySQL UPDATE
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL DELETE' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL DELETE')}
                        >
                            MySQL DELETE
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL LIMIT' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL LIMIT')}
                        >
                           MySQL LIMIT
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL MIN and MAX' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL MIN and MAX')}
                        >
                            MySQL MIN and MAX
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL COUNT, AVG and SUM' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL COUNT, AVG and SUM')}
                        >
                            MySQL COUNT, AVG and SUM
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'MySQL LIKE' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('MySQL LIKE')}
                        >
                            MySQL LIKE
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'MySQL Home' && (
                            <>
                               <h1>home</h1>
                            </>
                        )}
                        {selectedLink === 'MySQL Introduction' && (
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

export default MySql;
