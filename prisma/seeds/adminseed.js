export default async function usuarioSeed(prisma) {
  await prisma.usuario.upsert({
    create: {
      nombre: "Eliseo",
      correo: "eliseonop@gmail.com",
      password: "Hola22",
    }, 
    update: {}
    ,
    where:{
        correo: "eliseonop@gmail.com"
    }
  });
}
export default async function adminSeed(prisma) {
    await prisma.administrador .upsert({
        create: {
            nombre: "admin",
            correo: "eliseonop@gmail.com",
            password: "123456",
          }, 
          update: {}
          ,
          where:{
              correo: "eliseonop@gmail.com"
          }
    });
  }