import './index.scss';
import { Routing } from '@/pages';
import { withProviders } from '@/app/providers';

export const App = withProviders((): JSX.Element => <Routing />);
