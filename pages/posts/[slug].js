import Head from "next/head";

import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = (props)  => {
    const { post } = props;

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt} />
            </Head>
            <PostContent post={post}/>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 1800
    }
}

export async function getStaticPaths(){
    const postsFiles = getPostsFiles();
    const slugs = postsFiles.map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default PostDetailPage;