import classes from './PostsGrid.module.css';
import PostItem from "./PostItem";

const PostsGrid = (props) => {
    const { posts } = props;

    return(
        <ul className={classes.grid}>
            {
                posts.map(post => {
                    return(
                        <PostItem key={post.slug} post={post}/>
                    )
                })
            }
        </ul>
    )
}

export default PostsGrid;