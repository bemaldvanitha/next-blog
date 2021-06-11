import  classes from './FeaturedPosts.module.css';
import PostsGrid from "../posts/PostsGrid";

const FeaturedPosts = (props)  => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid/>
        </section>
    )
}

export default FeaturedPosts;