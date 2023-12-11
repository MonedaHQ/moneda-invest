import { useRouter } from 'next/router';
import { usePosts } from '@/hooks/usePosts';
import { scrollOffset } from '@/utils/config';
import useScrollPosition from '@/hooks/useScrollPostition';

import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import AllPosts from './AllPosts';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Button from '@/components/Button';
import Footer from '@/components/footerComponents/Footer';

import styles from './styles/allposts.module.css';
import { getAllPosts } from '@/services/apiPosts';

function AllBlogPosts() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const { posts, totalPosts, isLoading } = usePosts();

  if (isLoading) return <Loader fullScreen={true} />;

  return (
    <>
      <MetaTags
        title="Treasury Reports - Moneda Investment Limited"
        description="Stay up to date with Moneda's Treasury Reports"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <GoBack />
      {posts.length === 0 && <NoPosts />}
      {posts.length > 0 && <AllPosts content={{ posts, totalPosts }} />}
      <Footer />
    </>
  );
}

function GoBack() {
  const router = useRouter();
  return (
    <div className={styles.goBack}>
      <Button
        variant="tertiary-reverse"
        onClick={() => router.push('/investor-relations')}
      >
        Back
      </Button>
    </div>
  );
}

function NoPosts() {
  const router = useRouter();
  return (
    <main className={styles.mainEmpty}>
      <div className={styles.empty}>
        <p>There are currently no posts</p>
        <Button variant="tertiary-reverse" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </main>
  );
}

export default AllBlogPosts;
