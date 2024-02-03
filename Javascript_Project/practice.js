// function changeColorOfHeading() {
//   document.getElementById("MainHeading").textContent =
//     "Hi, Staring new project";
//   document.getElementById("MainHeading").style.color = "Blue";
// }

function getItem() {
  setTimeout(() => {
    console.log("Venu");
  }, 1000);
}

let b = () => {
  console.log("Ketha");
};

async function myfunction() {
  let getUser = await getItem();
  b();
  // new Promise((resolve, reject) => {
  //   setTimeout(function () {
  //     resolve("Done");
  //   }, 5000);
  // }).then((value) => console.log(value));
}

myfunction();
