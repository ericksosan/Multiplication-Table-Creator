const createTable = require('./src/utils/createTable')
const { base, limit, show } = require('./src/config/yargs')

createTable(base, limit, show)
  .then(res => console.log(res))
  .catch(err => { throw new Error(err) })
