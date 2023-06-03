import compose from 'compose-function';

import { withRouter } from './with-router';
import { withTheme } from './with-theme.tsx';

export const withProviders = compose(withRouter, withTheme);
