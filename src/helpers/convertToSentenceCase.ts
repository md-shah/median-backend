export default function convertStringToSentenceCase(
  stringToBeConverted: string,
) {
  return stringToBeConverted.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}
