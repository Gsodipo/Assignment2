// Wait for the DOM to be ready
$(function() {

  $("#registration").validate({
   
    rules: {
      name:{
        required: true,
        minlength: 5
     },

     address: "required",

     phone:{
      required: true,
      pattern: "[0-9]{3}-[0-9]{7}"
     },

      email: {
        required: true,
        email: true
      }
    },
    // Specify validation error messages
    messages: {
      name: {
        required: "*Enter your name please",
        minlength: "Minimum length is 5 characters"
      },

      address: "*Enter your address please",

      phone:{
         required: "*Please enter your mobile number",
         pattern: "Please enter the correct pattern"
      },

      email:{
        required: "*Please enter a valid email address",
        email: "Please enter a valid email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});