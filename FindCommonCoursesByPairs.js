/*
You are a developer for a university. 
Your current project is to develop a system for students to find courses they share with friends. 
The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.
Write a function that takes in a list of (student ID number, course name) pairs and returns, 
for every pair of students, a list of all courses they share.

Coding Quest from Karat Interview (Indeed)
*/

// 20200124@BH_Lin ------------------------------------------------------------>
function printOutCommonCoursesByIds(studentCoursePairs) {
    let coursesByIds = {}

    studentCoursePairs.forEach(element => {
        let id = element[0];
        let course = element[1];
        if (coursesByIds.hasOwnProperty(id)) {
            coursesByIds[id].push(course);
        } else {
            coursesByIds[id] = [course]
        }
    });

    let ids = Object.keys(coursesByIds);

    let pairsWithCommonCourses = [];
    for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
            let id_A = ids[i];
            let id_B = ids[j];
            let pair = [id_A, id_B];
            let coursesForId_A = coursesByIds[id_A];
            let coursesForId_B = coursesByIds[id_B];
            const commonCourses = coursesForId_A.filter(element => coursesForId_B.includes(element));

            pairsWithCommonCourses[pair] = commonCourses;
        }
    }
    return pairsWithCommonCourses;
    // Time complexity: O(N^2)
}
// 20200124@BH_Lin ------------------------------------------------------------<

const studentCoursePairs1 = [
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
    ["58", "Software Design"]
];

const studentCoursePairs2 = [
    ["42", "Software Design"],
    ["0", "Advanced Mechanics"],
    ["9", "Art History"],
]

printOutCommonCoursesByIds(studentCoursePairs1)
printOutCommonCoursesByIds(studentCoursePairs2)

/*

+++ printOutCommonCoursesByIds +++
pair:  [ '17', '25' ]
pair:  [ '17', '58' ]
pair:  [ '17', '94' ]
pair:  [ '25', '58' ]
pair:  [ '25', '94' ]
pair:  [ '58', '94' ]
coursesByIds: {
  '17': [ 'Software Design', 'Linear Algebra', 'Political Science' ],
  '25': [ 'Economics' ],
  '58': [ 'Linear Algebra', 'Mechanics', 'Economics', 'Software Design' ],
  '94': [ 'Art History', 'Operating Systems', 'Economics' ]
}
pairsWithCommonCourses: [
  '17,25': [],
  '17,58': [ 'Software Design', 'Linear Algebra' ],
  '17,94': [],
  '25,58': [ 'Economics' ],
  '25,94': [ 'Economics' ],
  '58,94': [ 'Economics' ]
]
--- printOutCommonCoursesByIds ---

*/
