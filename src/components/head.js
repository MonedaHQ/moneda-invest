import Head from 'next/head';

function MetaTags({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg"></link>
    </Head>
  );
}

export default MetaTags;
