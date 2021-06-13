import AllPosts from "../../components/posts/AllPosts";

import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props)  => {
    const { posts } = props;

    return (
        <AllPosts posts={posts}/>
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