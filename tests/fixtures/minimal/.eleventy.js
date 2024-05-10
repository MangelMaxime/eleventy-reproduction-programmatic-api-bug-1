import { dirname, filename } from 'dirname-filename-esm';

const __dirname = dirname(import.meta);

/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */
export default function (eleventyConfig) {
    console.log("Custom Eleventy config file");

    // Configure Eleventy options to your liking
    return {
        dir: {
            input: ".", // Does not work with programmatic usage
            // input: __dirname,
            output: "_site",
        },
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
};
