export const modifyString = (string) => {
  return string.split(/(?=[A-Z])/).map(function(p) {
    return p.charAt(0).toUpperCase() + p.slice(1);
  }).join(' ');
}
