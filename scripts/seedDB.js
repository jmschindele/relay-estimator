const mongoose = require("mongoose");
const db = require("../models");
console.log(db)

// This file empties the Projects collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/relaydb"
);

const projectSeed = [
  {
    uid: "3FPDyy58KaOY0Aw3qw4UNoAMsD03",
    project: [
      { 
        projectName: 'Project 1',
        projectInfo: [
          {
            task: "html",
            hours: 4,
            rate: 60
          },
          {
            task: "css",
            hours: 12,
            rate: 70
          },
          {
            task: "Javascript",
            hours: 20,
            rate: 100
          },
          {
            task: "React",
            hours: 10,
            rate: 120
          },
          {
            task: "Program Server",
            hours: 20,
            rate: 80
          }
        ]
      },
      {
        projectName: 'project2',
        projectInfo: [
          {
            task: "html",
            hours: 10,
            rate: 60
          },
          {
            task: "css",
            hours: 20,
            rate: 70
          },
          {
            task: "Javascript",
            hours: 30,
            rate: 100
          },
          {
            task: "React",
            hours: 40,
            rate: 120
          },
          {
            task: "Program Server",
            hours: 50,
            rate: 80
          }
        ],
        date: new Date(Date.now())
      }
    ]
  },
  {
    uid: "Chris2",
    project: [
      { 
        projectName : 'project1',
        projectInfo: [
          {
            task: "html",
            hours: 12,
            rate: 60
          },
          {
            task: "css",
            hours: 32,
            rate: 70
          },
          {
            task: "Javascript",
            hours: 24,
            rate: 100
          },
          {
            task: "React",
            hours: 120,
            rate: 120
          },
          {
            task: "Program Server",
            hours: 320,
            rate: 80
          }
        ]
      },
      {
        projectName: 'project2',
        projectInfo: [
          {
            task: "html",
            hours: 110,
            rate: 60
          },
          {
            task: "css",
            hours: 120,
            rate: 70
          },
          {
            task: "Javascript",
            hours: 130,
            rate: 100
          },
          {
            task: "React",
            hours: 140,
            rate: 120
          },
          {
            task: "Program Server",
            hours: 150,
            rate: 80
          }
        ],
        date: new Date(Date.now())
      }
    ]
  },
  {
    uid: "Josh",
    project: [
      {
        projectName: 'project1',
        projectInfo: [
          {
            task: "html",
            hours: 122,
            rate: 60
          },
          {
            task: "css",
            hours: 322,
            rate: 70
          },
          {
            task: "Javascript",
            hours: 224,
            rate: 100
          },
          {
            task: "React",
            hours: 120,
            rate: 120
          },
          {
            task: "Program Server",
            hours: 320,
            rate: 80
          }
        ]
      },
      {
        projectName: 'project2',
        projectInfo: [
          {
            task: "html",
            hours: 150,
            rate: 60
          },
          {
            task: "css",
            hours: 160,
            rate: 70
          },
          {
            task: "Javascript",
            hours: 80,
            rate: 100
          },
          {
            task: "React",
            hours: 180,
            rate: 120
          },
          {
            task: "Program Server",
            hours: 200,
            rate: 80
          }
        ],
        date: new Date(Date.now())
      }
    ]
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
