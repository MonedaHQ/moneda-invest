import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import Footer from '@/components/footerComponents/Footer';
import { getImage } from '@/utils/helpers';
import MetaTags from '@/components/head';
import { scrollOffset } from '@/utils/config';
import useScrollPosition from '@/hooks/useScrollPostition';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import AllComments from './AllComments';
import { usePost } from '@/hooks/usePost';
import { useAllComments } from '@/hooks/useAllComments';

function CommentsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const scrollPosition = useScrollPosition(scrollOffset);

  const { comments, isLoading: isLoadingComments } = useAllComments(slug);
  const { isLoading: isLoadingPosts, post: postArray } = usePost(slug);

  if (isLoadingPosts || isLoadingComments || postArray.length === 0)
    return <Loader fullScreen={true} />;

  const selectedPost = postArray.at(0);

  if (!selectedPost) return;

  const post = {
    id: selectedPost?.id,
    title: selectedPost?.title.rendered,
    excerpt: { __html: selectedPost?.excerpt.rendered },
    slug: selectedPost.slug,
  };

  return (
    <>
      <MetaTags
        title={`Comments: ${post.title} - Moneda Investment Limited`}
        description={`${post.excerpt.__html}`}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <AllComments post={post} comments={comments} />
      <Footer />
    </>
  );
}

export default CommentsPage;
