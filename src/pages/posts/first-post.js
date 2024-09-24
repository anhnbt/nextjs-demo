import { useEffect, useState } from "react";

const { default: Link } = require("next/link");

export async function getStaticProps() {
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      <ul role="list" className="p-6 divide-y divide-slate-200">
        {posts.length > 0 &&
          posts.map((post) => (
            <li className="py-4" key={post.id}>
              {/* <Link
                className="text-sm font-medium text-slate-900"
                href={`/blog/${encodeURIComponent(post.slug)}`}
              > */}
              {post.title}
              {/* </Link> */}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
