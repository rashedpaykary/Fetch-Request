const container = document.querySelector(".container");

function renderData(data) {
  data.forEach((item) => {
    const information = document.createElement("div");
    information.className = "information";

    const emailDiv = document.createElement("div");
    emailDiv.textContent = item.email;
    const userDiv = document.createElement("div");
    userDiv.textContent = item.name;
    const commentDiv = document.createElement("div");
    commentDiv.textContent = item.body;

    information.append(emailDiv, userDiv, commentDiv);
    container.append(information);
  });
}

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((res) => {
//     //   console.log(res.json());
//     //   json is promise
//     // جیسان خشک و خالی خودش یه پرامیسه
//     res.json().then((res) => {
//       renderData(res);
//     });
//   })
//   .catch((error) => {
//     console.log("error");
//   });

function fetchRequest(url, callback) {
  fetch(url)
    .then((res) => {
      //   console.log(res.json());
      //   json is promise
      // جیسان خشک و خالی خودش یه پرامیسه
      res.json().then((res) => {
        callback(res);
      });
    })
    .catch((error) => {
      alert("salam");
    });
}

fetchRequest("https://jsonplaceholder.typicode.com/comments", renderData);
