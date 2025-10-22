const os = require('os');
function SistemaOperativo(){
    console.log(os.platform()); // Devuelve el sistema operativo ('win32', 'linux', 'darwin', etc.)
    console.log(os.arch()); // Muestra la arquitectura de la CPU ('x64', 'arm', etc.)
    console.log(os.cpus()); // Devuelve información detallada de cada núcleo del procesador
    console.log(os.hostname()); // Muestra el nombre del equipo
    console.log(os.homedir()); // Devuelve la ruta del directorio del usuario
    console.log(os.tmpdir()); // Ruta de la carpeta temporal del sistema
    console.log(os.uptime()); // Tiempo que lleva encendido el sistema (en segundos)
    console.log(os.totalmem()); // Memoria total del sistema (en bytes)
    console.log(os.freemem()); // Memoria libre disponible (en bytes)
    console.log(os.userInfo()); // Información del usuario actual (nombre, directorio, etc.)
    console.log(os.release()); // Versión del sistema operativo
    console.log(os.type()); // Tipo de sistema operativo ('Windows_NT', 'Linux', etc.)
    console.log(os.networkInterfaces()); // Detalles de las interfaces de red
    console.log(os.version()); // Versión del sistema operativo en formato detallado
}

SistemaOperativo()