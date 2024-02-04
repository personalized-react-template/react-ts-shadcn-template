import { Helmet, HelmetProvider } from "react-helmet-async";

type MetaTagsProps = {
  title: string;
  description: string;
  keywords: string;
  author?: string;
  twitterCard?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  fbType?: string;
  fbUrl?: string;
  fbImage?: string;
};

//meta data of your website
const MetaTags = ({
  title,
  description,
  keywords,
  author,
  twitterCard,
  twitterImage,
  twitterSite,
  twitterCreator,
  fbType,
  fbUrl,
  fbImage,
}: MetaTagsProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
        <meta name="author" content={author} />

        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={twitterSite} />
        <meta name="twitter:creator" content={twitterCreator} />
        <meta name="twitter:description" content={description} />

        <meta property="og:type" content={fbType} />
        <meta property="og:url" content={fbUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta prefix="og:image" content={fbImage} />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaTags;
