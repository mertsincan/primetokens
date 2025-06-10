import fs from 'fs';

(async () => {
  try {
    /*
    const response = await fetch(`${process.env.DESIGNER_API_URL}/theme/figma`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({
        name: themeName,
        figma_tokens: figmaData,
        project: 'primevue',
        base: 'Figma',
        config: {
          font_size: '14px',
          font_family: 'Inter var'
        }
      })
    });
    
    const data = await response.json();*/
    const data = `My Token: ${process.env.PRIME_TOKEN}`;
    fs.writeFileSync('demo_tokens.json', JSON.stringify(data, null, 2));

    console.log('Tokens updated successfully.');
  } catch (error) {
    console.error('Error fetching or writing data:', error);
    process.exit(1);
  }
})();