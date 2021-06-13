import ReactMarkdown from "react-markdown";

import classes from './PostContent.module.css';
import PostHeader from "./PostHeader";

const PostContent = (props) => {
    const { slug, image, title, content } = props.post;

    const imagePath = `/images/posts/${slug}/${image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath}/>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;