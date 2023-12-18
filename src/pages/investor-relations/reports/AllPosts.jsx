import Section from '@/components/Section';
import styles from './styles/allposts.module.css';
import Pagination from '@/components/Pagination';
import { getImage, truncateString } from '@/utils/helpers';
import Image from 'next/image';
import { useAllComments } from '@/hooks/useAllComments';
import Loader from '@/components/Loader';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { PiChatCircleDotsFill } from 'react-icons/pi';

function AllPosts({ content }) {
  if (!content) return;
  const { posts: unformattedPosts, totalPosts } = content;
  const posts = unformattedPosts.map((post) => {
    return {
      title: post.title.rendered,
      slug: post.slug,
      excerpt: { __html: post.excerpt.rendered },
      date: post.date,
      imgSrc: getImage(post.content.rendered),
    };
  });
  return (
    <Section>
      <main className={styles.main}>
        <h1 className={styles.heading}>Treasury Reports</h1>
        <div className={styles.allPosts}>
          <div className={styles.posts}>
            {posts.map((post, index) => (
              <Posts post={post} key={post.slug} />
            ))}
          </div>
          <Pagination count={totalPosts} />
        </div>
      </main>
    </Section>
  );
}

function Posts({ post }) {
  const router = useRouter();

  const { isLoading, comments } = useAllComments(post.slug);

  if (isLoading) return <Loader />;

  const numComments = comments.length;
  const title = truncateString(post.title, 4);

  return (
    <div className={styles.post}>
      <div className={styles.postImg}>
        <Image
          width={475}
          height={270}
          alt={post.title}
          src={post.imgSrc}
          draggable={false}
        />
      </div>
      <div className={styles.content}>
        <h6>{title}</h6>
        <div className={styles.numComments}>
          <PiChatCircleDotsFill />{' '}
          <p>
            {numComments} Comment{numComments === 1 ? '' : 's'}
          </p>
        </div>

        <Button
          variant="tertiary-reverse"
          onClick={() => router.push(`/investor-relations/${post.slug}`)}
        >
          Read
        </Button>
      </div>
    </div>
  );
}
export default AllPosts;
