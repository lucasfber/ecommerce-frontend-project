function setCurrentYear() {
  let currentYear = $('#current-year');
  currentYear.text(new Date().getFullYear());
}
setCurrentYear();
