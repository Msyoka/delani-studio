$(document).ready(function() {
      $(".jumbotron#click").click(function() {
        $(".show").toggle();
        $(".hide").toggle();
      });
      $(".jumbotron#click1").click(function() {
        $(".show1").toggle();
        $(".hide1").toggle();
      });
      $(".jumbotron#click2").click(function() {
        $(".show2").toggle();
        $(".hide2").toggle();
      });
    });

    function send() {
      var sideA = parseInt(document.getElementById('name').value);
      var sideB = parseInt(document.getElementById('email').value);
      var sideC = parseInt(document.getElementById('message').value);
      alert(name + " We have received your message.Thank you."+ name);

    }
