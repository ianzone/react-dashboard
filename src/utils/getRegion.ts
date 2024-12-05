// 返回 ISO 3166 两字符地区代码
export function getRegion() {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
  const locale = new Intl.Locale(navigator.language);

  return locale.region || 'US';
}

import { iso1A2Code } from '@rapideditor/country-coder';
import { getCoords } from 'src/utils';
export async function getRegionByGeo() {
  const coords = await getCoords();
  return iso1A2Code([coords.longitude, coords.latitude]) || 'US';
}
