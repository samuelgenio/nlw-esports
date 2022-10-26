import { asValue, AwilixContainer, asClass, InjectionMode, Lifetime } from 'awilix'
import connectSqlite from '../database/sqlite'

const resolveDatabase = {

  sqlite (container: AwilixContainer) {
    const conn = connectSqlite()

    container.register({
      db: asValue(conn),
    })

    container.loadModules([
      `${container.resolve('baseDir')}/infrastructure/repositories/*Sqlite.ts`,
      `${container.resolve('baseDir')}/infrastructure/webserver/*Elasticsearch.ts`,
      `${container.resolve('baseDir')}/infrastructure/webserver/*Elasticsearch.js`,
    ],
    { 
      formatName: 'camelCase',
      resolverOptions: {
        register: asClass,
        injectionMode: InjectionMode.CLASSIC,
        lifetime: Lifetime.SINGLETON
      }
    })
  },
}

export default resolveDatabase