const formImg = document.getElementById("formImg");

formImg.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formImg)

    const res = await fetch("http://localhost:3001/api/upload",{
        method: "POST",
        body: formData,
    });
    if (res.ok){
    const data = await res.json();
    alert(data.message);

}else{
    alert("Error al subir la imagen");
}
});
