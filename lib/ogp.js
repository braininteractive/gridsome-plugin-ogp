export default function ({
  title,
  description,
  keywords,
  url,
  image,
  twitterSite,
  site,
  appId
} = {}) {
  const google = [
    {
      itemprop: 'name',
      content: title
    },
    {
      itemprop: 'description',
      content: description
    },
    {
      itemprop: 'image',
      content: image
    },
    {
      itemprop: 'keywords',
      content: keywords
    }
  ];

  const twitter = [
     {
       name: 'twitter:site',
       content: twitterSite
    }, 
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: image
    }
  ];

  const facebook = [
    appId ?
      {
        property: 'fb:app_id',
        content: appId ? appId : ''
      } :
      {},
    {
      property: 'og:url',
      content: url ? url : (process.env.GRIDSOME_BASE_PATH ? process.env.GRIDSOME_BASE_PATH + this.$route.path : '')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: image
    },
    {
      property: 'og:site_name',
      content: site
    }
  ];

  this.$once('hook:mounted', () => {
    this.$meta().refresh();
  });

  return {
    title,
    meta: [
      {
        key: 'description',
        name: 'description',
        content: description
      },
      ...google,
      ...twitter,
      ...facebook
    ]
  };
}

