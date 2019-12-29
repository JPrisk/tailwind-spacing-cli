export default async function version() {
  const packagejson = require('../package.json');
  console.log(packagejson.version);
}
