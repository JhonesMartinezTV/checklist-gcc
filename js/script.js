//const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//checkboxes.forEach((checkbox) => {
//  checkbox.addEventListener('click', () => {
//    if (checkbox.checked) {
//      checkbox.parentNode.classList.add('concluido');
//    } else {
//      checkbox.parentNode.classList.remove('concluido');
//    }
//  });
//});

const marcarTodos = document.querySelector('#marcar-todos');
marcarTodos.addEventListener('click', () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
    checkbox.parentNode.classList.add('concluido');
  });
});


const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const td = checkbox.parentNode;
    if (checkbox.checked) {
      td.classList.add('concluido');
    } else {
      td.classList.remove('concluido');
    }
  });
});

const btnSelecionarTodos = document.querySelector('#btn-selecionar-todos');
btnSelecionarTodos.addEventListener('click', function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
  });
});

