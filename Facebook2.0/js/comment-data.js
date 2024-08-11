const urlapi = "http://localhost:8080/comment";



async function createComment2(postId, commentInputId) {


  const commentInputEl = document.getElementById(commentInputId);
  const uId = localStorage.getItem("userId");

  const commentInput = commentInputEl.value;
  // console.log(commentInputEl.value, postId, id);



  //Submit

    const url = (urlapi + '?uId=' + uId + '&postId=' + postId + '&commentInput=' + commentInput);
    console.log(url);

    const result = await fetch(url);

    if (result.ok) {

      setTimeout(function() {
        // Redirect to index.html page
        window.location.href = "index.html";
    }, 1000);

  }
}















// for(var i=1; i<=5; ++i){
// var "q"+i=document.getElementById("q"+i).value;
// }