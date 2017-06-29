function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// function nestedTarget() {
//   return document.querySelector('#nested').querySelector('.target')
// }

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < ranked.length; i++) {
    let children = ranked[i].children

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  const array = document.querySelector('#grand-node').querySelectorAll('*')
  return array[array.length - 1]
}
