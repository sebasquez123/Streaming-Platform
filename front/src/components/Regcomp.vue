

<template >
    <div id="grid_de_password" class=" fondo">
        <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sidevar" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">                          
                            <div class="sb-sidenav-menu-heading d-flex" style="font-size:15px">
                                <div class="mt-3" style="width: 95%;">ADMINISTRACIÓN</div>
                                <div class=" float-end">
                                    <ul class="navbar-nav ">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw" style="font-size: 30px;"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">                         
                                                <li><router-link to="/Pass" class="dropdown-item">Contraseña</router-link></li><hr>
                                                <li><router-link to="/Init" class="dropdown-item">Salir</router-link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-table" style="font-size:25px;"></i></div>
                                ESTANTERIA
                              
                            </a>
                            <div class="collapse"  id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav fontwhite">
                                  <router-link to="/U"    class="nav-link"><i class="fas fa-user me-4" style="font-size:25px;"></i>USUARIOS</router-link>
                                  <router-link to="/Cact"  class="nav-link"><i class="fas fa-file me-4" style="font-size:25px;"></i>CUENTAS EN SERVICIO</router-link>                                                              
                                  <router-link to="/Reg"  class="nav-link"><i class="fas fa-book me-4" style="font-size:25px;"></i>REGISTRO</router-link>  
                                </nav>
                            </div>                          
                        </div>
                    </div>
                    <div class="sb-sidenav-footer"></div>
                </nav>
            </div>

<div class="justify-content-center d-flex">
    <div class="card" style=" margin: 20px; border-radius: 20px; width: 50%; height: 40%;" >
        <div class="card-header cabeza" style=" border-radius: 20px 20px 0px 0px;" >REGISTRO NUEVO USUARIO</div>
        <div class="card-body d-flex justify-content-center">
            
            <form class="col-8 g-3" method="GET">
                <p style="text-align: justify; font-weight: bold;">Ingresa los datos que se utilizaran para ingresar de forma privada a la plataforma,
            todo usuario ingresado a la base de datos obtendra acceso a los datos de administracion del negocio.</p>
            
                    <div class="col-12">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" required>
                    </div>
                    <div class="col-12">
                        <label for="apellido" class="form-label">Apellido:</label>
                        <input type="text" name="apellido" class="form-control" id="apellido" required>
                    </div>
                    <div class="col-12">
                        <label for="Correo" class="form-label " value="sebastianvasqz12@gmail.com">Correo electronico:</label>
                        <input type="email" name="correo" v-model="email" class="form-control" required>        
                    </div>        
                    <div class="col-12">
                        <label for="contraseña" class="form-label">Contraseña:</label>                
                        <input type="password" name="contraseña" class="form-control" id="contraseña" required>
                    </div><br>
                    <div class="col-12 d-flex justify-content-center">
                        <input type="button" value="Guardar" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#registro">
                    </div>
            </form>   
        </div>
    </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="registro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Administrador creado con exito!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <strong>Nombre:{{ admin.nombre }}</strong><br>
        <strong>Apellido:{{ admin.apellido }}</strong><br>
        <strong>Correo:{{ admin.correo }}</strong><br>
        <strong>Contraseña:{{ admin.contraseña }}</strong>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>
  
  <script type="text/javascript" >
 
  
  export default {
  
  setup() {
    
    let admin = {
    nombre:'',
    apellido:'',
    correo:'',
    contraseña:'',
    }

    function admins (form)
  {
    admin.nombre = form.nombre.value;
    admin.apellido = form.apellido.value;
    admin.correo = form.correo.value;
    admin.contraseña = form.contraseña.value;
  }

  return {
     admin,admins,
    }
  },


  computed: {

  },

 
  };
  
  
  
  </script>
  <style scoped lang="css">
   
   .fondo {
  background-image: url('../assets/fondo.jpg');
  background-size: cover;
  background-position: center;

}
.cabeza{

background-color: #3ebb00;
font-weight: bold;
color:white;
}

  .sidevar{
    background-color: rgba(0, 0, 0, 0.838);
    color:rgb(255, 255, 255);
  }
  </style>

