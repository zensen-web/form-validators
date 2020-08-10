export function extents (ext1, ext2) {
  return {
    min: ext1 < ext2 ? ext1 : ext2,
    max: ext1 > ext2 ? ext1 : ext2,
  }
}

export function getValueByPath (obj, keyPath) {
  return keyPath.reduce((obj, key) =>
    (typeof obj !== 'undefined' ? obj[key] : undefined), obj)
}
