import styles from "./post.module.css";

export async function getStaticProps() {
  const res = await fetch("https://api.vercel.app/blog");
  console.log(res);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

const Post = ({ data }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles.fontBold}>Post</h1>
      <h2 className="text-pink-500">Day la tieu de phu</h2>
      {/* // TODO: Hien thi noi dung tieu de  */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title} - {post.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
