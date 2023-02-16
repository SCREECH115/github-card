const form = document.getElementById("form");
const mainCard = document.getElementById("card");

const userAvatar = document.getElementById("avatar");
const userNameDOM = document.getElementById("username");
const userLogin = document.getElementById("userProfile");
const userBio = document.getElementById("userBio");
const followers = document.getElementById("userFollowers");
const following = document.getElementById("userFollowing");
const repos = document.getElementById("userRepos");
const profile = document.getElementById("profile");

const search = document.getElementById("searchBox");

const getUser = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const resData = await response.json();

  createCard(resData);
};

const createCard = (user) => {
  userAvatar.src = user.avatar_url;
  userNameDOM.innerHTML = user.name;
  userLogin.innerHTML = `@${user.login}`;
  userBio.innerHTML = user.bio;
  followers.innerHTML = user.followers;
  following.innerHTML = user.following;
  repos.innerHTML = user.public_repos;
  profile.href = user.html_url;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});

//
//   /* <div class="container">
// <div class="avatar" id="avatar">
//   <img src="avatar.png" alt="" />
// </div>
// <div class="username">
//   <p id="username">SCREECH115</p>
// </div>
// <div class="user-profile">
//   <p id="userProfile">@SCREECH115</p>
// </div>
// <div class="user-bio">
//   <p id="userBio">Hi, I'm SCREECH115</p>
// </div>
// <div class="stats">
//   <div class="stat">
//     <p>Followers</p>
//     <p id="userFollowers">0</p>
//   </div>
//   <div class="stat">
//     <p>Following</p>
//     <p id="userFollowing">0</p>
//   </div>
//   <div class="stat">
//     <p>Repos</p>
//     <p id="userRepos">0</p>
//   </div>
// </div>
// </div> */
//
//
//   /* <div class="container">
// <div class="avatar" id="avatar">
//   <img src="avatar.png" alt="" />
// </div>
// <div class="username">
//   <p id="username">SCREECH115</p>
// </div>
// <div class="user-profile">
//   <p id="userProfile">@SCREECH115</p>
// </div>
// <div class="user-bio">
//   <p id="userBio">Hi, I'm SCREECH115</p>
// </div>
// <div class="stats">
//   <div class="stat">
//     <p>Followers</p>
//     <p id="userFollowers">0</p>
//   </div>
//   <div class="stat">
//     <p>Following</p>
//     <p id="userFollowing">0</p>
//   </div>
//   <div class="stat">
//     <p>Repos</p>
//     <p id="userRepos">0</p>
//   </div>
// </div>
// </div> */
//
