/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.filter(member=>member.marks>50)
  .map(member => console.log(member));
}
PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(member=>{
    if(member.marks>50){console.log(member);
  }});
}
PrintStudentsbyForEach();

function addData() {
  //Write your code here, just console.log
  const memberNew={id:07,name:"sanjana",age:"32",marks:100};
arr.push(memberNew);console.log(memberNew);
}
addData();

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(member=>member.marks>=50);console.log(arr);
}
removeFailedStudent();

function concatenateArray() {
  //Write your code here, just console.log
  const arrayNew = [
  {id: 10,name:"rahul",age:"99",marks:02},
  {id: 22,name:"baby", age:"52",marks:98},
  {id: 67,name:"laaly",age:"15",marks:65}
];
const arrayMerged = arr.concat(arrayNew);
console.log(arrayMerged);
}
concatenateArray();
