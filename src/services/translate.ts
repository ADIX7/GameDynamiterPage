import { LanguageBase } from '../models/languageBase';
import Translator from './translator';

export default function translate(translator: Translator, element: Element) {
    var i18nKey = element.getAttribute('i18n');

    if (i18nKey) {
        var text = translator.getText(i18nKey as keyof LanguageBase);

        if (text) {
            element.innerHTML = text;
        } else {
            console.error('No i18n key exists:', i18nKey);
        }
    } else {
        for (let child of element.children) {
            translate(translator, child);
        }
    }
}
