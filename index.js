const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.book.create({
    data: {
      title: "Matilda",
      author: "Roald Dahl",
      publicationYear: 1988,
      image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
    },
  });

  const allBooks = await prisma.book.findMany({
    where: {
      title: "Matilda",
    },
  });
  console.dir(allBooks, { depth: null });
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
