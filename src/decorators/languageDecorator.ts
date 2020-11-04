import { container } from 'tsyringe';
import { constructor } from 'tsyringe/dist/typings/types';
import Constants from '../models/constants';
import { LanguageBase } from '../models/languageBase';

export function language<T extends LanguageBase>(target: constructor<T>) {
    container.register(Constants.LanguageType, { useClass: target });
}
