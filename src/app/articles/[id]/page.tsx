export default async function ArticlePage({ params }: { params: { id: string } }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json());
  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`).then(res => res.json());

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Коментарі</h2>
      {comments.map((c: any) => (
        <div key={c.id}>{c.body}</div>
      ))}
    </div>
  );
}
