const cors = require('cors');
const createError = require('http-errors');

const WHITE_LIST = new Set();
WHITE_LIST.add('http://localhost:3301');
WHITE_LIST.add('http://localhost:3000');
WHITE_LIST.add('https://develop.d2wv4bufcfkh3f.amplifyapp.com');
WHITE_LIST.add('connection_controller_header');
WHITE_LIST.add('http://hsedevelopment.us-east-2.elasticbeanstalk.com');


const CORS_OPTION = {
  origin:  (origin, next) => {
    console.log(origin);
    console.log(WHITE_LIST.has(origin));
    if (WHITE_LIST.has(origin)) {
      next(null, true);
    } else {
      next(createError(401, 'Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Accept', 'Content-Type', 'authorization', 'Content-Disposition', 'Access-Control-Allow-Origin'],
};

module.exports = () => cors(CORS_OPTION);
 