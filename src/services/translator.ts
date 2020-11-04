import { inject, injectAll, singleton } from 'tsyringe';
import constants from '../models/constants';
import { LanguageBase } from '../models/languageBase';

@singleton()
export default class Translator {
    constructor(
        @injectAll(constants.LanguageType)
        private readonly languages: LanguageBase[],
        @inject(constants.SelectedLanguage)
        private readonly selectedLanguage: string,
        @inject(constants.FallbackLanguage)
        private readonly fallbackLanguage: string
    ) {}

    getText(val: keyof LanguageBase) {
        const lang =
            this.languages.find(
                (l) => l.identifier === this.selectedLanguage
            ) ||
            this.languages.find((l) => l.identifier === this.fallbackLanguage);

        return lang[val];
    }
}
