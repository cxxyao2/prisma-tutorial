import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
const prisma = new PrismaClient({ log: ['query'] }) // when debugging

async function main() {
	await prisma.user.deleteMany()
	const users = prisma.user.createMany({
		data: [
			{
				name: 'Alice',
				email: 'alice@gmail.com',
				age: 23
			},
			{
				name: 'Bob',
				email: 'bob@gmail.com',
				age: 25
			},
			{
				name: 'Bob22',
				email: 'bob2@gmail.com',
				age: 25
			}
		]
	})
	// const user = await prisma.user.create({
	// 	data: {
	// 		email: 'Kyle@gmail.com',
	// 		name: 'Kyle',
	// 		age: 23,
	// 		userPreferences: {
	// 			create: {
	// 				emailUpdates: true,
	// 				theme: 'dark'
	// 			}
	// 		}
	// 	},
	// 	include: {
	// 		userPreferences: true
	// 	}
	// })
	console.log(users)
}

main()
	.catch((e) => console.error(e))
	.finally(async () => await prisma.$disconnect())
