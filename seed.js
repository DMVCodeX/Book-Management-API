const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: "Matilda",
        author: "Roald Dahl",
        publicationYear: 1988,
        image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        title: "The Secret",
        author: "Rhonda Byrne",
        publicationYear: 2006,
        image: "https://m.media-amazon.com/images/I/51S3+Ig0xGL._SX258_BO1,204,203,200_.jpg",
      },
      {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        publicationYear: 1937,
        image: "https://m.media-amazon.com/images/I/51p3WTQUhhL._SX328_BO1,204,203,200_.jpg",
      },
      {
        title:
          "A Common-Sense Guide to Data Structures and Algorithms, Second Edition: Level Up Your Core Programming Skills",
        author: "Jay Wengrow",
        publicationYear: 2020,
        image: "https://m.media-amazon.com/images/I/81yvVmN1BLL.jpg",
      },
      {
        title: "In the Time of the Butterflies",
        author: "Julia Avarez",
        publicationYear: 1994,
        image: "https://m.media-amazon.com/images/I/4151OPXYASL._SX331_BO1,204,203,200_.jpg",
      },
    ],
    skipDuplicates: true,
  });

  const allBooks = await prisma.book.findMany();
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
