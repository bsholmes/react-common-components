const DEV_FOLDER = 'dev';
const PROD_FOLDER = 'prod';

const ENV_TO_FOLDER_MAP = {
  development: DEV_FOLDER,
  production: PROD_FOLDER,
}

const folder = ENV_TO_FOLDER_MAP[process.env.NODE_ENV]

// export dev or prod based on NODE_ENV
module.exports = [
  require(`./${folder}/MediaRender.js`),
  require(`./${folder}/RenderToggle.js`),
  require(`./${folder}/Toggle.js`),
  require(`./${folder}/ProgressCircle.js`),
];