function sumar() {
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jamesapisumadevelop.jamesvalencia1.repl.co/sumar/" + num1 + "/" + num2, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          document.getElementById("resultado").innerHTML = "Resultado: " + response.resultado;
        }
      };
      xhr.send();
    }