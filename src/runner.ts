import { getInput, setFailed } from '@actions/core';
import fs from 'node:fs';
import path from 'node:path';
import { cmd } from './utils';

export async function run() {
    try {
        // inputs
        const publicKey = getInput('public-key');
        const tokensPath = getInput('tokens-path');
        const outputDir = getInput('output-dir');

        if (!publicKey) {
            setFailed('Required inputs are missing: public-key');

            return;
        }

        /*const response = await fetch(`${apiUrl}/theme/figma`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({
                name: themeName,
                figma_tokens: {},
                project: 'primevue',
                base: 'Figma',
                config: {
                    font_size: '14px',
                    font_family: 'Inter var'
                }
            })
        });

        if (!response.ok) {
            core.setFailed(`Fetch failed with status ${response.status}`);

            return;
        }

        const data = await response.json();*/

        const tokensRaw = fs.readFileSync(tokensPath, 'utf-8');
        const tokensJson = JSON.parse(tokensRaw);

        const data = {
            publicKey,
            ...tokensJson
        };

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputPath = path.resolve(outputDir, 'generated_tokens.json');

        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

        // eslint-disable-next-line no-console
        console.log('Theme tokens generated successfully!');

        cmd('git config user.name "Github Actions Bot"');
        cmd('git config user.email "<>"');
        cmd('git add .');
        cmd('git commit -m "Update Prime Tokens"', () => {
            // eslint-disable-next-line no-console
            console.log('No changes to commit');
        });

        cmd('git push');
    } catch (error) {
        setFailed((error as Error).message);
    }
}
