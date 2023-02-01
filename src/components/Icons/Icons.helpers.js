export const iconUrl = meta => {
  // For some reason Github's icon64 is not working, hence using the standard icon.
  if (/github/gi.test(meta?.url)) return meta.icon;

  if (meta?.icon64) {
    return meta?.icon64;
  } else {
    return meta.icon;
  }
};

export const isIconOk = meta =>
  (typeof meta === "object" && meta.hasOwnProperty("icon64")) ||
  (typeof meta === "object" && meta.hasOwnProperty("icon"));
