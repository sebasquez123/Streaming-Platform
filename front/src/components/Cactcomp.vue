
<template>
  <div id="grid_de_usuarios">
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
                                  <router-link to="/U"    class="nav-link"><i class="fas fa-user me-4" style="font-size:25px;" ></i>USUARIOS</router-link>
                                  <router-link to="/Cact"  class="nav-link"><i class="fas fa-file me-4" style="font-size:25px;"></i>CUENTAS EN SERVICIO</router-link>                                                              
                                  <router-link to="/Reg"  class="nav-link"><i class="fas fa-book me-4" style="font-size:25px;"></i>REGISTRO</router-link>  
                                </nav>
                            </div>                          
                        </div>
                    </div>
                <div class="sb-sidenav-footer"></div>
            </nav>
    </div>
<div class="card" style="margin: 60px;">
    <div class="card-header cabeza">
        <i class="fas fa-laptop me-1"></i> CUENTAS EN PRODUCCIÓN - DETALLES DE CUENTA
    </div>
    <div class="card-body">
      <div class="container-fluid px-4">               
        <div class="card mb-4 mt-3" style="width:100%;">                         
                 <div class="mb-4 ms-4">
                      <p>Filtros aplicables:</p>   
                      <form class="row " method="post">
                        <div class="float-start" style="width: 200px;"> <!-- Dividimos la fila en dos columnas -->
                            <label for="date1" class="col-sm-9" style="font-size:15px;">FECHA INICIO:</label>
                            <div class="col-sm-9"> <!-- Dividimos esta columna en dos -->
                                <VueDatePicker class="cmp" style="width: 185px;" id="date1" v-model="date1"></VueDatePicker>
                            </div>
                        </div>
                        <div class="float-start" style="width: 200px;"> 
                            <label for="date2" class="col-sm-9" style="font-size:15px;">FECHA FIN:</label>
                            <div class="col-sm-9"> 
                                <VueDatePicker class="cmp" id="date2" style="width: 185px;" v-model="date2"></VueDatePicker>
                            </div>
                        </div>
                        <div class="float-start " style="width: 200px;"> 
                            <label for="txtnumero" class="col-sm-9" style="font-size:15px;">CELULAR:</label>
                            <input type="text" class="form-control" style="font-size:15px;border-radius: 3px;" id="txtnumero">
                        </div> 
                        <div cclass="float-start " style="width: 200px;"> <!-- Segunda columna --> 
                            <label for="txtestado" class="col-sm-10" style="font-size:15px;">ESTADO DE CUENTA:</label>
                                <select class="form-control" id="txtestado" style="font-size:15px;border-radius: 3px;"  value="">
                                    <option disabled selected>seleccionar</option>
                                    <option name="Fueradeservicio">Fuera de servicio</option>
                                    <option name="Disponible">Disponible</option>
                                    <option name="Ocupada">Ocupada</option>
                                    <option name="Dispocupada">Perfiles Disponibles</option>
                                    <option name="terminada">Terminada</option>
                                </select>
                            </div>                  
                       </form>  
                      <div class="float-start" style="width: 200px;">       
                            <button type="button" class="btn btn-danger ms-2 mt-4 " style="font-size: 15px;" >BUSCAR</button>
                        </div>  
              </div>
        </div>

        <table class="table table-striped" style="width:100%;">
            <thead>
                <tr>
                    <th scope="col">Tel</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Contraseña</th>
                    <th scope="col">Estado</th>
                    <th scope="col">F_ini</th>
                    <th scope="col">F_fin</th>
                    <th scope="col" id="editar">Opciones</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="cuenta,index in counts" :key="index">           
                <td v-if="customers.find(customer => customer.cuentaid == cuenta.id)">
                    {{ customers.find(customer => customer.cuentaid == cuenta.id).telefono }}
                </td>
                <td v-else>No encontrado</td>
                <td v-if="plataforms.find(plata => plata.id == cuenta.productoid)">
                    {{ plataforms.find(plata => plata.id == cuenta.productoid).plataforma }}
                </td>
                <td v-else>No encontrado</td>
                <td>{{ cuenta.correo }}</td>
                <td>{{ cuenta.contraseña }}</td>
                <td>{{ cuenta.estado }}</td>
                <td>{{ cuenta.fechaini }}</td>
                <td>{{ cuenta.fechafin }}</td>
                <td><button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#formularioeditar"><i class="fas fa-pen me-1 btneditar"></i></button>
                    <button type="button" class="btn btn-outline-danger ms-2" data-bs-toggle="modal" data-bs-target="#borrar"><i class="fas fa-trash me-1"></i></button></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

<!-- modal de borrar -->

<div class="modal fade" id="borrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Desea borrar este usuario?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal de edicion -->
<div class="modal fade" id="formularioeditar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" ref="modalcito" >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header fondo-verde">
                <h5 class="modal-title" id="exampleModalLabel">¿A quien modificaremos hoy?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body g-2">
                <div class="col-sm-12">
                    <label for="exampleFormControlInput1" class="form-label">Telefono:</label>
                    <input type="text" class="form-control" id="txtnombre">
                </div>
                <br />
                <div class="col-sm-12">
                    <label for="exampleFormControlInput1" class="form-label">Producto:</label>
                    <input type="text" class="form-control" id="txtapellido">
                </div>
                <br />
                <div class="col-sm-12">
                    <label id="txtactivo" for="exampleFormControlInput1" class="form-label">¿Activo?</label>
                    <select id="txtactivo" class="form-select">
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="guardar()">Guardar!</button>
            </div>
        </div>
    </div>
</div>
</div>
</template>



<script type="text/javascript" src="../assets/js/modelos/cuentas.js">


</script>
<style scoped lang="css">
 
 .sidevar{
    background-color: rgba(0, 0, 0, 0.838);
    color:rgb(255, 255, 255);
  }
.linea{
      border-right: 4px solid rgb(102, 102, 102);
  }
.input-group-append {
cursor: pointer;
}

.cabeza{

    background-color: #3ebb00;
     font-weight: bold;
      color:white;
}
.cmp {
  --dp-cell-size: 22px; /* Cambia el tamaño de las celdas del calendario */
  --dp-button-height: 17px; /* Cambia la altura de los botones del calendario */
  --dp-month-year-row-height: 15px; /* Cambia la altura de la fila de meses y años */
  --dp-button-icon-height: 17px; /* Cambia el tamaño de los iconos de los botones */
  --dp-preview-font-size: 0.8rem; /* Cambia el tamaño de fuente de la vista previa */
  --dp-time-font-size: 1rem; /* Cambia el tamaño de fuente del selector de tiempo */
}
</style>




