import React, { useState } from 'react';

function Html() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <div className="flex">
        <aside className="w-64 bg-gray-100 h-screen p-4">
          <nav className="flex flex-col">
            <a href="#" className="p-2 hover:bg-gray-200" onClick={() => handleLinkClick('HTML HOME')}>HTML HOME</a>
            <a href="#" className="p-2 hover:bg-gray-200" onClick={() => handleLinkClick('HTML Introduction')}>HTML Introduction</a>
            <a href="#" className="p-2 hover:bg-gray-200" onClick={() => handleLinkClick('HTML Heading')}>HTML Heading</a>
            <a href="#" className="p-2 hover:bg-gray-200" onClick={() => handleLinkClick('HTML Paragraph')}>HTML Paragraph</a>
            {/* Add more sidebar links as needed */}
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <section className="mb-4">
            {selectedLink === 'HTML Introduction' && (
              <>
                <h1 className="text-3xl font-bold mb-2">HTML Introduction</h1>
                <div className="bg-blue-100 p-4 rounded">
                  <p>Introduction to HTML content goes here...</p>
                  {/* Add specific content for HTML Introduction */}
                </div>
              </>
            )}
            {selectedLink !== 'HTML Introduction' && (
              <>
                <h1 className="text-3xl font-bold mb-2">HTML Tutorial</h1>
                <div className="bg-green-100 p-4 rounded">
                  <p>HTML is the standard markup language for Web pages.</p>
                  <p>With HTML you can create your own Website.</p>
                  <p>HTML is easy to learn - You will enjoy it!</p>
                  <button className="bg-green-500 text-white py-2 px-4 rounded mt-2">Study our free HTML Tutorial</button>
                </div>
              </>
            )}
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Easy Learning with HTML "Try it Yourself"</h2>
            <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
            {/* Add more content as needed */}
          </section>
        </main>
      </div>
    </>
  );
}

export default Html;
