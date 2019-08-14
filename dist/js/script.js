$(document).ready(function() {
  let togglerPassword = $('#toggler');
  let inputPassword = $('#password');
  let userIcon = $('.flaticon-man');
  let modalLogin = $('.modal-login');
  let modalLoginForm = $('.modal-login__form'); // is this variable really necessary?

  function setCurrentYear() {
    let currentYear = $('#current-year');
    currentYear.text(new Date().getFullYear());
  }

  function showPassword() {
    inputPassword.attr('type', 'text');
  }

  function hidePassword() {
    inputPassword.attr('type', 'password');
  }

  modalLogin.click(function(e) {
    if (e.target === this) {
      modalLogin.css('display', 'none');
      modalLoginForm.trigger('reset');
    }
  });

  userIcon.click(function() {
    modalLogin.css('display', 'flex');
  });

  togglerPassword.mousedown(function() {
    showPassword();
  });
  togglerPassword.mouseup(function() {
    hidePassword();
  });

  setCurrentYear();
});
