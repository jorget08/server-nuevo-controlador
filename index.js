require('dotenv').config();
const app = require('./server/express_server');
const port = process.env.PORT || 3301;

require('./api_socket/server')

app.listen(port, () => console.log(
  `🚀 Server ready at http://localhost:${port}`
));
