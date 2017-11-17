const heading = document.querySelector('.jump');

heading.innerHTML = [...heading.textContent]
  .map(letter => `<span>${letter}</span>`)
  .join('');
