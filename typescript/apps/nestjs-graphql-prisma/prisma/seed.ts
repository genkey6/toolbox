import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ClassisData: Prisma.ClassisCreateInput[] = [
  {
    name: '哺乳綱',
    orders: {
      create: [
        {
          name: 'クジラ目',
          families: {
            create: [
              {
                name: 'マイルカ科',
                animals: {
                  create: [
                    {
                      name: 'カマイルカ',
                    },
                  ],
                },
              },
              {
                name: 'イッカク科',
                animals: {
                  create: [
                    {
                      name: 'シロイルカ',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: '鳥綱',
    orders: {
      create: [
        {
          name: 'ペンギン目',
          families: {
            create: [
              {
                name: 'ペンギン科',
                animals: {
                  create: [
                    {
                      name: 'コウテイペンギン',
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          name: 'スズメ目',
          families: {
            create: [
              {
                name: 'カエデチョウ科',
                animals: {
                  create: [
                    {
                      name: 'ブンチョウ',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log('Start seeding ...');
  for (const data of ClassisData) {
    const classis = await prisma.classis.create({
      data: data,
    });
    console.log(`Created classis with id: ${classis.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
