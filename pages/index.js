import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props)  => {
    const { posts } = props;

    return (
        <>
          <Hero/>
          <FeaturedPosts posts={ posts }/>
        </>
    )
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 3600
    };
}

export default HomePage;