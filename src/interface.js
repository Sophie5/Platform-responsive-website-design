$(document).ready(function() {
var courses = new Courses();

$("#courseList").html(function(){
  courses.listOfCourses();
  $("#courseList").html(courses.courseInformation)
});


});
