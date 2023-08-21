import React, { lazy, Suspense } from 'react';

const LazyQuizPopup = lazy(() => import('./QuizPopup'));

const QuizPopup = props => (
  <Suspense fallback={null}>
    <LazyQuizPopup {...props} />
  </Suspense>
);

export default QuizPopup;
