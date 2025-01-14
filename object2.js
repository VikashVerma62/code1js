// destructuring of object
const course={
    coursename:"js in hindi",
    price:"999",
    courseIsturusctor:"hitesh",

}
// course instuructor
const {courseIsturusctor : instuructor}=course;
console.log(instuructor);

// {
//     "name":"hitesh",
//     "courseName":"hitesh in hindi";
//     price:"free"
// }