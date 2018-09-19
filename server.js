const express = require('express');
const app = express();
const logger = require('./helpers/logger');
const graphHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const colors = require('./helpers/colors');

const PORT = 7777

const typeDefs = require('./graph/schema');
const resolvers = require('./graph/resolvers');
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(logger);
app.use('/gql', graphHTTP({ schema, graphiql: true }));
app.use('/api', require('./controllers'));
app.get('/', require('./controllers/main'))
app.use((req, res, next) => res.send('<h1>404<h1>'));

app.listen(PORT, () => {
    console.log(`${colors.FgRed}
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║ ${colors.FgYellow}GraphQL and GraphiQL Server is now running on ${colors.FgBlue}http://localhost:${PORT}/gql    ${colors.FgRed}║
║ ${colors.FgYellow}API is now running on ${colors.FgBlue}http://localhost:${PORT}/api                            ${colors.FgRed}║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
${colors.Reset}`);
});
