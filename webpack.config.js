function buildConfig(env) {
  let e = env;
  if (!env) e = 'dev';
  return require(`./config/${e}.js`)(env); // eslint-disable-line
}

module.exports = buildConfig;
