//object de-structre

const course = {
    coursename : "JS" ,
    price : 999 ,
    courseInstructor : "Anshu"
}

//console.log(course.courseInstructor)  //-->One method

const {courseInstructor} = course //second method
const {courseInstructor : instructor} = course //second extended method to short the name for ease
console.log(courseInstructor)
console.log(instructor)

//destructing means {} 

//JSON
// {
//     "name" : "Anshu" ,
//     "coursename" : "Javascript"
//     "price" : "free"
// }