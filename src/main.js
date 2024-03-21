const formImg = document.getElementById("formImg");

formImg.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formImg)

    const res = await fetch("http://svr.espaciosydisenos.com:3001/upload",{
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
