import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{marginTop:'100px'}}>
            <h6 className='mt-3 text-danger fw-bold'>1. Difference between javascript and nodejs</h6>
            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
            <h6 className='mt-3 text-danger fw-bold'>2. Differences between sql and no sql databases.</h6>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h6 className='mt-3 text-danger fw-bold'>3. When should you use nodejs and when should you use mongodb</h6>
            <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS</p>
        </div>
    );
};

export default Blogs;