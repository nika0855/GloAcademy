let money,
  income,
  addExpenses,
  deposit,
  mission,
  period;

  alert('who is who');

  let message = function(e) {
    console.log(e.target);
    e.target.style.color = 'red';
    e.target.style.fontSize = '30vh';
  }

  document.querySelector('.message').addEventListener('click', message);