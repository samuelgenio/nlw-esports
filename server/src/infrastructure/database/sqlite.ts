import { PrismaClient } from '@prisma/client'

const connectSqlite = () => {
  const db = new PrismaClient({
    log: ['query']
  })

  return db
}

export default connectSqlite
