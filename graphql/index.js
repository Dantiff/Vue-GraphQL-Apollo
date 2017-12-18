const express = require('express')
const cors = require('cors')
const graphql = require('express-graphql')
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const typeDefs = require('./schema')
const schema = require('./schema/rootSchema')
const mocks = require('./mocks')

// global config
const app = express()
const host = 'localhost'
const port = 47274

// add typeDefs to executable schema
// const schema = makeExecutableSchema({
//   typeDefs,
// });

// add mock functions
// addMockFunctionsToSchema({
//   schema,
//   mocks
// })

// cors middleware
app.use(cors())

// graphql middleware
app.use('/', graphql({
  graphiql: true,
  schema,
  context: {},
  tracing: true,
  cacheControl: true,
}))

// start server
app.listen(port, host, () => {
  console.log(`> Server listening at http://${host}:${port}`)
})

// const express = require('express');
// const bodyParser = require('body-parser');
// const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// const { makeExecutableSchema } = require('graphql-tools');
// const schema = require('./schema/rootSchema');
// const mocks = require('./mocks');


// // Initialize the app
// const app = express();

// // global config
// const host = 'localhost'
// const port = 47274

// // The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress({ 
// 	schema,
//   context: {},
//   tracing: true,
//   cacheControl: true,
// }));

// // GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// // start server
// app.listen(port, host, () => {
//   console.log(`> Server listening: Go to at http://${host}:${port}/graphiql to run graphiql queries`);
// })
