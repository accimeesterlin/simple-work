var db = require("./models"); //.Students;
const data = require("./data.json");
var checkInstudentName = "Esterling Irwin";
const faker = require("faker");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var express = require("express");
var app = express();

console.log("Data: ", faker.random);

[1, 2, 4, 5, 6]

function insertData () {
  // TODO

  // Insert data into Sequelize or DB

  for(var i = 0; i < 5; i ++){
    db.Checkin_parent.create({
      par_govt_id: faker.random.number(), // validation might not be the same
      par_name: faker.name.firstName(),
      united_status: faker.name.firstName()
    })
    .then(function(){
      console.log("Yupeee!!");
    })
    .catch(function(err){
      console.log("Errors: ", err);
      
    });
  }
}

insertData();
//update(checkInstudentName);
// 
//medicalStatus();

// uncheckedStatus();

app.get("/", (req, res) => {
  res.json({
    username: "accimeesterlin"
  });
});


app.get("/api/students", (req, res) => {

  db.Checkin_parent.findAll({
    raw: true,
    include: [{
      model: db.Students,
      where: {
        student_name: {
          [Op.not]: null
        }
      }
    }],
  }).then(function (dbCheckin_parent) {
    console.log(dbCheckin_parent);


    // for (var i = 0; i < studentDbResults.length; i++) {
    //   // console.log("Parent Name: " + studentDbResults[i].par_name + "Parent ID: " + studentDbResults[i].par_gvt_id);
    // }

    res.json(dbCheckin_parent);
  })
    .catch((err) => {
      console.log("Match not found ");

    });

});


app.post("/create", function(req, res){
  // TODO


  db.Checkin_parent.create(req.body)
    .then(function(data){
      // TODO

      res.json({ msg: "Data Created!" })
    })
    .catch(function(){
      // TODO
      res.status(404).json({error: "Not able to create the data"});
    });
});
//update to check in students
// update  checkin_parent set united_status= "NOT UNITED" , 
//UpdatedAt= CURRENT_TIMESTAMP WHERE par1_name ="Stuart Black";

function medicalStatus() {
  db.Students.findAll({
    where: {
      student_status: "Medical"
    },
    raw: true
  }).then(function (studentDbResults) {
    // console.log(studentDbResults)
    //console.log("Data: ", studentDbResults);

    for (var i = 0; i < studentDbResults.length; i++) {
      console.log(studentDbResults[i].student_name + " Student ID: " + studentDbResults[i].student_id + "\n");
    }

  })
    .catch((err) => {
      console.log("Student not found: ");

    });
}




// function uncheckedStatus() {


//   db.Students.findAll({
//     where: {
//       student_status: "Unchecked"
//     }
//   }).then(function (studentDbResults) {
//     for (var i = 0; i < studentDbResults.length; i++) {
//       console.log(studentDbResults[i].student_name + " Student ID: " + studentDbResults[i].student_id + "\n");
//     }

//   });
// }

function update(name) {
  db.Students.update({
    student_status: "UnChecked",
  }, {
      //student name dynamic variable goes here
      where: {
        student_name: name
      }
    }).then(function (studentDbResults) {
      // console.log(name + " has been checked in");
      console.log(Array.isArray(studentDbResults));
      console.log("results: " + studentDbResults);

      if (studentDbResults.length > 1) {
        // TODO
      } else {
        console.log("Student not found: ");

      }
      console.log(Array.isArray(studentDbResults));
    })
    .catch((err) => {
      console.log("Student not found: ");

    });
}

db.sequelize.sync({}).then(function () {
  console.log("database synched please insert seeds")
})



// function allStudents() {
//   // db.Students.findAll({
//   //   // where: {
//   //   // grade_level:'10'
//   //   //}
//   //   // include: [db.student_id]
//   // }).then(function (studentDbResults) {
//   //   console.log(studentDbResults);
//   // });

//   db.Students.findAll({
//     where: {
//       student_status: "Checked"
//     }
//   }).then(function (studentDbResults) {
//     for (var i = 0; i < studentDbResults.length; i++) {
//       console.log(studentDbResults[i].student_name + " Student ID: " + studentDbResults[i].student_id + "\n");
//     }

//   });
// }

// allStudents();




app.listen(8000, () => {
  console.log("Server is starting 9000");

});