export const commentTemplate = [
  {
    type: 'form',
    attributes: { class: 'mt-2 d-none needs-validation comment-form' },
    children: [
      {
        type: 'div',
        attributes: { class: 'mb-2' },
        children: [
          {
            type: 'input',
            attributes: {
              type: 'text',
              name: 'name',
              placeholder: 'Name',
              class: 'form-control',
              required: true,
            },
          },
          {
            type: 'div',
            attributes: {
              class: 'invalid-feedback',
            },
            children: ['Please provide a name.'],
          },
          {
            type: 'div',
            attributes: {
              class: 'valid-feedback',
            },
            children: ['Looks good.'],
          },
        ],
      },
      {
        type: 'div',
        attributes: { class: 'mb-2' },
        children: [
          {
            type: 'input',
            attributes: {
              type: 'text',
              name: 'comment',
              placeholder: 'Comment',
              class: 'form-control',
              required: true,
            },
          },
          {
            type: 'div',
            attributes: {
              class: 'invalid-feedback',
            },
            children: ['Please provide a comment.'],
          },
          {
            type: 'div',
            attributes: {
              class: 'valid-feedback',
            },
            children: ['Looks good.'],
          },
        ],
      },
      {
        type: 'button',
        attributes: { class: 'btn btn-primary add-comment' },
        children: ['Add Comment'],
      },
    ],
  },
];
