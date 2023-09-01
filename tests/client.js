import Nullstack from 'nullstack';
import Application from './src/Application';

import vueable from 'nullstack-vueable';

Nullstack.use(vueable);

const context = Nullstack.start(Application);

Application.start(context)

export default context