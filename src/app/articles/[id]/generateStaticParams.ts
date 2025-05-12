export async function generateStaticParams() {
  const ids = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  return ids.map(id => ({ id }));
}
