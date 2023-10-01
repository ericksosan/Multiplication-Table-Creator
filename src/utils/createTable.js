const fs = require('fs')
const path = require('path')
require('colors')

const createTable = async (base = 5, limit = 10, show = false) => {

  const filename = `table-${base}.txt`
  const fullPath = path.join(__dirname, '..', 'tables', filename)

  let table = ''

  for (let num = 1; num <= limit; num++) {
    table += `  ${base} * ${num} x ${(base * num)}\n`
  }

  if (!show) return `A table with the name ${filename} has been generated.`.green

  const headerTable = `
  ==================================================
  ===================== Table ${base} ====================
  ==================================================`

  const data = `${headerTable}\n\n${table}`

  console.log(data)

  try {

    fs.writeFileSync(fullPath, data)

    return `File with name ${filename.blue} has been created.\n\n${'(ctrl + click) to open:'.green} ${fullPath.blue.bold}`

  } catch (error) {

    throw error

  }
}

module.exports = createTable