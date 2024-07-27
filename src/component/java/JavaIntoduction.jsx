import React from 'react';

function JavaIntroduction() {
    const pStyle = {
        marginTop: 10,
        fontSize: 16
    };

    const ulStyle = {
        listStyleType: 'disc',
        marginLeft: 15,

    };

    return (
        <div>
            <h2 className='text-3xl font-extrabold'>What is Java?</h2>
            <p style={pStyle}>Java is a popular programming language, created in 1995.</p>
            <p style={pStyle}>It is owned by Oracle, and more than 3 billion devices run Java.</p>
            <p style={pStyle}>It is used for</p>
            <div className='bg-sky-100 p-5 rounded-md mt-5'>
            <ul style={ulStyle}>
                <li>Mobile applications (specially Android apps)</li>
                <li>Desktop applications</li>
                <li>Web applications</li>
                <li>Web servers and application servers</li>
                <li>Games</li>
                <li>Database connection</li>
                <li>Smart Card</li>
                <li>Robotics</li>
                <li>Embedded System</li>
            </ul>
            </div>
            <h3 className='font-bold mt-5 text-2xl'>Types of Java Applications</h3>
            <p style={pStyle}>There are mainly 4 types of applications that can be created using Java programming:</p>
            <p style={pStyle} className='font-bold'>1) Standalone Application</p>
            <p style={pStyle}>Standalone applications are also known as desktop applications or window-based applications. These are traditional software that we need to install on every machine. Examples of standalone application are Media player, antivirus, etc. AWT and Swing are used in Java for creating standalone applications.</p>
            <p style={pStyle} className='font-bold'>2) Web Application</p>
            <p style={pStyle}>An application that runs on the server side and creates a dynamic page is called a web application. Currently, Servlet, JSP, Struts, Spring, Hibernate, JSF, etc. technologies are used for creating web applications in Java.</p>
            <p style={pStyle} className='font-bold'>3) Enterprise Application</p>
            <p style={pStyle}>An application that is distributed in nature, such as banking applications, etc. is called an enterprise application. It has advantages like high-level security, load balancing, and clustering. In Java, EJB is used for creating enterprise applications.</p>
            <p style={pStyle} className='font-bold'>4) Mobile Application</p>
            <p style={pStyle}>An application which is created for mobile devices is called a mobile application. Currently, Android and Java ME are used for creating mobile applications.</p>
        </div>
    );
}

export default JavaIntroduction;
