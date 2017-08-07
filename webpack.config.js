function buildConfig(env) {
  let e = env
  if (!env) e = 'dev'
  return require(`./webpack.${e}.config.js`)(env)
}

module.exports = buildConfig;
