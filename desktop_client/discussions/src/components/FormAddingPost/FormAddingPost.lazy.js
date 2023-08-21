import React, { lazy, Suspense } from 'react';

const LazyFormAddingPost = lazy(() => import('./FormAddingPost'));

const FormAddingPost = props => (
  <Suspense fallback={null}>
    <LazyFormAddingPost {...props} />
  </Suspense>
);

export default FormAddingPost;
