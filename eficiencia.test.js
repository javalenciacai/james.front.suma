const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Leer el contenido del archivo HTML
const html = fs.readFileSync('index.html', 'utf8');

// Crear un objeto JSDOM con el contenido del HTML
const dom = new JSDOM(html);



// Acceder a los elementos del DOM y realizar las validaciones necesarias
describe('Eficiencia de la función sumar', () => {
  it('debería completarse en menos de 50 ms', () => {
    const sumarButton = dom.window.document.querySelector('button[type="button"]');
    const resultadoDiv = dom.window.document.querySelector('#resultado');

    // Registrar el tiempo de inicio
    const startTime = performance.now();

    // Simular el clic en el botón de sumar
    sumarButton.click();

    // Esperar a que la respuesta sea procesada
    return new Promise(resolve => {
      setTimeout(() => {
        // Verificar el tiempo transcurrido
        const elapsedTime = performance.now() - startTime;
        console.log('Tiempo transcurrido:', elapsedTime);

        // Realizar la validación del tiempo
        expect(elapsedTime).toBeLessThan(50);

        resolve();
      }, 0);
    });
  });
});
