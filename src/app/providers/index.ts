import { withRouter } from './with-router';
import compose from 'compose-function';

export const withProviders = compose(withRouter);
