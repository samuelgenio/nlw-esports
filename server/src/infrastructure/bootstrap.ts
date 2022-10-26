import container from './bootstrap/container'
import resolveDatabase from './bootstrap/database'

export default (baseDir: string) => {
	
	const { DB_DRIVER } = process.env

	const injector = container(baseDir)

	// register any database
	switch (DB_DRIVER) {
		default:
			resolveDatabase.sqlite(injector)
	}

	return injector
}
