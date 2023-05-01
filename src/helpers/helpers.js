export const sort = (a, b) => {
  const titleA = a?.title?.toLowerCase() || a.meta?.title?.toLowerCase();
  const titleB = b?.title?.toLowerCase() || b.meta?.title?.toLowerCase();

  if (titleA < titleB) {
    return -1;
  }

  if (titleA > titleB) {
    return 1;
  }

  return 0;
};

export const fmtTime = (date) => {
  const jsDate = new Date(date);
  return `${jsDate.getDate()}.${jsDate.getMonth() + 1}.${jsDate.getFullYear()}`;
};
