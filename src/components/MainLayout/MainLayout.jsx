import React from 'react';
import "./MainLayout.scss";
import Highlighted from './Highlighted/Highlighted';
import News from './News/News';
import FeaturedArticles from './FeaturedArticles/FeaturedArticles';

function MainLayout() {
  return <div className="MainLayout">
    <article className='area_1'>
      <Highlighted/>
    </article>
    <article className='area_2'>
      <News/>
    </article>
    <article className='area_3'>
      <FeaturedArticles/>
    </article>
  </div>
}

export default MainLayout;