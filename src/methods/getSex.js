import {lang} from "../lang/lang.js";

export const getSex = (digit, userLang = 'pl') => {
  if (digit % 2 === 0) {
    return lang[userLang].verification.gender.female
  }

  return lang[userLang].verification.gender.male
}