function buildConfig(env) {
  let e = env
  if (!env) e = 'dev'
  return require(`./webpack.${e}.js`)(env)
}

module.exports = buildConfig
