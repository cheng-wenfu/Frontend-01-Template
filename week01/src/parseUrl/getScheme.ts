
function getScheme(url: string) {
  const regexp = /^[A-Za-z]+[A-Za-z0-9+-.]*:/
  const result = regexp.exec(url)
  if (!result){
    return ''
  }
  return result;
}

export default getScheme;
