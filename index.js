const randomNumber = (minimo = 0, maximo = 100) => Math.ceil(Math.random() * maximo) + minimo

const randomDashUsers = quantidade => {
  let sql = ''
  for (let x = 0; x < quantidade; x++) {
    if (x > 0) {
      sql += ' UNION ALL '
    }
    sql += ` SELECT ${x} as ID, 'USER#${x}' as NOME, '123' as SENHA, 'DEPT ${x}' as DEPARTAMENTO, 'email${x}@email.com' as EMAIL `
  }
  return sql
}

const sqlProgresso = (min = 0, max = 100) => {
  const atual = randomNumber(min, max)
  const sql = `SELECT ${atual} as atual, ${max} as maximo`
  return sql
}

const sqlLabelBarValue = (quantidadePontos = 3, quantidadeLinhas = 1) => {
  let sql = ''
  for (let x = 0; x < quantidadeLinhas; x++) {
    for (let y = 0; y < quantidadePontos; y++) {
      if (y > 0 || x > 0) { sql += ' UNION ALL ' }
      sql += `SELECT 'Item #${x}' as label, 'Bar ${y}' as bar, ${randomNumber(50, 100)} as value`
    }
  }
  return sql
}

const sqlLabelValue = (quantidade = 6) => {
  let sql = ''
  for (let y = 0; y < quantidade; y++) {
    if (y > 0) { sql += ' UNION ALL ' }
    sql += `SELECT 'Item #${y}' as label, ${randomNumber(0, 100)} as value`
  }
  return sql
}