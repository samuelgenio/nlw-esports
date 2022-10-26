import { createContainer, InjectionMode, asClass, asValue } from 'awilix'

const container = createContainer({ injectionMode: InjectionMode.CLASSIC })

export default (baseDir: string) => {

	container.register({
		baseDir: asValue(baseDir)
	})

	container.loadModules([
		`${baseDir}/ports/http/**/*.ts`,
	], {
		formatName: 'camelCase',
	})
	
	container.loadModules([
		`${baseDir}/ports/controllers/*.ts`,
		`${baseDir}/application/lawsuit/**/*.ts`,
		`${baseDir}/domain/**/*.ts`,
	], {
		formatName: 'camelCase',
		resolverOptions: {
		register: asClass
		}
	})

	return container
}

