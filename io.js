// This function is used to validate form input fields
function validate() {
    // Get references to form elements
    let name = document.getElementById('name');
    let mail = document.getElementById('email');
    let phone = document.getElementById('phone');
    let Text = document.forms[0]['text'];
    let select = document.forms[0]['ooo'];

    // Validate phone number format
    if (phone.value.search(/^\+968-\d{4}-\d{4}$/) == -1) {
        alert("Incorrect phone ");
        phone.focus();
        return false;
    }

    // Validate name format (starts with an uppercase letter, followed by lowercase letters)
    if (name.value.search(/^[A-Z][a-z]*$/) == -1) {
        alert("Incorrect name ");
        name.focus();
        return false;
    }

    // Validate email format
    if (mail.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) == -1) {
        alert("Incorrect Email ");
        mail.focus();
        return false;
    }

    // Validate text format (starts with an uppercase letter, followed by lowercase letters)
    if (Text.value.trim().search(/^[A-Z][a-z]*$/) == -1) {
        alert("Incorrect Text ");
        Text.focus();
        return false;
    }

    // Validate that a selection is made from the dropdown
    if (select.selectedIndex < 1) {
        alert("Select an option ");
        select.focus();
        return false;
    }

    // If all validations pass, return true
    return true;
}
