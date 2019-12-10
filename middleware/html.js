export default function({ route, params, redirect }) {
  if (
    Object.prototype.hasOwnProperty.call(params, 'slug') &&
    params.slug.indexOf('.html') >= 0
  ) {
    return redirect(route.fullPath.replace('.html', ''))
  }
}
