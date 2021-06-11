import classes from './PostsGrid.module.css';
import PostItem from "./PostItem";

const PostsGrid = (props) => {
    const { posts } = props;

    return(
        <ul className={classes.grid}>
            {
                posts.map(post => {
                    return(
                        <PostItem key={post.id}/>
                    )
                })
            }
        </ul>
    )
}

export default PostsGrid;