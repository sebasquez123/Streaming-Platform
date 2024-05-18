

<template >
    <div id="grid_de_password" class="justify-content-center">

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
    <div class="card" style=" margin: 60px; border-radius: 20px 20px 20px 20px; width: 1000px;">
        <div class="card-header cabeza">CAMBIO DE CONTRASEÑA</div>
        <div class="card-body d-flex float-start">
            <form class="col-5 g-3" method="POST">
                    <div class="col-9">
                        <label for="Correo" class="form-label" value="sebastianvasqz12@gmail.com">Correo electronico:</label>
                        <input type="email" class="form-control" id="correo">
                        <!-- <div class="valid-feedback">Looks good!</div> -->
                    </div>
                    <div class="col-9">
                        <label for="contraseña" class="form-label">Contraseña actual:</label>
                        <input type="password" class="form-control" id="contraseña" required>
                    </div>
                    <div class="col-9">
                        <label for="recontraseña" class="form-label">Nueva contraseña:</label>
                        <input type="password" class="form-control" id="recontraseña" required>
                    </div>
                    <div class="col-9">
                        <label for="recontraseña" class="form-label">Confirme su contraseña:</label>                
                        <input type="password" class="form-control" id="recontraseña" required>
                    </div><br>
                        <!-- <div class="input-group has-validation"> -->
                        <!-- <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback"></div> -->
                    <div class="col-9">
                        <button class="btn btn-primary" type="submit">Guardar</button>
                    </div>
            </form>
            <div class="col-6 d-block" style=" margin: -17px;">           
                <img src="../assets/net.png" class="d-block" alt="netflix" width="123.5%" height="100%" style="border-radius: 0px 0px 20px 0px;"/>
            </div>    
        </div>
    </div>
</div>
</div>
</template>
  
  <script type="text/javascript" >
 
  
  export default {
  
  setup() {
 
    return {
     
    }
  },
  };
  
  
  
  </script>
  <style scoped lang="css">
   
   .sidevar{
    background-color: rgba(0, 0, 0, 0.838);
    color:rgb(255, 255, 255);
  }
  .cabeza{

background-color: #3ebb00;
font-weight: bold;
color:white;
}
  </style>

