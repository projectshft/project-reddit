import { getFormInput } from './formMethods.js';

export function buildConst(eventTarget, template) {
  const formEl = eventTarget.closest('form');
  const obj = getFormInput(formEl);
  if (obj) {
  const el = buildFragment(template);
  return { formEl, obj, el };
  }
}

export function buildFragment(arrayObj) {
  const fr = new DocumentFragment();
  arrayObj.forEach((obj) => {
    fr.appendChild(buildElement(obj));
  });
  return fr;

  function buildElement(obj) {
    const el = document.createElement(obj.type);
    if (obj.attributes) {
      for (const key in obj.attributes) {
        const a = document.createAttribute(key);
        a.value = obj.attributes[key];
        el.setAttributeNode(a);
      }
    }
    if (obj.children) {
      if (typeof obj.children[0] === 'string') {
        const newContent = document.createTextNode(obj.children);
        el.appendChild(newContent);
      } else {
        obj.children.forEach((element) => {
          const child = buildElement(element);
          el.appendChild(child);
        });
      }
    }
    return el;
  }
}