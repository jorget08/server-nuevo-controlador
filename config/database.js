module.exports = {
  testing: {
    username: 'postgres',
    password: '123456',
    database: 'newcontroller',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{
        "ssl": false,
        "useUTC": false,
    }
  },
  development: {
    username: 'dbtest_plataforma',
    password: '0qAQ@LcxF*Au',
    database: 'horus_test',
    host: 'db-test-hse.ccti8vozmyl6.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{
        "ssl": false,
        "useUTC": false,
    }
  },
  production: {
    username: 'hse_plataforma',
    password: '%hB64u!@60r&',
    database: 'horus_dev',
    host: 'dbhse.ccti8vozmyl6.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    logging: true,
    port: 5432,
    dialectOptions:{
        "ssl": false,
        "useUTC": false,
    },
  },
  staging: {
    username: 'dbstaging_plataforma',
    password: 'Q@QbE5%Ekx@!',
    database: 'horus_staging',
    host: 'db-hse-staging.ccti8vozmyl6.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    port: 5432,
    dialectOptions:{
        "ssl": false,
        "useUTC": false,
    },

  },
  superuser: {
    username: 'hse_steven',
    password: 'pz@QrRV8A$',
    database: 'horus_dev',
    host: 'dbhse.ccti8vozmyl6.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{
        "ssl": false,
        "useUTC": false,
    },

  },

  testing2: {
    username: 'postgres',
    password: 'admin1234',
    database: 'horus_dev',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{
        "ssl": false,
        "useUTC": false,
    },

  }
}
