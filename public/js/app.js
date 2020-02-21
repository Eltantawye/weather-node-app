console.log("hello from client side");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message = document.querySelector(".text");
weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  console.log("TESTing!", location);
  message.innerHTML = `<p>Loaaaaading ...</p>`;
  fetch(`http://localhost:3000/weather?address=${location}`).then(response =>
    response.json().then(data => {
      console.log(data);
      if (data.err) {
        console.log(data.err);
        message.innerHTML = `<p>${data.err}</p>`;
      } else {
        console.log(data.location);
        console.log(data.message);
        message.innerHTML = `<p>${data.location}</p>
        <p>${data.message} </p>`;
      }
    })
  );
});
