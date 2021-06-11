import  classes from './FeaturedPosts.module.css';
import PostsGrid from "../posts/PostsGrid";

const FeaturedPosts = ()  => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid/>
        </section>
    )
}

export default FeaturedPosts;