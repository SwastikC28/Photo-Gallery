var pics = document.querySelectorAll('img');
let n = pics.length;
let index = 0;
pics.forEach((element, i) => {
  element.addEventListener('click', function () {
    document.querySelector('.pic').style.backgroundImage = `url('${this.src}')`;
    index = i;
  });
});

let button1 = document.querySelectorAll('button')[0];
let button2 = document.querySelectorAll('button')[1];

button2.addEventListener('click', function () {
  button2.classList.add('click');

  setTimeout(() => {
    button2.classList.remove('click');
  }, 100);
  index = index + 1;
  if (index < n) {
    document.querySelector(
      '.pic'
    ).style.backgroundImage = `url('${pics[index].src}')`;
  } else {
    index = 0;
    document.querySelector(
      '.pic'
    ).style.backgroundImage = `url('${pics[index].src}')`;
  }
});

button1.addEventListener('click', function () {
  button1.classList.add('click');

  setTimeout(() => {
    button1.classList.remove('click');
  }, 100);
  console.log(index);
  if (index > 0) {
    index = index - 1;
    document.querySelector(
      '.pic'
    ).style.backgroundImage = `url('${pics[index].src}')`;
  } else if (index == 0 || index < 0) {
    index = n - 1;
    document.querySelector(
      '.pic'
    ).style.backgroundImage = `url('${pics[index].src}')`;
  }
});
