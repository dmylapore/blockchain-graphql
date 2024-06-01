const { UsersList } = require("../UsersData")

const resolvers = {
    Query: {
        users() {
            return UsersList;
        },
    },
};

module.exports = { resolvers };