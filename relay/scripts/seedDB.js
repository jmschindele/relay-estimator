const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const projectSeed = [
  {
    userName: "Chris1",
    project: 
        [
            {'project1': [
                {
                    'task': 'html',
                    'hours': 4,
                    'rate': 60
                },
                {
                    'task':'css',
                    'hours': 12,
                    'rate': 70
                },
                {
                    'task':'Javascript',
                    'hours': 20,
                    'rate': 100
                },
                {
                    'task':'React',
                    'hours': 10,
                    'rate': 120
                },
                {
                    'task':'Program Server',
                    'hours': 20,
                    'rate': 80
                }
            ]},
            {'project2': [
                {
                    'task': 'html',
                    'hours':10,
                    'rate': 60
                },
                {
                    'task':'css',
                    'hours': 20,
                    'rate': 70
                },
                {
                    'task':'Javascript',
                    'hours': 30,
                    'rate': 100
                },
                {
                    'task':'React',
                    'hours': 40,
                    'rate': 120
                },
                {
                    'task':'Program Server',
                    'hours': 50,
                    'rate': 80
                }
            ]},
        
        'date': new Date(Date.now())
    ]
    },
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
