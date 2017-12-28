$(document).ready(function() {
  $(this).scrollTop(0);
  // hide our element on page load
  $('#profile-pic,#skill-text,#cards,#project-text,#github-user').css('opacity', 0);

  // add animate.css class
  $('#profile-pic').waypoint(function() {
    $('#profile-pic').addClass('fadeInLeft');
  }, {
    offset: '50%'
  });
  $('#profile-pic').waypoint(function() {
    $('#name-cover').addClass('fadeInLeft');
  }, {
    offset: '50%'
  });
  $('#skills-cover').waypoint(function() {
    $('#skill-text').addClass('fadeInRight');
  }, {
    offset: '50%'
  });
  $('#skills-cover').waypoint(function() {
    $('#cards').addClass('fadeInRight');
  }, {
    offset: '50%'
  });
  $('#projects').waypoint(function() {
    $('#github-user').addClass('fadeInLeft');
  }, {
    offset: '50%'
  });
  $('#projects').waypoint(function() {
    $('#project-text').addClass('fadeInLeft');
  }, {
    offset: '50%'
  });






});
