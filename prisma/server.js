const { ApolloServer, gql } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
    publicationYear: Int
    image: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
  }

  type Mutation {
    createBook(title: String!, author: String!, publicationYear: Int!, image: String): Book
    updateBook(id: Int!, title: String, author: String, publicationYear: Int, image: String): Book
    deleteBook(id: Int!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => prisma.book.findMany(),
    book: (_, { id }) => prisma.book.findUnique({ where: { id: parseInt(id) } }),
  },

  Mutation: {
    createBook: (_, { title, author, publicationYear, image }) =>
      prisma.book.create({ data: { title, author, publicationYear, image } }),
    updateBook: (_, { id, title, author, publicationYear, image }) =>
      prisma.book.update({ where: { id: parseInt(id) }, data: { title, author, publicationYear, image } }),
    deleteBook: (_, { id }) => prisma.book.delete({ where: { id: parseInt(id) } }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma }),
});

try {
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
