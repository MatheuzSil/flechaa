import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const condicoesGraves: string[] = [
  'Diabetes Tipo 1',
  'Asma Grave',
  'Epilepsia',
  'Alergia Severa a Amendoim',
  'Doença Celíaca',
  'Autismo',
  'Síndrome de Down',
  'Problema Cardíaco Congênito',
];

const condicoesLeves: string[] = [
  'Miopia',
  'Alergia a Pólen',
  'Dermatite Atópica',
  'Rinite Alérgica',
  'Intolerância à Lactose',
  'Bronquite Leve',
  'Anemia Leve',
  'Enxaqueca Infantil',
];

const gerarCondicoesMedicas = (): string[] => {
  const chance = Math.random();
  if (chance < 0.3) {
    const condicoes: string[] = [];
    const temCondicaoGrave = Math.random() < 0.5;

    if (temCondicaoGrave) {
      condicoes.push(condicoesGraves[Math.floor(Math.random() * condicoesGraves.length)]);
    } else {
      condicoes.push(condicoesLeves[Math.floor(Math.random() * condicoesLeves.length)]);
    }

    if (Math.random() < 0.5) {
      condicoes.push(condicoesLeves[Math.floor(Math.random() * condicoesLeves.length)]);
    }

    return condicoes;
  }

  return ['Nenhuma'];
};

const isPCD = (): boolean => {
  const chance = Math.random();
  return chance < 0.2; // 20% de chance de ser PCD
}

const turmasIgreja = [
  'Jardim 1',
  'Jardim 2',
  'Pré Primário',
  'Primários',
  'Juniores',
  'Adolescentes',
];

async function main() {
  const dadosCriancas = [
    { nome: 'Alice Andrade', idade: 7 },
    { nome: 'Arthur Almeida', idade: 8 },
    { nome: 'Bruna Barbosa', idade: 6 },
    { nome: 'Bruno Borges', idade: 9 },
    { nome: 'Carla Costa', idade: 5 },
    { nome: 'Caio Carvalho', idade: 10 },
    { nome: 'Daniela Dias', idade: 6 },
    { nome: 'Diego Duarte', idade: 8 },
    { nome: 'Eduarda Esteves', idade: 7 },
    { nome: 'Enzo Elias', idade: 9 },
    { nome: 'Fernanda Ferreira', idade: 6 },
    { nome: 'Felipe Farias', idade: 7 },
    { nome: 'Gabriela Gomes', idade: 8 },
    { nome: 'Gustavo Galvão', idade: 10 },
    { nome: 'Helena Henriques', idade: 7 },
    { nome: 'Henrique Horta', idade: 9 },
    { nome: 'Isabela Inácio', idade: 6 },
    { nome: 'Igor Italo', idade: 8 },
    { nome: 'Juliana Justino', idade: 5 },
    { nome: 'João Jordão', idade: 7 },
  ];

  const nomePais = [
    'Ana Andrade',
    'Carlos Almeida',
    'Bruno Barbosa',
    'Fernanda Borges',
    'Patrícia Costa',
    'Ricardo Carvalho',
    'Juliana Dias',
    'Diego Duarte',
    'Eduarda Esteves',
    'Felipe Elias',
    'Gabriela Ferreira',
    'Gustavo Farias',
    'Helena Gomes',
    'Henrique Galvão',
    'Isabela Henriques',
    'Igor Horta',
    'Juliana Inácio',
    'João Italo',
    'Mariana Justino',
    'Lucas Jordão',
  ]

  for (let i = 0; i < dadosCriancas.length; i++) {
    const { nome, idade } = dadosCriancas[i];

    const pai = await prisma.parent.create({
      data: {
        name: `${nomePais[i]}`,
        email: `${nomePais[i].toLowerCase().split(" ").join("")}${i + 1}@gmail.com`,
        password: `senha${nomePais[i].split(" ").join("")}Segura123`,
        phone: `5591999999${(100 + i).toString().slice(-3)}`,
        emergencyContact: `5591988888${(200 + i).toString().slice(-3)}`,
        child: {
          create: {
            name: nome,
            age: idade,
            birthDate: `1${Math.floor(Math.random() * 9)}/0${Math.floor(Math.random() * 9) + 1}/201${Math.floor(Math.random() * 5) + 3}`,
            medicalConditions: gerarCondicoesMedicas(),
            class: turmasIgreja[i % turmasIgreja.length],
            pcd: isPCD(),
          },
        },
      },
    });

    console.log(`Responsável criado: ${pai.name}`);
  }
}

main()
  .then(() => {
    console.log('✅ Seed finalizado com sucesso!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erro ao executar o seed:', e);
    return prisma.$disconnect();
  });
