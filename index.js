const { PrismaClient } = require("@prisma/client");
const e = require("express");

const prisma = new PrismaClient();

async function main() {
  const allBooks = await prisma.books.findMany();
  console.log(allBooks);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
