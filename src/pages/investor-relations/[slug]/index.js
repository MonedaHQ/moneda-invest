import { useRouter } from 'next/router';
import MetaTags from '@/components/head';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import { scrollOffset } from '@/utils/config';
import useScrollPosition from '@/hooks/useScrollPostition';
import { getImage } from '@/utils/helpers';
import Reading from './Reading';
import Footer from '@/components/footerComponents/Footer';
import Loader from '@/components/Loader';
import Post from './Post';
import { usePost } from '@/hooks/usePost';

function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const scrollPosition = useScrollPosition(scrollOffset);

  const { isLoading, post: postArray } = usePost(slug);

  if (isLoading || postArray.length === 0) return <Loader fullScreen={true} />;

  const selectedPost = postArray.at(0);

  if (!selectedPost) return;

  const post = {
    id: selectedPost?.id,
    title: selectedPost?.title.rendered,
    body: { __html: selectedPost?.content.rendered },
    date: selectedPost?.date,
    modified: selectedPost?.modified,
    excerpt: { __html: selectedPost?.excerpt.rendered },
    imgSrc: getImage(selectedPost?.content.rendered),
    slug: selectedPost.slug,
  };

  console.log(post);

  return (
    <>
      <MetaTags
        title={`${post.title} - Moneda Investment Limited`}
        description={`${post.excerpt.__html}`}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <Reading title={post.title} scrollPosition={scrollPosition} />
      <Post post={post} />
      <Footer />
    </>
  );
}

export default BlogPost;
