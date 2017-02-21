$(document).ready(function() {
// This won't allow users to have an incomplete form.
  $('#new-form').on('submit', (event) => {
    if($('input[name="topics[title]"]').val() === '' || $('textarea[name="topics[content]"]').val() === '' ) {
      alert('Oops, please fill out all parts of the form');
      return false;
    }
  });
// This won't allow users to click on the submit button without anything in the text area
  $('#show-form').on('submit', (event) => {
    if($('textarea[name="comments[content]"]').val() === '') {
      alert('Oops, you did not use your words!');
      return false;
    }
  });

});
