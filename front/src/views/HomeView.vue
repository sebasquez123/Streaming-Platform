
<template>
    <div id="grid_de_home" >

            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sidevar" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav fontwhite">                          
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
  
            <div class="container-fluid px-4 " >
                <h1 class=" centro mt-4">PANEL DE INFORMACIÓN</h1>  
                <div class="card mb-4">
                    <div class="card-body">
                        INFORMES Y DATOS
                        <div class="card-body" style="height:150px;">
                        <!-- <p>LA APLICACION TRATA DE UN SISTEMA DE REGISTRO Y TRAZABILIDAD DE UN PROCESO DE VENTA PARA UNA MINIEMPRESA DE ENTRETENIMIENTO STREAMING.
                            EL PROPOSITO DE LA APLICACION ES RECREAR UN BACKOFFICE QUE PERMITA ADMINISTRAR LOS CLIENTES, LAS CUENTAS, LOS PROVEEDORES Y ENTRE OTROS
                            SIN NECESIDAD DE UTILIZAR UN EXCEL QUE PUEDE LLEGAR A SER COMPLEJO O DE GRAN ENVERGADURA. EL APLICATIVO SE COMPONE DE UN LOGIN, UN REGISTRO DE USUARIO, UN CAMBIO DE CONTRASEÑA Y 
                            VISUALIZACION DE TABLAS FUNDAMENTALES, ADEMAS DE FORMULARIOS PARA AÑADIR, EDITAR Y ACTUALIZAR REGISTROS. 
<br><br>
                            LA APLICACION SOLUCIONA UN PROBLEMA REAL Y AUN ESTA EN DESARROLLO.
                        </p> -->
                        </div>
                    </div>
                </div>
                    <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-chart-area me-1"></i>
                                Tendencia de venta para este mes
                            </div>
                    <div class="card-body" style="height:300px;"></div>
                    <div class="card-footer small text-muted">Mes de febrero</div>
                </div>               
            </div>
     
    
</div>
</template>


<script type="text/javascript" >
export default {
    
}
</script>
<style scoped lang="css">
    
    .sidevar{
    background-color: rgba(0, 0, 0, 0.838);
    color:rgb(255, 255, 255);
  }
 
</style>




