/*
task description: Напилить код функции modificator, такой, чтобы в результате работы кода в консоль было выведено число символов в коде функции sampleFunc
*/

function sampleFunc() {
    console.info(`Symbols in my code: ${arguments.callee + 0}`)
}

function modificator(func) {
    func.valueOf = function() {
        return func.toString().length
    }
}

modificator(sampleFunc)

sampleFunc()
