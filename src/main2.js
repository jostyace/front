const imageContainer = document.getElementById('imageContainer');
async function cargarImagenes() {
    try {
      const response = await fetch('http://localhost:3001/api/imagenes');
      if (!response.ok) {
        throw new Error('Error al cargar las imágenes');
      }
      const data = await response.json();
      imageContainer.innerHTML = '';
      data.forEach(imagen => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-container');
        const image = document.createElement('img');
        image.src = 'http://localhost:3001/api/imagenes/' +imagen.file;
        image.classList.add('image');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
        eliminarImagen(imagen.file);
        });
        imageDiv.appendChild(image);
        imageDiv.appendChild(deleteButton);
        imageContainer.appendChild(imageDiv);
      });
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
    }
  }
   
async function eliminarImagen(id) {
   fetch('http://localhost:3001/api/imagenes/'+id, {
    method: 'DELETE'
  })
  cargarImagenes(); 
  }

cargarImagenes();