export default function({ route, params, redirect }) {
  if (route.params.hasOwnProperty('slug') && route.params.slug.indexOf('.html') >= 0) {
    return redirect(route.fullPath.replace('.html', ''))
  }
}
