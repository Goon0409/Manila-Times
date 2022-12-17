import { sort, search, newsList } from "./main.js";
import { JSDOM } from 'jsdom';

//Example testing for search function
describe('search', () => {
  test('should return an array of items that contain the search string', () => {
    // Create a simulated DOM environment
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <input id="search-input" type="text" />
      </body>
      </html>
    `);
    global.document = dom.window.document;

    // Set the value of the search-input element
    document.getElementById('search-input').value = 'journalist';

    const result = search();
    expect(result).toEqual([
      "What films should an aspiring journalist watch?",
      "What books should an aspiring journalist read?",
    ]);
  });
});



describe('sort', () => {
  test('should return an array of items sorted in ascending order', () => {
    // Create a simulated DOM environment
    const dom = new JSDOM();
    global.document = dom.window.document;

    const result = sort('ascending');
    expect(result).toEqual([
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
      "Buried underpants and tea bags help scientists evaluate soil",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Media glare can enrich tennis pros yet imperil mental health",
      "What books should an aspiring journalist read?",
      "What films should an aspiring journalist watch?",
    ]);
  });
  
  test('should return an array of items sorted in descending order', () => {
    // Create a simulated DOM environment
    const dom = new JSDOM();
    global.document = dom.window.document;

    const result = sort('descending');
    expect(result).toEqual([
      "What films should an aspiring journalist watch?",
      "What books should an aspiring journalist read?",
      "Media glare can enrich tennis pros yet imperil mental health",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Buried underpants and tea bags help scientists evaluate soil",
      "'Nightmare' TV show 'Euphoria — health threat or high art?",])
    })
  });
   




