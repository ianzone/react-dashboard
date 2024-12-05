export function getLocale() {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
  const locale = new Intl.Locale(navigator.language);
}
