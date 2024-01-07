const animales = [
    "Elefante🐘 ", "León🦁 ", "Jirafa🦒 ", "Tigre🐆 ", "Cebra🦓 ",
    "Mono 🐒 ", "Oso🐻", "Hipopótamo🦏", "Canguro🦘", "gato🐈",
    "caballo🐎", "Raton🐀", "Murcielago🦇", "Gallo🐓", "serpiente🐍",
    "Tiburon🦈", "Araña🕷️", "Escorpuion🦂", "Ballena🐳", "tortuga🐢","perro🐕 "
];

function generarAnimal() {
    const animalContainer = document.getElementById('animalContainer');
    const randomIndex = Math.floor(Math.random() * animales.length);
    const animalElegido = animales[randomIndex];

    
    animalContainer.textContent = `¡Felicidades! Has obtenido un ${animalElegido} en la lotería de animalitos.`;
}


function mostrarSeleccion(seleccion) {
    const seleccionContainer = document.getElementById("seleccion");
    seleccionContainer.textContent = `Selección: ${seleccion}`;
}


const convertidor = {
    convertirDolarAEuro: function (cantidad) {
      
      const factorConversion = 1.50;
      return cantidad * factorConversion;
    },
  
  
  
  convertirEuroADolar: function (cantidad) {
      
      const factorConversion = 1.50;
      return cantidad * factorConversion;
    }
  };
  
  
     function realizarConversion(){
      const cantidad = parseFloat(document.getElementById('cantidad').value);
      const moneda = document.getElementById('moneda').value;
  
      if (isNaN(cantidad)) {
        alert('Por favor, introduce una cantidad válida.');
        return;
      }
    
      let resultado;
    
  
     if (moneda === 'usd') {
       resultado = convertidor.convertirDolarAEuro(cantidad);
       console.log(`Convertir ${cantidad} dólares a euros.`);
     }
      else if (moneda === 'eur') {
       resultado = convertidor.convertirEuroADolar(cantidad);
       console.log(`Convertir ${cantidad} euros a dólares.`);
     }
     document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)}`;
     console.log(`Resultado: ${resultado.toFixed(2)}`);
    }

    function Elefante() {
        mostrarSeleccion("Elefante🐘");
    }
    
    function Leon() {
        mostrarSeleccion("León🦁");
    }
    
    function Cebra() {
        mostrarSeleccion("Cebra🦓");
    }
    function Tigre() {
        mostrarSeleccion("Tigre🐆");
    }
    
    function Mono() {
        mostrarSeleccion("mono🐒");
         
    }
    
    function Oso() {
        mostrarSeleccion(" Oso🐻");
    }
    
    function   Hipopótamo() {
        mostrarSeleccion("Hipopótamo🦏");
    }
    
    function  Canguro() {
        mostrarSeleccion("Canguro🦘");
    }
    
    function Jirafa() {
        mostrarSeleccion("Jirafa🦒");
    }
    function  Gato() {
        mostrarSeleccion("gato🐈");
    }
    
    function Perro() {
        mostrarSeleccion("Perro🐕");
    }
    
    function Caballo() {
        mostrarSeleccion("caballo🐎");
    }
    function Raton() {
        mostrarSeleccion("Raton🐀");
    }
    
    function Murcielago () {
        mostrarSeleccion("Murcielago🦇");
    }
    
    function Gallo() {
        mostrarSeleccion("Gallo🐓");
    }
    function Serpiente () {
        mostrarSeleccion("Serpiente🐍");
    }
    
    function Tiburon() {
        mostrarSeleccion("Tiburon🦈");
    }
    
    function Araña () {
        mostrarSeleccion("Araña🕷️");
    }
    
function Escorpuion () {
    mostrarSeleccion("Escorpuion🦂");
}

function Ballena() {
    mostrarSeleccion("Ballena🐳");
}