import Button from '@/components/Button';
import Section from '@/components/Section';

import styles from './styles/blogpreview.module.css';
import { getImage } from '@/utils/helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useThreePosts } from '@/hooks/useThreePosts';
import Loader from '@/components/Loader';

function BlogPreview() {
  const { isLoading, posts } = useThreePosts();
  // console.log(posts);
  if (isLoading) return <Loader />;
  if (!posts || posts.length === 0) return;

  const postPreview = posts.map((post) => {
    return {
      title: post.title.rendered,
      slug: post.slug,
      imgSrc: getImage(post.content.rendered),
    };
  });

  return (
    <Section>
      <main className={styles.main}>
        <Heading />
        <div className={styles.previewContainer}>
          {postPreview.map((post) => (
            <PostPreview post={post} key={post.title} />
          ))}
        </div>
      </main>
    </Section>
  );
}

function Heading() {
  const router = useRouter();
  return (
    <div className={styles.heading}>
      <h3>Treasury Reports</h3>
      <Button
        variant="link-light"
        onClick={() => router.push(`investor-relations/reports`)}
      >
        View all reports
      </Button>
    </div>
  );
}

function PostPreview({ post }) {
  const router = useRouter();
  return (
    <div className={styles.preview}>
      <div className={styles.imgAndTitle}>
        <div className={styles.imgAndTitleContainer}>
          <div className={styles.previewImg}>
            <Image
              width={1270}
              height={680}
              alt={post.title}
              src={post.imgSrc}
            />
          </div>
          <h4 className={styles.previewHeading}>{post.title}</h4>
        </div>
      </div>
      <Button
        variant="tertiary-reverse"
        onClick={() => router.push(`/investor-relations/reports/${post.slug}`)}
      >
        Read
      </Button>
    </div>
  );
}

export default BlogPreview;
