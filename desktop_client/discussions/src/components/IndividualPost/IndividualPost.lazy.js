import React, { lazy, Suspense } from 'react';

const LazyIndividualPost = lazy(() => import('./IndividualPost'));

const IndividualPost = props => (
  <Suspense fallback={null}>
    <LazyIndividualPost {...props} />
  </Suspense>
);

export default IndividualPost;
