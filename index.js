require("dotenv").config();
const os = require("os");
const fs = require("fs");

console.log("Hackeando tu sistema operativo...");
setTimeout(() => {
  if (process.platform === `win32`) {
    console.log("Tú no molas mucho");
  } else if (process.platform === `linux`) {
    console.log("Tú molas");
  } else {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  }

  console.log(`Cuidado, te quedan ${os.freemem()} Mb de RAM libre`);
  console.log(
    `Tu usuario del sistema operativo es ${
      os.userInfo().username
    } y tu carpeta es ${os.userInfo().homedir}`
  );
  console.log(`Éstos son los archivos y carpetas de tu carpeta de usuario:`);
  console.log(
    fs.readdir(`${os.userInfo().homedir}`, (err, datos) => {
      if (err) console.log(err);
      else {
        console.log(
          "\nÉstos son los archivos y carpetas de tu carpeta de usuario:"
        );
        datos.forEach((dato) => {
          fs.stat(`${os.userInfo().homedir}/${dato}`, (error, stats) => {
            if (error) {
              console.log(error);
            } else {
              if (stats.isFile()) {
                console.log(`Este ARCHIVO llamado ${dato} ocupa ${stats.size}`);
              } else if (stats.isDirectory()) {
                console.log(
                  `Este DIRECTORIO llamado ${dato} ocupa ${stats.size}`
                );
              }
            }
          });
        });
      }
    })
  );
}, 2000);
