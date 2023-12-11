import { PAGE_SIZE } from '@/utils/config';

const url = process.env.NEXT_PUBLIC_APP_BLOG_API_URL;

export async function getPosts() {
  const allPosts = [];

  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const query = `${url}/posts?_page=${page}&_embed`;
    const response = await fetch(query);

    const posts = response.json();

    if (response.headers['x-wp-totalpages']) {
      totalPages = parseInt(response.headers['x-wp-totalpages'], 10);
    }

    allPosts.push(...posts);

    page++;
  }

  return { posts };
}

export async function getAllPosts({ page }) {
  let query = `${url}/posts?per_page=${PAGE_SIZE}&_embed&status=publish`;

  if (page) query = `${query}&page=${page}`;

  const res = await fetch(query);
  const posts = await res.json();

  const totalPosts = parseInt(res.headers.get('x-wp-total'), 10);

  return { posts, totalPosts };
}

export async function getThreePosts() {
  const query = `${url}/posts?per_page=3&_orderby=date&status=publish`;
  const res = await fetch(query);
  const posts = res.json();

  return posts;
}

export async function getSinglePost(slug) {
  const query = `${url}/posts?slug=${slug}`;
  const res = await fetch(query);
  const posts = res.json();
  return posts;
}

export async function getComments(postSlug) {
  try {
    const postQuery = await fetch(`${url}/posts?slug=${postSlug}`);

    if (!postQuery.ok) {
      throw new Error(`Failed to fetch post. Status: ${postQuery.status}`);
    }

    const [post] = await postQuery.json();

    if (!post) {
      throw new Error('Post not found');
    }

    const commentsResponse = await fetch(`${url}/comments?post=${post.id}`);

    if (!commentsResponse.ok) {
      throw new Error(
        `Failed to fetch comments. Status: ${commentsResponse.status}`
      );
    }

    const comments = await commentsResponse.json();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    throw error;
  }
}

export async function postComment(postId, commentData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/treasury/blog/comment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post: postId,
          ...commentData,
        }),
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to post comment. Status: ${response.status}`);
    }

    const newComment = await response.json();
    return newComment;
  } catch (error) {
    console.error('Error posting comment:', error.message);
    throw error;
  }
}
