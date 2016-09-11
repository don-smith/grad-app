// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'dev',
      user: 'dev',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test',
      user: 'dev',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: process.env.DATABASE_URL
}
