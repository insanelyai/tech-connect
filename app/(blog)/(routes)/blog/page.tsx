"use client";

import React, { useEffect, useState } from "react";
import AddArticles from "../../_components/AddArticles";
import Featured from "../../_components/Featured";
import Special from "../../_components/Special";
import Member from "../../_components/Member";
import BlogCards from "../../_components/BlogCards";
import axios from "axios";

const page = () => {
  const [posts, setPost] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/blog/fetch");
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className=''>
      <Featured />
      <Special />
      <Member />
      <AddArticles />

      <div className='w-[100%] py-10 px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1'>
        {posts.map((post) => {
          return (
            <BlogCards
              title={post.title}
              content={post.content}
              image={post.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
