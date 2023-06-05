import './index.scss';

import { withProviders } from '@/app/providers';
import { AppRouter } from './app-router.tsx';

export const App = withProviders((): JSX.Element => <AppRouter />);
