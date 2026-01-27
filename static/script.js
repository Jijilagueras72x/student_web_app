// Function to check fields and show/hide elements progressively
function checkFields() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value.trim();
    let grade = document.getElementById("grade").value;

    // Show date field if name is filled
    if (name !== "") {
        document.getElementById("dateField").classList.remove("hidden");
    } else {
        document.getElementById("dateField").classList.add("hidden");
        document.getElementById("subjectField").classList.add("hidden");
        document.getElementById("emailField").classList.add("hidden");
        document.getElementById("gradeField").classList.add("hidden");
        document.getElementById("submitBtn").classList.add("hidden");
    }

    // Show subject field if date is filled
    if (date !== "") {
        document.getElementById("subjectField").classList.remove("hidden");
    } else {
        document.getElementById("subjectField").classList.add("hidden");
        document.getElementById("emailField").classList.add("hidden");
        document.getElementById("gradeField").classList.add("hidden");
        document.getElementById("submitBtn").classList.add("hidden");
    }

    // Show email field if subject is selected
    if (subject !== "") {
        document.getElementById("emailField").classList.remove("hidden");
    } else {
        document.getElementById("emailField").classList.add("hidden");
        document.getElementById("gradeField").classList.add("hidden");
        document.getElementById("submitBtn").classList.add("hidden");
    }

    // Show grade/score field if all previous fields are filled
    if (name !== "" && date !== "" && subject !== "" && email !== "") {
        document.getElementById("gradeField").classList.remove("hidden");
    } else {
        document.getElementById("gradeField").classList.add("hidden");
        document.getElementById("submitBtn").classList.add("hidden");
    }

    // Show submit button if all fields are filled
    if (name !== "" && date !== "" && subject !== "" && email !== "" && grade !== "") {
        document.getElementById("submitBtn").classList.remove("hidden");
    } else {
        document.getElementById("submitBtn").classList.add("hidden");
    }
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value.trim();
    let grade = document.getElementById("grade").value;

    if (name === "" || date === "" || subject === "" || email === "" || grade === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100.");
        return false;
    }

    // Add student to the list
    addStudent(name, date, subject, email, grade);
    return false; // prevent page reload
}

function addStudent(name, date, subject, email, grade) {
    let status = grade >= 75 ? "Passed" : "Failed";
    let statusClass = grade >= 75 ? "pass" : "fail";

    let li = document.createElement("li");
    li.className = statusClass;
    li.innerHTML = `<strong>${name}</strong> - ${subject}<br>
                    Date: ${date} | Email: ${email}<br>
                    Grade: ${grade} (${status})`;

    document.getElementById("studentList").appendChild(li);

    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("grade").value = "";

    // Hide all fields except name
    document.getElementById("dateField").classList.add("hidden");
    document.getElementById("subjectField").classList.add("hidden");
    document.getElementById("emailField").classList.add("hidden");
    document.getElementById("gradeField").classList.add("hidden");
    document.getElementById("submitBtn").classList.add("hidden");
}