import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1>First posts</h1>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
}
