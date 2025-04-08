import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setbBlogs] = useState([])
    useEffect(() => {
      fetch("blogs.json")
        .then(res=>res.json())
      .then(data => setbBlogs(data))
    }, [])
    console.log(blogs);
    
    return (
        <div>
            
        </div>
    );
};

export default Blogs;