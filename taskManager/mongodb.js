// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID=mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
console.log(id.toHexString().length);
console.log(ObjectID(id.id));
console.log(id.id);
console.log(id.id.length);

const connectionURL = "mongodb://localhost:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Charu Sachdeva",
    //     age: 18,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "harry",
    //       age: 16,
    //     },
    //     {
    //       name: "chavi",
    //       age: 18,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Task1", completed: true },
    //     { description: "Task2", completed: false },
    //     { description: "Task3", completed: true },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.oog(error);
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
