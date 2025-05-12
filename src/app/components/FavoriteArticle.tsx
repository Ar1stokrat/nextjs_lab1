export default function FavoriteArticle({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 border rounded shadow my-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );
}
