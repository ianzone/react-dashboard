import { brand1 } from './brand1';
import { brand2 } from './brand2';
import { preset } from './preset';

function getConfig() {
  const brands = [brand1, brand2];

  for (const brand of brands) {
    if (brand.domains.find((item) => item === window.location.host)) {
      return brand;
    }
  }
  return preset;
}

export default getConfig();
