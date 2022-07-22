const {Client} = require("pg")

const client = new Client({
    user: 'postgres',
    host: '',
    database: 'bocacode',
    password: 'bocacode',
    port: 5432,
  })
  client.connect()
  // we are now connected

// example function
 const query = (a,b) => { return a+b}

  client.query('SELECT * FROM CUSTOMERS', (err,response) => {

    if (err) {
        // oops there's an error!
        console.error(err)
    } else {
        //we got a good reply
        console.table(response.rows)
    }
    client.end()
  })