const formHtml = `
  <form style="margin-top:30px;" onsubmit="event.preventDefault();">
    <h3>Add a new post</h3>

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

  <button id="submit" class="btn btn-primary">Post</button>
</form>`;