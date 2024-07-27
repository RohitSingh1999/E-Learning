import React from 'react'

function JavaHome() {
  const p = {
    fontSize: "17px",
    marginTop: '10px'
  }
  let divStyle = {
    
    padding: 10,
    borderRadius: 10
  }


  return (
    <>
      <div style={divStyle} className='bg-sky-100'>
        <h2 className='text-3xl font-extrabold'>What is Java?</h2>
        <p style={p}>Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.

        </p>
        <p style={p}>Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.</p>
        <p style={p}><span style={{ fontWeight: 600 }}>Platform:</span> Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.




        </p>
      </div>
      <div>
        <h2 className='text-2xl font-bold mt-5'>Java Example</h2>
        <p className='mt-5'>Let's have a quick look at Java programming example. A detailed description of Hello Java example is available in next page.</p>
        <h3>Simple.java</h3>
        <pre>
          <code className='text-red-600'>
            {`
        class Simple{  
    public static void main(String args[]){  
     System.out.println("Hello Java");  
         }  
       }  
        
        `}
          </code>
        </pre>
      </div>
    </>
  )
}

export default JavaHome
