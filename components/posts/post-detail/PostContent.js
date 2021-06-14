import Image from "next/image";
import ReactMarkdown from "react-markdown";

import classes from './PostContent.module.css';
import PostHeader from "./PostHeader";

const PostContent = (props) => {
    const { slug, image, title, content } = props.post;

    const imagePath = `/images/posts/${slug}/${image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                console.log(`/images/posts/${slug}/${image.properties.src}`);

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

    };

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath}/>
            <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;