import fs from 'fs';

(async () => {
  try {
    /*const response = await fetch('/tokens');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();*/
    const data = `My Token: ${process.env.PRIME_TOKEN}`;
    fs.writeFileSync('demo_tokens.json', JSON.stringify(data, null, 2));

    console.log('Tokens updated successfully.');
  } catch (error) {
    console.error('Error fetching or writing data:', error);
    process.exit(1);
  }
})();