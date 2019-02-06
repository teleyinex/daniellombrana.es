function getUrl(key, locale) {
  const tmp = key.split('-')
  const rest = tmp.slice(3)
  let href = `${rest.join('-')}`
  href = `/projects/${href}`
  if (locale === 'es') {
    href = `/es${href}`
  }
  return href
}
export { getUrl }
