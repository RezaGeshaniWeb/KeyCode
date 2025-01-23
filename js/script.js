const part1 = document.querySelector('#part1')
const part2 = document.querySelector('#part2')
const keyCodeSpan = document.querySelector('#key-code-span')
const keyCode = document.querySelector('#key-code')
const keyCodeKey = document.querySelector('#key-code-key')
const keyCodeWhich = document.querySelector('#key-code-which')
const keyCodeCode = document.querySelector('#key-code-code')


window.addEventListener('keyup', e => {
    part1.classList.add('hidden')
    part2.classList.remove('hidden')
    let selectedKey = {
        keyCode: e.keyCode,
        key: e.key,
        which: e.which,
        code: e.code
    }
    keyCodeSpan.innerText = selectedKey.keyCode
    keyCode.innerText = selectedKey.keyCode
    keyCodeKey.innerText = selectedKey.key
    keyCodeCode.innerText = selectedKey.code
    keyCodeWhich.innerText = selectedKey.which
})