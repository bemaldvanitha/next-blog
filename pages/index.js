import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Nextjs',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJs is react framework',
        date: '2020-02-10'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with Nextjs',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJs is react framework',
        date: '2020-02-10'
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with Nextjs',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJs is react framework',
        date: '2020-02-10'
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting Started with Nextjs',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJs is react framework',
        date: '2020-02-10'
    }
];

const HomePage = ()  => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  )
}

export default HomePage;