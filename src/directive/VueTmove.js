const Tmove = {}
Tmove.install = function (Vue, options) {
    Vue.directive('t-move', {
        bind: function (el, binding) {
            let touchStartX, touchStartY, touchEndX, touchEndY;
            el.ontouchstart = (e) => {
                touchStartX = e.changedTouches[0].pageX;
                touchStartY = e.changedTouches[0].pageY;
            }
            el.ontouchend = (e) => {
                touchEndX = e.changedTouches[0].pageX;
                touchEndY = e.changedTouches[0].pageY;
                if (Math.abs(touchStartX - touchEndX) < Math.abs(touchStartY - touchEndY) && touchEndY > touchStartY) {
                    binding.value()
                }
            }
        },
        unbind: function (el) {
            el.ontouchstart = null
            el.ontouchend = null
        }
    })
}
export default Tmove