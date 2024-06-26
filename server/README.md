# GraphQL Implementation using Apollo Server

## Apollo Server:

Apollo Server is an open-source GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.


## Steps to create and run the project

### Step1: create a new project
1. create a directory for a new project and cd into it
   > mkdir server
   > cd server

2. Intialize a new Node.js project with npm
   > npm init y

### Step2: Install dependencies
   > npm install grapgql apollo-server

### Step3: Create an instance of Apollo Server

### Step4: Define your GrapgQl Schema

### Step5: Define your data set

### Step6: Define resolver

### Step7: Start the server
  > npm start


## APIS defined in this project

1. SignUp API

### Example:
### Invoke API from GaphQL Server

mutation SignUpUser($SignUpUserinput : SignUpUserinput!){
  signUpUser(input: $SignUpUserinput){
    username
    firstname
    lastname
    age
    email
  }
}

### Input

{
  "SignUpUserinput": {
    "username": "DM",
    "firstname": "Dhanya",
    "lastname": "M",
    "age": null,
    "email": "dm@gmail.com",
    "password": "123456"
  }
}


2. Fetch All Users API

### Example: 

### Invoke Fetch All Users from GraphQL Server

query GetAllUsers{
  users {
    username
    firstname
    lastname
    age
    email
  }
}


3. Fetch Specific User API

### Example:

### Invoke Fetch Specific User from GraphQL

query GetUser($userId: ID!){
 user(id: $userId) {
   username
   firstname
   lastname
   age
   email
 }
}

### Input

{
  "userId": 100
}