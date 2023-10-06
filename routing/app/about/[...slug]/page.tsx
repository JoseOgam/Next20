"use client";
import React from "react";

const BlogPost = ({ params }: any) => {
  console.log(params);
  return (
    <div className="flex justify-center items-center p-56">{params.slug} </div>
  );
};

export default BlogPost;
