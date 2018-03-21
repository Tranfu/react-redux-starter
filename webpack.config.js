function buildConfig(env) {
  let e = env
  if (!env) e = 'development'
  return require(`./webpack.${e}.js`)(env)
}

module.exports = buildConfig
