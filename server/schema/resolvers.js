const { UsersList } = require("../UsersData")
const _ = require("lodash")

const resolvers = {
    Query: {
        users: () => {
            return UsersList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UsersList, { id: Number(id) });
            return user;
        }
    },

    Mutation: {
        signUpUser: (parent, args) => {
            const user = args.input;
            console.log(user);
            const lastId = UsersList[UsersList.length-1].id;
            user.id = lastId + 1;
            UsersList.push(user);
            return user;
        },
    },
};

module.exports = { resolvers };