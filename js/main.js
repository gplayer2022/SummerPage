function init() {
  const questionElems = [
    {
      el: document.getElementById('question01'),
      answer: '大宝律令',
    },
    {
      el: document.getElementById('question02'),
      answer: '桓武天皇',
    },
  ];
  for (let i = 0; i < questionElems.length; i++) {
    questionElems[i].el.addEventListener('click', function() {
        questionElems[i].el.textContent = questionElems[i].answer;
    });
  }

  const clearIElem = document.getElementById('clear');
  clearIElem.addEventListener('click', function() {
    for (let i = 0; i < questionElems.length; i++) {
        questionElems[i].el.textContent = '　　　　';
    }
  });
}
window.addEventListener('DOMContentLoaded', init);