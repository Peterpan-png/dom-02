window.JQuery = function(selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    //api 可以操做elements
    return {
        oldAPi: selectorOrArray.oldAPi,
        //闭包,函数访问外部链接
        addClass: function(className) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },

        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldAPi = this //this就是旧api
            const newApi = JQuery(array)
            return newApi

        },

        end() {
            return this.oldAPi //this就是新的API
        }
    }
}