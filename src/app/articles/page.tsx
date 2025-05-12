import PageWrapper from '../components/PageWrapper';

export default async function ArticlesPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <PageWrapper title="Список статей">
      {posts.map((post: any) => (
        <div key={post.id} className="mb-2 p-2 border border-gray-300 rounded">
          {post.title}
        </div>
      ))}
    </PageWrapper>
  );
}
