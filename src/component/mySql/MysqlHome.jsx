import React from 'react'
import images from '../../assets/mysql.png'

function MysqlHome() {
    const pStyle={
        marginTop: 7,
        fontSize: 17
    }
    let main ={
        fontFamily: 'Sans-serif'
    }
  return (
    <>
    <div style={main} >
        <h3 className='text-3xl font-extrabold'>MySQL Tutorial</h3>
        <div className='mt-7'>
        <p style={pStyle}>MySQL tutorial provides basic and advanced concepts of MySQL. Our MySQL tutorial is designed for beginners and professionals.</p>
        <p style={pStyle}>MySQL is a relational database management system based on the Structured Query Language, which is the popular language for accessing and managing the records in the database. MySQL is open-source and free software under the GNU license. It is supported by Oracle Company.</p>
        <p  style={pStyle}>Our MySQL tutorial includes all topics of MySQL database that provides for how to manage database and to manipulate data with the help of various SQL queries. These queries are: insert records, update records, delete records, select records, create tables, drop tables, etc. There are also given MySQL interview questions to help you better understand the MySQL database.</p>
        </div>

        <h3 className='text-2xl mt-7 font-bold'>What is Database?</h3>
        <p style={pStyle}>It is very important to understand the database before learning MySQL. A database is an application that stores the organized collection of records. It can be accessed and manage by the user very easily. It allows us to organize data into tables, rows, columns, and indexes to find the relevant information very quickly. Each database contains distinct API for performing database operations such as creating, managing, accessing, and searching the data it stores. Today, many databases available like MySQL, Sybase, Oracle, MongoDB, PostgreSQL, SQL Server, etc. In this section, we are going to focus on MySQL mainly.</p>

        <div className='mt-5'>
            <h3 className='text-2xl font-bold'>How MySQL Works?</h3>
            <p className='mt-5'>MySQL follows the working of Client-Server Architecture. This model is designed for the end-users called clients to access the resources from a central computer known as a server using network services. Here, the clients make requests through a graphical user interface (GUI), and the server will give the desired output as soon as the instructions are matched. The process of MySQL environment is the same as the client-server model.</p>
            <div className='mt-5'>
                <img src={images} alt="" className='mx-auto' />
            </div>
        </div>
    </div>
    </>
  )
}

export default MysqlHome
