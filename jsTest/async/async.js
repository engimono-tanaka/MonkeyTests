async function a() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const d =await res.json();

    d.forEach(element => {
      const t = element.title;
      document.write(t + "<br>");
    });
  } catch (e){
    console.error(e);
  }
}
a();