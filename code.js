$(document).ready(function () {

    $("form").submit(calculateGrade);
    $("#sortByName").click(outputName);
    $("#sortByPercent").click(outputPercent);

    var studentList = [];

    function calculateGrade(event) {
        event.preventDefault();

        var student = {};

        student.firstName = $("#firstName").val();
        student.lastName = $("#lastName").val();
        student.pointsEarned = parseFloat($("#points").val());
        student.pointsPossible = parseFloat($("#possiblePoints").val());

        student.percentage = (student.pointsEarned / student.pointsPossible) * 100;

        if (student.percentage >= 90) {
            student.grade = "A";
        } else if (student.percentage >= 80) {
            student.grade = "B";
        } else if (student.percentage >= 70) {
            student.grade = "C";
        } else if (student.percentage >= 60) {
            student.grade = "D";
        } else {
            student.grade = "F";
        }

        studentList.push(student);

        for (var x of studentList) {
            var output = `${x.firstName} ${x.lastName} , ${x.percentage.toFixed(0)}% , ${x.grade}`;
        }
        $("#gradeOutput").text(output);
    }

    function sortByName(name1, name2) {
        if (name1.lastName < name2.lastName) {
            return -1;
        }
        else if (name1.lastName > name2.lastName) {
            return 1;
        }
        else {
            return 0;
        }
    }

    function outputName(event) {
        event.preventDefault();
        studentList.sort(sortByName);

        for (var x of studentList) {
            var output = `${x.firstName} ${x.lastName} , ${x.percentage.toFixed(0)}% , ${x.grade}`;
        }
        $("#nameOutput").text(output);
    }

    function sortByPercent(grade1, grade2) {
        if (grade1.percentage < grade2.percentage) {
            return -1;
        }
        else if (grade1.percentage > grade2.percentage) {
            return 1;
        }
        else {
            return 0;
        }
    }

    function outputPercent(event) {
        event.preventDefault();
        studentList.sort(sortByPercent);

        for (var x of studentList) {
            var output = `${x.firstName} ${x.lastName} , ${x.percentage.toFixed(0)}% , ${x.grade}`;
        }
        $("#percentOutput").text(output);
    }
});