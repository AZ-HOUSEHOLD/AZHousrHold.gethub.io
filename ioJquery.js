function validate() {
    // Get references to form elements using jQuery
    let name = $('#name');
    let mail = $('#email');
    let phone = $('#phone');
    let Text = $('form[name="yourFormName"] input[name="text"]');
    let select = $('form[name="yourFormName"] select[name="ooo"]');

    // Validate phone number format
    if (!phone.val().match(/^\+968-\d{4}-\d{4}$/)) {
        alert("Incorrect phone");
        phone.focus();
        return false;
    }

    // Validate name format (starts with an uppercase letter, followed by lowercase letters)
    if (!name.val().match(/^[A-Z][a-z]*$/)) {
        alert("Incorrect name");
        name.focus();
        return false;
    }

    // Validate email format
    if (!mail.val().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alert("Incorrect Email");
        mail.focus();
        return false;
    }

    // Validate text format (starts with an uppercase letter, followed by lowercase letters)
    if (!Text.val().trim().match(/^[A-Z][a-z]*$/)) {
        alert("Incorrect Text");
        Text.focus();
        return false;
    }

    // Validate that a selection is made from the dropdown
    if (select.prop('selectedIndex') < 1) {
        alert("Select an option");
        select.focus();
        return false;
    }

    // If all validations pass, return true
    return true;
}
