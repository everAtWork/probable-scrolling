const postsCont = document.querySelector('#posts-container');
const loading = document.querySelector('.loader');
const filter = document.querySelector('#filter');


let limit = 3;
let page = 1;


async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}


async function showPosts() {
    const posts = await getPosts();
    posts.forEach(post => {
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
        </div>`
        postsCont.appendChild(postEl);
    });
}

showPosts();