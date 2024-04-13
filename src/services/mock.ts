function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export const mock = {
  enable: true,
  call: async (res?: any, err?: any) => {
    await sleep(1);
    if (err) {
      throw new Error(err);
    }
    return res;
  },
};
