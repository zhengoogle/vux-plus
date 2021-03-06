export default {
  bind: function (el, { value }) {
    let onClickOutside = value
    el.handler = function (e) {
      if (el && !el.contains(e.target)) {
        onClickOutside(e)
      }
    }
    document.addEventListener('click', el.handler, false)
  },
  unbind: function (el) {
    document.removeEventListener('click', el.handler, false)
    el.handler = null
  }
}
