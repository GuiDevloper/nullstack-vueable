import Nullstack from 'nullstack';
import Application from './src/Application';

import vueable from 'nullstack-vueable';

Nullstack.use(vueable);

Nullstack.start(Application);