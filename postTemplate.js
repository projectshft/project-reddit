export const postTemplate = [
  {
    type: 'div',
    attributes: { class: 'card mb-3' },
    children: [
      {
        type: 'div',
        attributes: { class: 'card-body' },
        children: [
          {
            type: 'h5',
            attributes: { class: 'card-title' },
          },
          {
            type: 'h6',
            attributes: { class: 'card-subtitle mb-2 text-body-secondary' },
          },
          { type: 'p', attributes: { class: 'card-text' } },
          {
            type: 'a',
            attributes: {
              class: 'card-link delete-btn',
              style: 'cursor: pointer',
            },
            children: ['Delete Post'],
          },
          {
            type: 'a',
            attributes: {
              class: 'card-link show-comments',
              style: 'cursor: pointer',
            },
            children: ['Show Comments'],
          },
        ],
      },
    ],
  },
];
