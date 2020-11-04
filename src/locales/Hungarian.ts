import { LanguageBase } from '../models/languageBase';
import { language } from '../decorators/languageDecorator';

@language
export default class Hungarian implements LanguageBase {
    identifier = 'hu';
    pageTitle = 'Dynamiter Game';
}
