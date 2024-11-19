import { Builder, By, until } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';

(async function pokemonViewerTest() {
  let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options()).build();

  try {
    // Paso 1: Navegar al sitio
    await driver.get('http://localhost:5173');

    // Paso 2: Verificar que la lista de Pokémon está cargada
    await driver.wait(until.elementLocated(By.id('pokemon-list')), 20000);

    // Esperar a que un elemento específico de la lista esté presente:
    await driver.wait(async () => {
      const firstPokemon = await driver.findElement(By.id('pokemon-item-0')); // Esperar al primer Pokémon
      return firstPokemon;
    }, 20000, 'El primer Pokémon no se cargó después de 20 segundos.');

    console.log("pokemons en list");

    // Paso 3: Hacer clic en el primer Pokémon y verificar los detalles
    //await pokemonItems[0].click();

    const pokemonName = await driver.wait(until.elementLocated(By.id('h2')), 5000);
    console.log('Primer Pokémon seleccionado:', await pokemonName.getText());

    // Verificar que los detalles del Pokémon se han cargado (imagen y cualquier otro detalle relevante)
    const pokemonImage = await driver.wait(until.elementLocated(By.id('img')), 5000); // Espera a que la imagen cargue
    if (pokemonImage) {
      console.log('Imagen del Pokémon cargada correctamente.');
    } else {
      console.error('No se cargó la imagen del Pokémon.');
    }

  } finally {
    // Cerrar el navegador después del test
    await driver.quit();
  }
})();