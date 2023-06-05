import { HomePage } from './home';
import { Route, Routes } from 'react-router-dom';

export const Routing = ({ slotBaseLayout }: IProps) => {
  return (
    <Routes>
      <Route element={slotBaseLayout}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

interface IProps {
  slotBaseLayout: JSX.Element;
}
