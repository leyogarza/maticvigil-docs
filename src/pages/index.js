import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Quick and Simple</>,
    imageUrl: 'img/undraw_task_list_6x9d.svg',
    description: (
      <>
        We allow you to build fullstack apps on Matic Mainnet, without learning protocol specifics. Our <a href='/docs'>docs</a> cater to every developer, all the way from beginners to those already building dapps via web3, and provide examples to build upon.
      </>
    ),
  },
  {
    title: <>Lightning Fast</>,
    imageUrl: 'img/undraw_data_processing_yrrv.svg',
    description: (
      <>
        Smart contracts are quickly deployed through our system and the resulting Open API spec along with webhook and websockets are instantly available to start testing.
      </>
    ),
  },
  {
    title: <>Seamless Integrations</>,
    imageUrl: 'img/undraw_push_notifications_im0o.svg',
    description: (
      <>
        Supercharge and extend your blockchain apps with our integration services over Websockets, Webhooks, Zapier, Slack, IFTTT. The possibilities are endless.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="API gateway for Matic.network">
      <div className={clsx('hero hero--primary', styles.hero)}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt="Docusaurus with Keytar"
                className={styles.heroLogo}
                src={useBaseUrl('img/undraw_programmer_imem.svg')}
              />
              Build and prototype{' '}
              <span className={styles.heroProjectKeywords}>scalable</span>{' '}
              blockchain apps{' '}
              <span className={styles.heroProjectKeywords}>rapidly</span>{' '}with{' '}
              <span className={styles.heroProjectKeywords}>MaticVigil</span>
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                href="https://mainnet.maticvigil.com">
                Sign Up
              </Link>

              <Link
                className={styles.indexCtasGitHubButton}
                to={useBaseUrl('docs/')}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
