const resultt = localStorage.getItem("isSignIn");

if(resultt) {
  getAndDisplayPosts();
  getAndDisplaycom();
} 
if(!resultt) {
  location.href = "sign-in.html?redirect_url=http://127.0.0.1:5500/index.html";
}


// posts get display Start
async function getAndDisplayPosts() {

  const Api = "http://localhost:8080/posts";

  const Url = (Api);

  const response = await fetch(Url);
  const posts = await response.json();
  // console.log(posts);

  displayPosts(posts);
  
}


// posts comments Start

async function getAndDisplaycom() {

  const Api = "http://localhost:8080/posts";

  const Url = (Api);

  const response = await fetch(Url);
  const comments = await response.json();
  // console.log(posts);

  getCommentText(comments);
  
}

function getCommentText(comments) {
  var commentHtml = '';
  for (comment of comments) {
    commentHtml +=
    `
    <div class="flex -items-center my-4 space-x-2">
      <img class="w-8 h-8 rounded-full object-cover object-center" src="${comment.imgUrl}" alt="">
      <div class="bg-gray-600 py-1 px-3 rounded-md">
        <p>
          <a class="font-bold text-sm text-gray-200 hover:text-blue-400" title="View Profile" href="user-profile.html?id=${comment.userId}">
            ${comment.firstName} ${comment.lastName}
          </a>
        </p>
        <p class="inline-block text-sm">${comment.comText}</p>
      </div>
    </div>
    `
  }
  return commentHtml;
}

// posts comments End



function displayPosts(posts) {
  const usersContainerEl = document.getElementsByClassName("postsContainer");
  var i = 0;
  // const p = posts;
  // const postss = p.reverse();
  // console.log(posts)

  var displayHtml = '';
  for (post of posts) {
    i++;
    displayHtml +=
    `
    <div class="bg-gray-700 bg-opacity-80 rounded p-4 shadow-2xl my-6">
      <div class="flex items-center">
        <img class="w-10 h-10 object-cover object-center rounded-full" src="${post.user.imgUrl}" alt="Upic">
        <div class="pl-4">
          <p class="font-bold text-gray-300 hover:text-blue-500">
            <a title="View Profile"  href="user-profile.html?id=${post.user.id}">
              ${post.user.firstName} ${post.user.lastName == 'null'? '':'' || post.user.lastName != null? post.user.lastName: ''}
            </a>
          </p>
          <p class="text-gray-300 text-xs font-semibold">12 Nov</p>
        </div>
      </div>
      <p class="text-gray-200 my-4 pl-2 break-words">${post.postText}</p>
      <p class="py-2 pl-2 text-gray-300 font-semibold" id="likeCount">73</p>
      <hr class="h-px bg-gray-500 border-0 dark:bg-gray-400">
      <div class="flex justify-between my-1">
        <button class="hover:bg-blue-500 hover:text-white text-gray-300 py-1 px-3 rounded" id="likeButton">
          <i class="fas fa-thumbs-up pr-2"></i>Like
        </button>
                    
        <button class="commentBtn hover:bg-blue-500 hover:text-white text-gray-300 py-1 px-3 rounded cursor-pointer">
          <i class="fas fa-comment pr-2"></i>Comment
        </button>
      </div>
      <hr class="h-px bg-gray-500 border-0 dark:bg-gray-400">
      
            <div class="mt-2 rounded-md">
              <div class="-bg-gray-700 bg-opacity-90 w-full pt-1 py--4 px--4 rounded-md">
                <div class="-bg-gray-400 ml-2 my-2 text-gray-200">
                  ${getCommentText(post.comments)}
                </div>
                <div class="mb-2 px-2">
                  <input id="commentInput${i}" class="w-full commentText bg-gray-600 h-10 pl-2 border rounded text-gray-50 border-none" placeholder="Comment something..."></input>
                </div>
                <div class="flex items-center justify-between pl-2">
                  <button onclick="createComment2(${post.postId}, 'commentInput${i}')" class="flex items-center text-sm font-bold bg-gray-600 text-gray-300 py-2 px-4 rounded hover:bg-blue-700">
                    <p>Comment</p>
                    <i class="fa-solid fa-paper-plane ml-1 text-sm"></i>
                  </button>
                </div>
                <p id="textError"class="hidden textError text-red-800 bg-red-100 rounded mt-1 py-1 px-2">comment cannot be empty!!</p>
                
              </div>
            </div>
    </div>`
  }

  usersContainerEl[0].innerHTML = displayHtml;
}
// posts get display End