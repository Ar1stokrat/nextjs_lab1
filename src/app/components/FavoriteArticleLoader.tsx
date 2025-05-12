'use client';

import { useEffect, useState } from 'react';
import FavoriteArticle from './FavoriteArticle';

export default function FavoriteArticleLoader({ id }: { id: number }) {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setArticle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-4 border rounded shadow my-2 text-gray-500">Завантаження статті {id}...</div>;
  }

  return <FavoriteArticle title={article.title} body={article.body} />;
}
