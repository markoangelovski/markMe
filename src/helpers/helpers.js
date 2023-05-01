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
