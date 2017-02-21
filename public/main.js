$(document).ready(function() {

  $('#new-form').on('submit', (event) => {
    if($('input[name="topics[title]"]').val() === '' || $('textarea[name="topics[content]"]').val() === '' ) {
      alert('Oops, please fill out all parts of the form');
      return false;
    }
  });

  $('#show-form').on('submit', (event) => {
    if($('textarea[name="comments[content]"]').val() === '') {
      alert('Oops, you did not use your words!');
      return false;
    }
  });

});
