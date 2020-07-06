const createDate = (distenceDays: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + distenceDays);
  return date;
}

export { createDate }