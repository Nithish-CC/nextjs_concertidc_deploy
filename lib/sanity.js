import sanityClient from '@sanity/client';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: 'vbcy82wb',
  dataset: 'production',
  token: 'skXsHEGfFIeowXHZNzgoR14IgJMxIpds5raRAc2v9rDf59VGkzaYSFhqIYGsLzKejfbukpRpaZScA9jghHPe6vhF5U4tyGzXes79K1eijPJ0aSmsWb2QxWOP2Z2ihjR7LAd4J7dy6Xz8Q5nHYvE4IFPZ3yn9jt4hTEHNIxkuNbetSWAQ3aiw', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;