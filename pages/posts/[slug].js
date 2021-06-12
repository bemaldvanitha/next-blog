import { useRouter } from 'next/router';

import PostContent from "../../components/posts/post-detail/PostContent";

const PostDetailPage = ()  => {
    const router = useRouter();
    const slug = router.query.slug;

    return (
        <PostContent/>
    )
}

export default PostDetailPage;