import React, {Component} from 'react';

import PageWrapper from '../common/PageWrapper';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AboutContent from './AboutContent';

const AboutPage = () => {
  return (
    <PageWrapper customClass="about">
      <Header />
      <AboutContent />
      <Footer />
    </PageWrapper>
  );
};

export default AboutPage;
