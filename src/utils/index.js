/**
 * Converts string to Blob with text mime-type
 * @param {string} str - text we need to convert into blob
 * @returns {Blob}
 */
export const createBlobFromText = (str) => {
  return new Blob([str], { type: "text/plain;charset=utf-8" });
}
