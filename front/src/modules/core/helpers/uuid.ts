export const uuid = () => {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);

  // Ajustamos la versión (4) y la variante (RFC4122)
  array[6] = (array[6] & 0x0f) | 0x40; // Versión 4
  array[8] = (array[8] & 0x3f) | 0x80; // Variante RFC4122

  // Convierte el array de bytes a formato hexadecimal
  return [...array]
    .map((byte) => {
      return byte.toString(16).padStart(2, "0");
    })
    .join("")
    .replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
};
