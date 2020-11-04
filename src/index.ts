import 'reflect-metadata';
import { container } from 'tsyringe';

import './index.scss';
import './locales/Hungarian';
import constants from './models/constants';
import translate from './services/translate';
import Translator from './services/translator';

const params = new URLSearchParams(window.location.search);
const language = params.get('lang') || 'hu';

console.log(language);

container.register(constants.SelectedLanguage, { useValue: language });
container.register(constants.FallbackLanguage, { useValue: 'hu' });

const translator = container.resolve(Translator);

window.addEventListener('load', () => {
    translate(translator, document.body);
});
