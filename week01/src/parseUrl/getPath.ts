function getPath(url: string) {
  const regexp = /\/\/([A-Za-z0-9:.]+)(\/[A-Za-z0-9@*/]+)?|#/
  const result = regexp.exec(url)[2]
  if(!result) {
    return '';
  }
  return result;
}
