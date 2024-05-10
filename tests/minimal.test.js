import { expect, test } from 'vitest';
import Eleventy from "@11ty/eleventy";

test('minimal', async () => {
    console.log(process.cwd());
    const elev = new Eleventy(
        "./tests/fixtures/minimal/",
        "./tests/fixtures/minimal/_site",
        {
            configPath: "./tests/fixtures/minimal/.eleventy.js"
        } 
    );

    const json = await elev.toJSON(); 

    expect(json).toMatchSnapshot();
})
 