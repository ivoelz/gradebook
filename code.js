$(document).ready(function (){

    $("form").submit(calculateGrade);

    function calculateGrade(event) {
        event.preventDefault();

        var grade = {};

        grade["firstName"] = $("#firstName").val();
        grade["lastName"] = $("#lastName").val();
        grade["pointsEarned"] = parseFloat($("#points").val());
        grade["possiblePoints"] = parseFloat($("#possiblePoints").val());

        var gradePercentage = (grade.pointsEarned / grade.possiblePoints) * 100;
        var roundedPercentage = gradePercentage.toFixed(2);

        var letterGrade;

        if (gradePercentage >= 90)
        {
            letterGrade = "A";
        }
        else if (gradePercentage >= 80)
        {
            letterGrade = "B";
        }
        else if (gradePercentage >= 70)
        {
            letterGrade = "C";
        }
        else if (gradePercentage >= 60)
        {
            letterGrade = "D";
        }
        else
        {
            letterGrade = "F";
        }

        $("#firstNameOutput").text("Student first name: " + grade.firstName);
        $("#lastNameOutput").text("Student last name: " + grade.lastName);
        $("#percentOutput").text("Grade percentage: " + roundedPercentage + "%");
        $("#gradeOutput").text("Letter grade: " + letterGrade);
    }

});