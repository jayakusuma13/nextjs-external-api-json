
export async function getSortedPostsData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const allPostsData = await res.json()
  return {
    props: {
      allPostsData,
    },
    revalidate: 30,
  };
}