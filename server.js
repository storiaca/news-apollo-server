import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
import datasources from "./datasources";
import { domainToASCII } from "url";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ...datasources
  })
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
