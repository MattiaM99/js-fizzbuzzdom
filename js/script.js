const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  row.append(box);
  console.log(box);
  
  if (!(i % 3) && !(i % 5)) {
    box.classList.add('per3-5');
    box.innerHTML = ('FizzBuzz');
  }     
  else if (!(i % 3)) {
    box.classList.add('per3');
    box.innerHTML = ('Fizz');

  } else if (!(i % 5)) {
    box.classList.add('per5');
    box.innerHTML = ('Buzz');
  } 
  console.log(i);
};



