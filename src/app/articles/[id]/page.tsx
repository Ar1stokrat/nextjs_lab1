interface Params {
  params: { id: string };
}

export default async function ArticlePage({ params }: Params) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json());
  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then(res => res.json());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-6">{post.body}</p>

      <h2 className="text-xl font-semibold mb-2">Коментарі</h2>
      <ul className="space-y-4">
        {comments.map((comment: any) => (
          <li key={comment.id} className="border p-3 rounded">
            <p className="font-semibold">{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
