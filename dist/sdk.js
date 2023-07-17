(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function getInfoForm(formData) {
    console.log(formData);
  }

  window.getInfoForm = getInfoForm;

}));
