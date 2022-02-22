export const getRandomHexColor = () => {
  const decimalWhite = 16777215;
  const code = Math.floor(Math.random() * decimalWhite).toString(16);
  return `#${code}`;
};
