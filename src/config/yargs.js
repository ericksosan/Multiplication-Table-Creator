const argv = require('yargs')
  .option(
    'base',
    {
      alias: 'b',
      type: 'number',
      demandOption: true
    }
  )
  .option(
    'limit',
    {
      alias: 'l',
      type: 'number',
      demandOption: true,
      describe: 'Limits the list of numbers to be multiplied.'
    }
  )
  .option(
    'show',
    {
      alias: 's',
      type: 'boolean',
      default: false,
      demandOption: false,
      describe: 'Displays the multiplication table and saves it to the file system.'
    }
  )
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'The base has to be a number...'.bgRed.white
    }

    if (isNaN(argv.limit)) {
      throw 'The limit has to be a number'.bgRed.white
    }

    return true
  })
  .argv

module.exports = argv