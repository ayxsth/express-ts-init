import config from './config';

import app from './app';

app.listen(config.app.port, () => {
  console.log(`The server is on port ${config.app.port}.`);
});
