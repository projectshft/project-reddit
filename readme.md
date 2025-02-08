# Simple Post & Comment App

This project provides a basic structure for creating, displaying, and managing posts and comments dynamically using JavaScript.

## How to Run

Code is split into different files and uses import and export statements. The code uses `<script type="module">` and therefore requires a server to run. If you try to access directly it will not work because CORS will block the module imports.

- Clone the repo
- Use live server extension for VSCode
- OR use node to run a server with `npx http-server .`

## Features

- Add new posts with a title, author, and text
- Delete posts
- Show/hide comments for each post
- Add comments to posts

## How It Works

- Clicking **Add Post** creates a new post from the input fields.
- Clicking **Delete** removes a post.
- Clicking **Show Comments** toggles visibility of the comments section.
- Clicking **Add Comment** adds a comment to the corresponding post.

## File Structure

- `index.html` - Main HTML file
- `script.js` - Handles post and comment interactions
- `commentEl.js` - Template for comment elements
- `postEl.js` - Template for post elements
