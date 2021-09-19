/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const translationMap = {
    'ja': {
        'gui.extension.tplinkSmarthomeLocal.description': 'Xcratch 拡張の例'
    },
    'ja-Hira': {
        'gui.extension.tplinkSmarthomeLocal.description': 'Xcratch (えくすくらっち)かくちょうのれい'
    }
};

const entry = {
    name: 'TP-Link Smarthome Local',
    extensionId: 'tplinkSmarthomeLocal',
    extensionURL: 'https://yokobond.github.io/xcx-tplink-smarthome-local/dist/tplinkSmarthomeLocal.mjs',
    collaborator: 'yokobond',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'an extension for Xcratch',
            description: 'Description for this extension',
            id: 'gui.extension.tplinkSmarthomeLocal.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://yokobond.github.io/xcx-tplink-smarthome-local/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
