// // Add your code here

function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      document.body.innerHTML += data.id;
      return data;
    })
    .catch((error) => {
      document.body.innerHTML += error.message;
    });
}
submitData("Steve", "steve@steve.com");
