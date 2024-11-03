export const capitalize = (text) => {
  const [firstLetter = "", ...otherText] = text;
  return `${firstLetter.toUpperCase()}${otherText.join("")}`;
};
console.log(capitalize("жопа"));
