
// Remove row functions from the table
const removeRow = (event) => {
    // TODO: Remove row with confirmation message when click on remove button
    event.target.closest('tr').remove();
    if (removeRow.value === '') {
        alert('Please Enter Fruit Name')
        return false;
    }
}

    // View user information in list 
    const viewUser = (event) => {
        // TODO: View user information in list by click on view button
    }

    // Main
    const leftBox = document.querySelector('.left-box');
    const btnViews = document.querySelectorAll('.view');
    const btnRemoves = document.querySelectorAll('.remove');

    // TODO: Add Event listeners to remove button
    btnRemoves.addEventListener().remove(remove);

    // TODO: Add event listeners to view button

    btnViews.addEventListener().view;



