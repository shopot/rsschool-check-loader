import { Route, Routes } from 'react-router-dom';

import { BaseLayout } from './layouts';
import { HomePage } from '@/pages/home';

export const AppRouter = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);
