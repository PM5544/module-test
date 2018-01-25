const serve = require('serve');
const { resolve } = require('path');

serve(resolve(__dirname, 'public'), {
  port: 1337
});
