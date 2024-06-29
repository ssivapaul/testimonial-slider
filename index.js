const testimonials = [
  {
    name: "Citizen.m",
    photoUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I was struggling to create a professional resume until I found this resume builder. It was so easy to use and helped me craft a standout resume that landed me multiple job interviews.",
  },
  {
    name: "Smith.J",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I have been using web cam for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
  },
  {
    name: "Paul.H",
    photoUrl:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I love Harley Davidson motor bike! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.textContent = text;
  userNameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 3000);
}
