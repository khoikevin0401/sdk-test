(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function getInfoForm(formData) {
    console.log(formData);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  window.getInfoForm = getInfoForm;

}));
