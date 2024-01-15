// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. * DONE *
$(document).ready(function () {
  var currentHour = parseInt(dayjs().format('HH'));

  // TODO: * DONE * Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('#hour-9').children().eq(2).click(function() {
    localStorage.setItem("hour-9", $('#hour-9').children().eq(1).val())
  });
  $('#hour-10').children().eq(2).click(function() {
    localStorage.setItem("hour-10", $('#hour-10').children().eq(1).val())
  });
  $('#hour-11').children().eq(2).click(function() {
    localStorage.setItem("hour-11", $('#hour-11').children().eq(1).val())
  });
  $('#hour-12').children().eq(2).click(function() {
    localStorage.setItem("hour-12", $('#hour-12').children().eq(1).val())
  });
  $('#hour-13').children().eq(2).click(function() {
    localStorage.setItem("hour-13", $('#hour-13').children().eq(1).val())
  });
  $('#hour-14').children().eq(2).click(function() {
    localStorage.setItem("hour-14", $('#hour-14').children().eq(1).val())
  });   
  $('#hour-15').children().eq(2).click(function() {
    localStorage.setItem("hour-15", $('#hour-15').children().eq(1).val())
  });
  $('#hour-16').children().eq(2).click(function() {
    localStorage.setItem("hour-16", $('#hour-16').children().eq(1).val())
  });
  $('#hour-17').children().eq(2).click(function() {
    localStorage.setItem("hour-17", $('#hour-17').children().eq(1).val())
  });

  // TODO: * DONE * Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    for (var i = 9; i <= 17; i++) {
      if (currentHour == i) {
        $('#hour-' + i).attr("class", "row time-block present");
      } else if (currentHour > i) {
        $('#hour-' + i).attr("class", "row time-block past");
      } else {
        $('#hour-' + i).attr("class", "row time-block future");
      }
    }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#hour-9').children().eq(1).val(localStorage.getItem("hour-9"));
  $('#hour-10').children().eq(1).val(localStorage.getItem("hour-10"));
  $('#hour-11').children().eq(1).val(localStorage.getItem("hour-11"));
  $('#hour-12').children().eq(1).val(localStorage.getItem("hour-12"));
  $('#hour-13').children().eq(1).val(localStorage.getItem("hour-13"));
  $('#hour-14').children().eq(1).val(localStorage.getItem("hour-14"));
  $('#hour-15').children().eq(1).val(localStorage.getItem("hour-15"));
  $('#hour-16').children().eq(1).val(localStorage.getItem("hour-16"));
  $('#hour-17').children().eq(1).val(localStorage.getItem("hour-17"));


  //
  // TODO: * DONE * Add code to display the current date in the header of the page.
  console.log("APD Date.today(): " + dayjs().format('MMMM D, YYYY') );
  $('#currentDay').text('Today is ' + dayjs().format('MMMM D, YYYY'));
});
