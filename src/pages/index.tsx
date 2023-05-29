// Либо использовать @loadable/component, в рамках туториала - некритично
import { TestPage } from '@/pages/test';
import { Route, Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />}>
        <Route path="test" element={<TestPage />} />
        <Route path="*" element={<TestPage />} />
      </Route>
    </Routes>
  );
};
