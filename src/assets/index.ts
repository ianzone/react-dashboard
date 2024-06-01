// https://vitejs.dev/guide/assets.html

import config from 'src/configs';

export function getUrl(file: string) {
  return new URL(`./${config.brand}/${file}`, import.meta.url).href;
}
