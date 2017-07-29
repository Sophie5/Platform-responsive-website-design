$(document).ready(function() {
var courses = new Courses();

$("#courseInformation").html(function(){
  courses.listOfCourses();
  $("#courseInformation").html(courses.courseInformation)
});

$("#courseImages").html(function(){
  courses.courseImages();
  $("#courseImages").html(courses.courseImage)
});

});
