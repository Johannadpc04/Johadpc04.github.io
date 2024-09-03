
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const userList = document.getElementById('lista-usuarios');
    const buscarBtn = document.getElementById('buscar-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userId = document.getElementById('usuario-id').value;
        const user = {
            usuario: document.getElementById('usuario').value,
            clave: document.getElementById('clave').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            fechaNacimiento: document.getElementById('fecha-nacimiento').value
        };

        if (userId) {
            await fetch(`/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
        } else {
            await fetch('/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
        }
        form.reset();
        fetchUsers();
    });

    buscarBtn.addEventListener('click', fetchUsers);

    async function fetchUsers() {
        const response = await fetch('/users');
        const users = await response.json();
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.nombre} ${user.apellido} - ${user.usuario}`;
            li.addEventListener('click', () => fillForm(user));
            userList.appendChild(li);
        });
    }

    async function fillForm(user) {
        document.getElementById('usuario-id').value = user.userId;
        document.getElementById('usuario').value = user.usuario;
        document.getElementById('clave').value = user.clave;
        document.getElementById('nombre').value = user.nombre;
        document.getElementById('apellido').value = user.apellido;
        document.getElementById('fecha-nacimiento').value = user.fechaNacimiento;
    }

    fetchUsers();
});


