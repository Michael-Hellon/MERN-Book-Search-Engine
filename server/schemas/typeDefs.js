const typeDefs = /* GraphQL */`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User
    }


    type User {
        _id: ID
        username: String
        email: String!
        bookCount: Int
        savedBooks: [Book]        
    }



    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String!
        image: String
        forSale: String
        link: String
        title: String!
    }


    

    input SavedBookInput {
        authors: [String]
        description: String
        bookId: String!
        image: String
        forSale: String
        link: String
        title: String!
    }

    type Auth {
    token: ID!
    user: User
    }

`;

// export the typeDefs
module.exports = typeDefs;