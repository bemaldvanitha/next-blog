import Head from "next/head";

import AllPosts from "../../components/posts/AllPosts";

import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props)  => {
    const { posts } = props;

    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts and other stuff!'
                />
            </Head>
            <AllPosts posts={posts}/>
        </>
    )
}

export async function getStaticProps(context) {
    const allPosts = getAllPosts();

    return{
        props: {
            posts: allPosts
        },
        revalidate: 3600
    }
}

export default AllPostsPage;