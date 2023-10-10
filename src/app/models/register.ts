export class Register {
    username: string;
    email: string;
    nombre: string;
    password: string;
    apellido: string;
    rol: string;

    constructor(nombre: string, username: string, email: string, password: string, rol: string) {
        this.nombre = nombre;
        this.username = username;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}
