const formulario = document.getElementById('formulario');
const listaUsuarios = document.getElementById('lista-usuarios');

async function guardarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const grado = document.getElementById('grado').value;

    const respuesta = await fetch('/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, apellido, edad, grado })
    });

    if (respuesta.ok) {
        obtenerUsuarios();
    }
}

async function obtenerUsuarios() {
    const respuesta = await fetch('/usuarios');
    const usuarios = await respuesta.json();

    listaUsuarios.innerHTML = '';
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nombre} ${usuario.apellido} - ${usuario.edad} años - ${usuario.grado}`;
        listaUsuarios.appendChild(li);
    });
}

obtenerUsuarios();