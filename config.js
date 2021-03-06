const env = process.env;

export const nodeEnv =  env.NODE_ENV || 'development';

export const logStars = (message) =>  {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default  {
  port: env.PORT || 3030,
  host: env.HOST || '0.0.0.0',
  mongodbUri: `mongodb://localhost:27017/teste`,
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};