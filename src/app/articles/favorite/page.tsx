import FavoriteArticle from '../../components/FavoriteArticle';

export default async function FavoriteArticlesPage() {
  const ids = [1, 2, 3];

  const articles = await Promise.all(
    ids.map(id =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
    )
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Улюблені статті</h1>
      {articles.map(article => (
        <FavoriteArticle key={article.id} title={article.title} body={article.body} />
      ))}
    </div>
  );
}
