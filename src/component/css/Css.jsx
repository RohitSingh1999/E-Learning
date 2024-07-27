import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CssHome from './CssHome';


function Css() {
    const [selectedLink, setSelectedLink] = useState('CSS HOME');

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
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS HOME' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS HOME')}
                        >
                            CSS HOME
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' CSS Introduction' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' CSS Introduction')}
                        >
                            CSS Introduction
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Selector' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Selector')}
                        >
                            CSS Selector
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Comments' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Comments')}
                        >
                            CSS Comments
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Color' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Color')}
                        >
                             CSS Color
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Background Color' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Background Color')}
                        >
                            CSS Background Color
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Border' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Border')}
                        >
                            CSS Border
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === ' CSS Margins' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick(' CSS Margins')}
                        >
                           CSS Margins
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Padding' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Padding')}
                        >
                            CSS Padding
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Hight/Width' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Hight/Width')}
                        >
                           CSS Hight/Width
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Css Link' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Css Linkt')}
                        >
                            Css Link
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Font' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Font')}
                        >
                            CSS Font
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS List' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS List')}
                        >
                            CSS List
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'CSS Table' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('CSS Table')}
                        >
                            CSS Table
                        </Link>
                        <Link 
                            to="#" 
                            className={`p-2 hover:bg-sky-200 rounded-md ${selectedLink === 'Css Z-Index' ? 'bg-sky-300 rounded-md' : ''}`} 
                            onClick={() => handleLinkClick('Css Z-Index')}
                        >
                            Css Z-Index
                        </Link>
                        {/* Add more sidebar links as needed */}
                    </nav>
                </aside>
                <main className="flex-1 p-4 overflow-y-auto">
                    <section className="mb-4">
                        {selectedLink === 'CSS HOME' && (
                            <>
                              <CssHome/>
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

export default Css;
