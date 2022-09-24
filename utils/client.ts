import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'na3uhxa0',
  dataset: 'production',
  apiVersion: '2022-09-22',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
