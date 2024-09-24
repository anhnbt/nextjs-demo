const { useRouter } = require("next/router");

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <p>Post: {slug}</p>
      <button type="button" onClick={() => router.push("/")}>
        Back to home
      </button>
    </>
  );
};

export default Page;
