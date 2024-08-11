const postInput = document.getElementById('postText');
        const postButton = document.getElementById('postButton');
        const postList = document.getElementById('posts');
        const posts = [];

        postButton.addEventListener('click', createPost);

        postInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                createPost();
            }
        });

        function createPost() {
            const postText = postInput.value.trim();
            if (postText) {
                const postItem = document.createElement('div');
                postItem.className = 'bg-gray-700 bg-opacity-80 rounded p-4 shadow-2xl my-6';
                postItem.innerHTML = `
                    <div class="flex items-center">
                      <img class="w-10 h-10 object-cover object-center rounded-full" src="https://i.ibb.co/Tt0zcV6/avt2.png" alt="Upic">
                      <p class="pl-4 font-bold text-gray-400">Shifat Shuvo</p>
                    </div>
                    <p class="text-gray-200 my-4 pl-2 break-words">${postText}</p>
                    <p class="py-2 pl-2 text-gray-400" id="likeCount">73</p>
                    <hr>
                    <div class="flex justify-between my-1">
                        <button class="hover:bg-blue-500 hover:text-white text-gray-300 py-1 px-3 rounded" id="likeButton">
                          <i class="fas fa-thumbs-up pr-2"></i>Like
                        </button>
                        
                        <button class="hover:bg-blue-500 hover:text-white text-gray-300 py-1 px-3 rounded cursor-pointer">
                          <i class="fas fa-comment pr-2"></i>Comment
                        </button>
                    </div>
                    <hr>
                `;
                postList.appendChild(postItem);
                postInput.value = '';
                posts.push({ text: postText, likes: 0, isLiked: false });
                const likeButton = postItem.querySelector('#likeButton');
                const likeCount = postItem.querySelector('#likeCount');

                likeButton.addEventListener('click', () => {
                    const postIndex = posts.length - 1;
                    if (!posts[postIndex].isLiked) {
                        posts[postIndex].likes++;
                        likeCount.textContent = posts[postIndex].likes;
                        posts[postIndex].isLiked = true;
                        likeButton.classList.add('text-gray-500');
                    } else {
                        posts[postIndex].likes--;
                        likeCount.textContent = posts[postIndex].likes;
                        posts[postIndex].isLiked = false;
                        likeButton.classList.remove('text-gray-500');
                    }
                  // Log the likes array to the console
                  console.log(posts);
                });
                //Display full array after post
                // console.log(posts);

                // const data = posts[0];
                // return (data);
                
                // // const likesValue = data['likes'];
                // const textValue = data.text;
                // console.log(textValue);
            }
            
        }
        // console.log(createPost());









// const postInput = document.getElementById('postInput');
//         const postButton = document.getElementById('postButton');
//         const postList = document.getElementById('postList');
//         const posts = [];

//         postButton.addEventListener('click', createPost);

//         postInput.addEventListener('keyup', function (event) {
//             if (event.key === 'Enter') {
//                 createPost();
//             }
//         });

//         function createPost() {
//             const postText = postInput.value.trim();
//             if (postText) {
//                 const postItem = document.createElement('div');
//                 postItem.className = 'bg-gray-200 p-4 rounded mt-4';
//                 postItem.innerHTML = `
//                 <div class="flex items-center pt-1 pb-2">
//                   <p class="bg-blue-500 w-8 h-8 mr-2 rounded-full"></p>
//                   <p class="font-bold">Shifat Shuvo</p>
//                 </div>
//                     <p>${postText}</p>
//                     <div class="flex justify-between mt-2">
//                         <button class="text-blue-500">Like</button>
//                         <button class="text-gray-500">Comment</button>
//                     </div>
//                 `;
//                 postList.appendChild(postItem);
//                 postInput.value = '';
//                 posts.push(postText);
//             }
//           // Log the likes array to the console
//             console.log(posts);
//         }






// function createPost() {
//   const postText = document.getElementById('postText').value;
//   if (postText) {
//       const postsContainer = document.getElementById('posts');

//       const postElement = document.createElement('div');
//       postElement.className = 'bg-gray-700 bg-opacity-80 rounded p-4 shadow-2xl my-6';

//       const postHeader = document.createElement('div');
//       postHeader.className = 'flex items-center';
    
//       const profilePicture = document.createElement('div');
//       profilePicture.className = 'w-10 h-10 bg-blue-600 rounded-full mr-4'; // Add a sample profile picture 

//       const postUser = document.createElement('div');
//       postUser.className = 'font-bold text-gray-100';
//       postUser.textContent = 'Shifat Shuvo'; // Replace with the actual user name

//       const postTextElement = document.createElement('div');
//       postTextElement.className = 'break-words text-gray-200 pl-2 py-6';
//       postTextElement.textContent = postText;

    
//       const postActions = document.createElement('div');
//       postActions.className = 'flex items-end';

//       const likeButton = document.createElement('button');
//       likeButton.className = 'hover:bg-blue-500 hover:text-white text-gray-300 py-1 px-3 rounded cursor-pointer';
//       likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';

//       const commentButton = document.createElement('button');
//       commentButton.className = 'hover:bg-blue-500 hover:text-white text-gray-300 py-1 px-3 rounded cursor-pointer ml-2';
//       commentButton.innerHTML = '<i class="fas fa-comment"></i> Comment';


//       const hrElement = document.createElement('div');
//       hrElement.className = 'mb-1 border-b-2 border-gray-400';
//       // hrElement.innerHTML = "";

//       const hrElement2 = document.createElement('div');
//       hrElement2.className = 'mt-1 border-b-2 border-gray-400';

//       postActions.appendChild(likeButton);
//       postActions.appendChild(commentButton);

//       postHeader.appendChild(profilePicture);
//       postHeader.appendChild(postUser);
//       postElement.appendChild(postHeader);
//       postElement.appendChild(postTextElement);
//       postElement.appendChild(hrElement);
//       postElement.appendChild(postActions);
//       postElement.appendChild(hrElement2);
//       postsContainer.appendChild(postElement);

//       const c = document.getElementById('postText').value;
//       console.log(c);

//       document.getElementById('postText').value = '';
//   }
// }
