import { useRouter, Link } from "next/router";

function Dashboard() {
  const router = useRouter();

  const posts = [
    { id: 1, slug: "test", title: "test" },
    { id: 2, slug: "test-2", title: "Test 2" },
  ];

  return (
    <>
      <h1>Dashboard</h1>
      <button
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        type="button"
        onClick={() => router.push("/")}
      >
        Back to home
      </button>
      <table className="min-w-full">
        <thead className="bg-slate-50 border-b border-slate-200">
          <th className="px-6 py-3 text-left text-sm  text-slate-900">ID</th>
          <th className="px-6 py-3 text-left text-sm  text-slate-900">Slug</th>
          <th className="px-6 py-3 text-left text-sm  text-slate-900">Title</th>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="odd:bg-white even:bg-slate-50">
              <td>{post.id}</td>
              <td>{post.slug}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
