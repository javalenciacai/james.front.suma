const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);

// Obtener el formulario y los elementos de entrada
  const form = dom.window.document.getElementById("sumarForm");
  const num1Input = dom.window.document.getElementById("num1");
  const num2Input = dom.window.document.getElementById("num2");
  const sumarButton = dom.window.document.querySelector("button");
  const resultadoDiv = dom.window.document.getElementById("resultado");


describe('prueba funcional de elementos', () => {
  test('Validar los atributos de los elementos de entrada', () => {

    
  expect(num1Input.getAttribute("type")).toBe("number");
  expect(num2Input.getAttribute("type")).toBe("number");
  expect(num1Input.getAttribute("required")).toBe("");
  expect(num2Input.getAttribute("required")).toBe("");
     
  });  
  test('Validar que el botón tiene el atributo onclick', () => {
  
  
  expect(sumarButton.getAttribute("onclick")).toBe("sumar()");
       
    });  
  
});

describe('prueba tecnica de elementos', () => {
  test('el elemento de sumarform se carga correctamente', () => {
    
    // Validar que el formulario y los elementos de entrada existen
  expect(form).not.toBeNull();
  expect(form).toBeDefined();
  expect(num1Input).toBeDefined();
  expect(num2Input).toBeDefined();
  });

  test('Validar que el resultado y el botón de suma existe', () => {
  
  expect(resultadoDiv).toBeDefined();
  expect(sumarButton).toBeDefined();
       
    });
});


// codigo para ejecutar el test npm test
