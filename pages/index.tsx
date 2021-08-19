import { NextPage } from 'next';
import { seoConfig } from '../utils';
import SEO from '../components/SEO';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
      <main></main>
    </>
  );
};

export default HomePage;
