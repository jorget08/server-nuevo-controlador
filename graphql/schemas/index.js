const { gql } = require('apollo-server-express');



const root_type = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

module.exports = [
  root_type,
];
