import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FaqData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FaqData.heroTitle} imageText={FaqData.heroImage} />
    <h2>{FaqData.title}</h2>
    <p>{FaqData.subpageContent}</p>
    <p>{FaqData.subpageContent}</p>
  </Container>
);

export default FAQ;