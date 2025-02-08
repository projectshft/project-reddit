import { commentTemplate } from './commentTemplate.js';
import { postTemplate } from './postTemplate.js';
import { buildConst, buildFragment } from './buildMethods.js';

export function addPost(eventTarget, appendTo) {
  const p = buildConst(eventTarget, postTemplate);
  if (p) {
    const { _, obj, el } = p;
    el.querySelector('.card-title').innerText = `${obj.title}`;
    el.querySelector('.card-subtitle').innerText = `Posted by: ${obj.name}`;
    el.querySelector('.card-text').innerText = `${obj.text}`;
    el.querySelector('.card-body').appendChild(buildFragment(commentTemplate));
    appendTo.insertBefore(el, appendTo.firstChild);
  }
}

export function deletePost(eventTarget) {
  eventTarget.closest('.card').remove();
}
