import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const parents = await Promise.all(
    Array.from({ length: 20 }).map((_, i) => {
      return prisma.parent.create({
        data: {
          name: `Parent ${i + 1}`,
          email: `parent${i + 1}@example.com`,
          password: `password${i + 1}`,
        },
      })
    })
  )

  const childrenNames = [
    // A
    ['Amanda Silva', 'Arthur Pereira'],
    // B
    ['Bruna Costa', 'Bruno Almeida'],
    // C
    ['Carlos Souza', 'Camila Rocha'],
    // D
    ['Daniela Teixeira', 'Diego Gomes'],
    // E
    ['Eduarda Ramos', 'Enzo Oliveira'],
    // F
    ['Fernanda Melo', 'Felipe Lima'],
    // G
    ['Gabriela Duarte', 'Guilherme Barbosa'],
    // H
    ['Helena Freitas', 'Henrique Castro'],
    // I
    ['Isabela Nunes', 'Igor Martins'],
    // J
    ['João Lucas', 'Julia Fernandes'],
  ].flat()

  const childData = childrenNames.map((name, i) => ({
    name,
    age: Math.floor(Math.random() * 10) + 5,
    birthDate: `201${Math.floor(Math.random() * 5)}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
    medicalConditions: ['Asma', 'Alergia'],
    parentId: parents[i].id,
  }))

  await Promise.all(
    childData.map(child => prisma.child.create({ data: child }))
  )

  console.log('✅ Seeded 20 parents and 20 children.')
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
