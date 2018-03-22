var db = require("./models"); //.Students;
var checkInstudentName = "Esterling Irwin";
var express = require("express");
var app = express();

//update(checkInstudentName);
// 
//medicalStatus();

// uncheckedStatus();
match();
function match(){
db.Checkin_parent.findAll({
  include: [db.Students]
}).then(function(dbCheckin_parent) {
  console.log(dbCheckin_parent);
  for (var i = 0; i < studentDbResults.length; i++) {
    // console.log("Parent Name: " + studentDbResults[i].par_name + "Parent ID: " + studentDbResults[i].par_gvt_id);
  }
})
.catch((err) => {
  console.log("Match not found ");
 
});

}
//update to check in students
// update  checkin_parent set united_status= "NOT UNITED" , 
//UpdatedAt= CURRENT_TIMESTAMP WHERE par1_name ="Stuart Black";

function medicalStatus() {
  db.Students.findAll({
    where: {
      student_status: "Medical"
    }
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
    console.log(Array.isArray(studentDbResults) );
    console.log("results: " + studentDbResults );

    if(studentDbResults.length >1){
      // TODO
    } else{
    console.log("Student not found: ");
      
    }
    console.log(Array.isArray(studentDbResults) );
  })
  .catch((err) => {
    console.log("Student not found: ");
   
  });
}

// db.sequelize.sync({force:true}).then(function(){
//   console.log("database synched please insert seeds")
// })



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


