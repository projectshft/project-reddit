const commentFormHtml = `
  <form id="comment-form" class="comment-edit-form" onsubmit="event.preventDefault();">
    <h4>Add a comment</h4>

    <div class="form-group">
      <input id="name" type="text"
        class="form-control"
        placeholder="Name"></input>
    </div>

    <div class="form-group">
      <textarea id="message" type="text"
      class="form-control"
      placeholder="Message"></textarea>
    </div>

  <button id="submit-comment" class="btn btn-primary">Submit Comment</button>
</form>`;

const editFormHtml = `
  <form class="comment-edit-form" onsubmit="event.preventDefault();">
    <h4>Edit post</h4>

    <div class="form-group">
      <input id="name" type="text"
        class="form-control"
        placeholder="Name"></input>
    </div>

    <div class="form-group">
      <textarea id="message" type="text"
      class="form-control"
      placeholder="Message"></textarea>
    </div>

  <button id="submit-edit" class="btn btn-primary">Submit Edit</button>
</form>`;