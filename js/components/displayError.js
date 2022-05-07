function errorMessage(errorType = "error", message = "An error has occured") {
  return `<div class="error ${errorType}">${message}</div>`;
}
