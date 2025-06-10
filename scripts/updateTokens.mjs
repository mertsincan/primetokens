import fs from 'fs';

(async () => {
  try {
    /*const response = await fetch('https://example.com/api/tokens');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();*/
    const data = `TEST_TOKEN_1,TEST_TOKEN_2`;
    fs.writeFileSync('demo_tokens.json', JSON.stringify(data, null, 2));

    console.log('Tokens updated successfully.');
  } catch (error) {
    console.error('Error fetching or writing data:', error);
    process.exit(1);
  }
})();