import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const childrenData: { name: string; age: number }[] = [
    { name: 'Alice Andrade', age: 7 },
    { name: 'Arthur Almeida', age: 8 },
    { name: 'Bruna Barbosa', age: 6 },
    { name: 'Bruno Borges', age: 9 },
    { name: 'Carla Costa', age: 5 },
    { name: 'Caio Carvalho', age: 10 },
    { name: 'Daniela Dias', age: 6 },
    { name: 'Diego Duarte', age: 8 },
    { name: 'Eduarda Esteves', age: 7 },
    { name: 'Enzo Elias', age: 9 },
    { name: 'Fernanda Ferreira', age: 6 },
    { name: 'Felipe Farias', age: 7 },
    { name: 'Gabriela Gomes', age: 8 },
    { name: 'Gustavo Galvão', age: 10 },
    { name: 'Helena Henriques', age: 7 },
    { name: 'Henrique Horta', age: 9 },
    { name: 'Isabela Inácio', age: 6 },
    { name: 'Igor Italo', age: 8 },
    { name: 'Juliana Justino', age: 5 },
    { name: 'João Jordão', age: 7 },
  ];

  for (let i = 0; i < childrenData.length; i++) {
    const { name, age } = childrenData[i];

    const parent = await prisma.parent.create({
      data: {
        name: `Responsável de ${name}`,
        email: `parent${i + 1}@gmail.com`,
        password: 'senhaSegura123',
        child: {
          create: {
            name,
            age,
            birthDate: `201${Math.floor(Math.random() * 5) + 3}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
            medicalConditions: ['Nenhuma'],
          },
        },
      },
    });

    console.log(`Criado: ${parent.name}`);
  }
}

main()
  .then(() => {
    console.log('✅ Seed finalizado com sucesso!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    return prisma.$disconnect();
  });
