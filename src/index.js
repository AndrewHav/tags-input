'use strict';

const $tagsInput1 = document.getElementById('tags-input1');
const $tagsList1 = document.getElementById('tags-list1');
const tagsArr1 = ['1', 'super tag'];
const $tagsInput2 = document.getElementById('tags-input2');
const $tagsList2 = document.getElementById('tags-list2');
const tagsArr2 = [];

//if (localStorage.getItem("tagsArr2") === null) { 
//  localStorage.setItem("tagsArr2", "");
//}
//else {
//tagsArr2 =  localStorage.getItem("tagsArr2").split(', ');
//}

$tagsInput1.addEventListener('keyup', ({key, target}) => {
  if (key === 'Enter' && target.value.trim()) {
    const $el = createTagElement(target.value);
    const isElementExist = tagsArr1.includes(target.value);

    if (!isElementExist) {
      $tagsList1.appendChild($el);
      tagsArr1.push(target.value);
      target.value = '';
    }
  }
});

$tagsInput2.addEventListener('keyup', ({key, target}) => {
  if (key === 'Enter' && target.value.trim()) {
    const $el = createTagElement(target.value);
    const isElementExist = tagsArr2.includes(target.value);
    if (!isElementExist) {
      $tagsList2.appendChild($el);
      tagsArr2.push(target.value);
      //localStorage.setItem("tagsArr2", tagsArr2.join(', ') + target.value );
      target.value = '';
    }
  }
});

$tagsList1.addEventListener('click', event => {
  const {target} = event;
  const isRemoveBtn = target.classList.contains('remove-btn');
  const $foo = target.parentElement.parentElement;
  const $tag = target.parentElement;

  if (isRemoveBtn) {
    $foo.removeChild($tag);
  }
});

$tagsList2.addEventListener('click', event => {
  const {target} = event;
  const isRemoveBtn = target.classList.contains('remove-btn');
  const $foo = target.parentElement.parentElement;
  const $tag = target.parentElement;

  if (isRemoveBtn) {
    $foo.removeChild($tag);
    //tagsArr2.splice(target.value);
  }
});

const createTagElement = content => {
  const $li = document.createElement('li');

  $li.className = 'tags-list-item';
  $li.innerHTML = `
    <span class="tag-name">${content}</span>
    <span class="remove-btn">x</span>
  `;

  return $li;
};

const init = () => {
  tagsArr1.forEach(tagValue => {
    const $el = createTagElement(tagValue);

    $tagsList1.appendChild($el);
  });
  tagsArr2.forEach(tagValue => {
    const $el = createTagElement(tagValue);

    $tagsList2.appendChild($el);
  });
};

init();
