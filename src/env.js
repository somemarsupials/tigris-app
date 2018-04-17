const development = {
  api: 'http://localhost:5000',
};

const test = {
};

const production = {
};

let env;

switch (process.env.NODE_ENV || 'development') {
case 'test':
  env = test;
  break;
case 'production':
  env = production;
  break;
case 'development':
default:
  env = development;
  break;
}

export default env;
