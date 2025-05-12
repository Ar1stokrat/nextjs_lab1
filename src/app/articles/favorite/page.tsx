import FavoriteArticleLoader from '../../components/FavoriteArticleLoader';

export default function FavoriteArticlesPage() {
  const ids = [1, 2, 3];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Улюблені статті</h1>
      {ids.map(id => (
        <FavoriteArticleLoader key={id} id={id} />
      ))}
    </div>
  );
}
