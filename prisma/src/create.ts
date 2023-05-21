import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        title: "Matilda",
        author: "Roald Dahl",
        publicationYear: 1988,
        image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        title: "Matilda",
        author: "Roald Dahl",
        publicationYear: 1988,
        image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        title: "Matilda",
        author: "Roald Dahl",
        publicationYear: 1988,
        image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        title: "Matilda",
        author: "Roald Dahl",
        publicationYear: 1988,
        image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        title: "Matilda",
        author: "Roald Dahl",
        publicationYear: 1988,
        image: "https://m.media-amazon.com/images/I/81PUl2JIcDL._AC_UF1000,1000_QL80_.jpg",
      },
    ];
    const res = await prisma.books.createMany({
      data,
      skipDuplicates: true,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
