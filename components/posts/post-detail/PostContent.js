import classes from './PostContent.module.css';
import PostHeader from "./PostHeader";

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    date: '2020-02-10',
    content: '# This is a first post'
};

const PostContent = (props) => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath}/>
            { DUMMY_POST.content }
        </article>
    )
}

export default PostContent;