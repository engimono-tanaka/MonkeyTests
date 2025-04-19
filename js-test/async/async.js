async function a() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const d = await res.json();

    const ul = document.getElementById("ul");
    d.forEach(element => {
      const li = document.createElement("li");
      li.textContent = element.title;
      ul.appendChild(li);
    });
  } catch (e){
    console.error(e);
  }
}
a();