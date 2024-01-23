var printStudentId = function (student) {
    console.log(student === null || student === void 0 ? void 0 : student.id);
};
var student = { id: 123 };
console.log(printStudentId(student));
