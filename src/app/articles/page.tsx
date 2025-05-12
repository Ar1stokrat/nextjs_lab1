export default async function ArticlesPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div>
    {posts.map((post: any) => (
      <div key={post.id}>{post.title}</div>
    ))}
  </div>
  );
}
