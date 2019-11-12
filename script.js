// I am not too familliar with vanilla JavaScript and for that reason I had to use Jquery to complete the task.
//the code will work as expected only if the first name is apssed into input field
$(document).ready(function () {
    let person = {
        name: "Akshay",
        lastName: "Konjier",
        floor: 5,
        seat: "B"
    }

    $('#form').submit(function (e) {
        e.preventDefault();
        const hide = $('ul').hide();
        let searchPerson = $('#text').val();// setting text field of input to be a value of inputed text 
        //if statement below, will execute a block of code that meets right conditions
        if (searchPerson != person.name && searchPerson !== '') {
            hide
            $('.error').replaceWith(`<h2 class="error">Sorry, cannot find ${searchPerson} in the system</h2>`);
        } else if (searchPerson === '') {
            $('.error').replaceWith('<h2 class="error">Please enter the name</h2>')
            hide;
        }
        else if (searchPerson === person.name) {
            $('.error').hide();
            $('#text').val('');
            let foundPerson = `<li>${person.name} is seated on</li>`;
            let floor = `<span> floor ${person.floor}</span>`;
            let seat = `<span>seat ${person.seat}</span>`;
            $('.seatSpot').show().replaceWith(`<ul class="test">${foundPerson} ${floor} ${seat}</ul>`);
        }
    });
})
