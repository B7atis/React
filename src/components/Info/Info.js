import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {InfoData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.heroTitle} imageText={InfoData.heroImage} />
    <h2>{InfoData.title}</h2>
    <p>{InfoData.subpageContent}</p>
  </Container>
);

export default Info;