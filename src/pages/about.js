import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <>
      <h1>About</h1>
      <button type="button" onClick={() => router.push("/")}>
        Back to home
      </button>
    </>
  );
}
