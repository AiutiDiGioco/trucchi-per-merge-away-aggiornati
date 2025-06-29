/**
 * colorutils - Basic Color Manipulation Functions
 * Author: AiutiDiGioco
 * License: Custom
 */

const colorutils = {
    /**
     * Generates a random hex color code.
     * @returns {string}
     */
    randomHex() {
        const hex = Math.floor(Math.random() * 0xffffff).toString(16);
        return `#${hex.padStart(6, '0')}`;
    },

    /**
     * Converts an RGB color to hex format.
     * @param {number} r - Red value (0-255).
     * @param {number} g - Green value (0-255).
     * @param {number} b - Blue value (0-255).
     * @returns {string}
     */
    rgbToHex(r, g, b) {
        if (
            ![r, g, b].every(
                (val) => typeof val === 'number' && val >= 0 && val <= 255 && Number.isInteger(val)
            )
        ) {
            console.error('[colorutils] Invalid RGB values.');
            return '';
        }
        return (
            '#' +
            [r, g, b]
                .map((val) => val.toString(16).padStart(2, '0'))
                .join('')
        );
    },

    /**
     * Lightens a hex color by a given percentage.
     * @param {string} hex - The hex color (e.g., "#336699").
     * @param {number} percent - Percentage to lighten (0 to 100).
     * @returns {string}
     */
    lighten(hex, percent) {
        if (typeof hex !== 'string' || !/^#?[0-9A-Fa-f]{6}$/.test(hex) || typeof percent !== 'number') {
            console.error('[colorutils] Invalid parameters.');
            return '';
        }
        hex = hex.replace('#', '');
        const num = parseInt(hex, 16);
        let r = (num >> 16) + Math.round(2.55 * percent);
        let g = ((num >> 8) & 0x00ff) + Math.round(2.55 * percent);
        let b = (num & 0x0000ff) + Math.round(2.55 * percent);

        r = Math.min(255, Math.max(0, r));
        g = Math.min(255, Math.max(0, g));
        b = Math.min(255, Math.max(0, b));

        return colorutils.rgbToHex(r, g, b);
    }
};

// Example usage:
// console.log(colorutils.randomHex());
// console.log(colorutils.rgbToHex(255, 100, 50)); // #ff6432
// console.log(colorutils.lighten('#336699', 20));

module.exports = colorutils;
