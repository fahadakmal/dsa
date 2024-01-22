var SchoolHeterogeneous;
(function (SchoolHeterogeneous) {
    SchoolHeterogeneous[SchoolHeterogeneous["Waterloo"] = 1] = "Waterloo";
    SchoolHeterogeneous["Harvard"] = "Harvard";
    SchoolHeterogeneous[SchoolHeterogeneous["Stanford"] = 2] = "Stanford";
    SchoolHeterogeneous["Berkeley"] = "Berkeley";
})(SchoolHeterogeneous || (SchoolHeterogeneous = {}));
var SchoolNumber;
(function (SchoolNumber) {
    SchoolNumber[SchoolNumber["Waterloo"] = 0] = "Waterloo";
    SchoolNumber[SchoolNumber["Harvard"] = 1] = "Harvard";
    SchoolNumber[SchoolNumber["Stanford"] = 2] = "Stanford";
    SchoolNumber[SchoolNumber["Berkeley"] = 3] = "Berkeley";
})(SchoolNumber || (SchoolNumber = {}));
var SchoolString;
(function (SchoolString) {
    SchoolString["Waterloo"] = "Waterloo";
    SchoolString["Harvard"] = "Harvard";
    SchoolString["Stanford"] = "Stanford";
    SchoolString["Berkeley"] = "Berkeley";
})(SchoolString || (SchoolString = {}));
var foo = function (school) {
    console.log(school);
};
console.log(SchoolString.Harvard);
foo(SchoolString.Waterloo);
// =========
//constant enums
var School;
(function (School) {
    School[School["Waterloo"] = 1] = "Waterloo";
    School[School["Harvard"] = 2] = "Harvard";
    School[School["Stanford"] = 3] = "Stanford";
    School[School["Berkeley"] = 4] = "Berkeley";
})(School || (School = {}));
console.log(School.Waterloo);
console.log(School[1]);
