
export const APP_SWITCH_LANGUAGE = 'APP_SWITCH_LANGUAGE'

export function switchLanguage(language) {
  return {
    type: APP_SWITCH_LANGUAGE,
    language
  }
}
