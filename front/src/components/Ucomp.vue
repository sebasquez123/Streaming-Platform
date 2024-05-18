
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
                                  <router-link to="/U"    class="nav-link"><i class="fas fa-user me-4" style="font-size:25px;"></i>USUARIOS</router-link>
                                  <router-link to="/Cact"  class="nav-link"><i class="fas fa-file me-4" style="font-size:25px;"></i>CUENTAS EN SERVICIO</router-link>                                                              
                                  <router-link to="/Reg"  class="nav-link"><i class="fas fa-book me-4" style="font-size:25px;"></i>REGISTRO</router-link>  
                                </nav>
                            </div>                          
                        </div>
                        
                    </div>  
                </nav>               
            </div>
<div class="card" style="margin: 50px;">
    <div class="card-header cabeza">
        <i class="fas fa-user-astronaut me-1"></i> USUARIOS - CLIENTES
    </div>
    <div class="card-body">
      <div class="container-fluid px-4">               
              <div class="card mb-4 mt-3" style="width:100%;">                         
                            <div class="mb-3 ms-4 me-4 mt-3">
                                <button type="button" class="btn btn-outline-success float-start" data-bs-toggle="modal" data-bs-target="#modalcito" >Nuevo Cliente</button>
                                <p class="float-start ms-5 mt-2">Añade un nuevo cliente con todos los datos de la cuenta.</p>                                              
                                <button type="button" class="btn btn-outline-danger float-end" onclick='window.alert("exportando")'>Exportar a excel</button>            
                            </div>
                          <hr style="width: 100%;">  
                        <div class="mb-4 ms-4">
                      <p>Filtros aplicables:</p>   
                <form class="row float-start" method="GET">
                        <div class="mx-auto" style="width: 200px;"> <!-- Dividimos la fila en dos columnas -->
                            <label for="date1" class="col-sm-9" style="font-size:15px;">FECHA INICIO:</label>
                            <div class="col-sm-9"> 
                                <VueDatePicker class="cmp" style="width: 185px;" id="date1" v-model="date1"></VueDatePicker>
                            </div>
                        </div>
                        <div class="mx-auto" style="width: 200px;"> <!-- Segunda columna -->
                            <label for="date2" class="col-sm-9" style="font-size:15px;">FECHA FIN:</label>
                            <div class="col-sm-9"> 
                                <VueDatePicker class="cmp" id="date2" style="width: 185px;" v-model="date2"></VueDatePicker>
                            </div>
                        </div>
                        <div class="mx-auto" style="width: 200px;"> <!-- Segunda columna -->
                            <label for="txttelefono" class="col-sm-9" style="font-size:15px;">TELEFONO:</label>
                            <input type="text" class="form-control " style="font-size:15px;border-radius: 5px;" id="txttelefono">
                        </div>          
                      </form>
                      <br><br><br>
                    <button type="button" class="btn btn-danger mt-3" style="font-size: 15px; " onclick='window.alert("BUSCANDO EN LA TABLA")'>BUSCAR</button>                        
              </div>
        </div>

 <table id="example" class="table table-striped" style="width:100%">
      <thead>
          <tr>
            <th>Tel</th>
            <th>Prod</th>
            <th>F_ini</th>
            <th>F_fin</th>
            <th>User</th>
            <th>Pin</th>
            <th>Valor</th>
            <th>Activo</th>
            <th id="editar">Opciones</th>
          </tr>
      </thead>
      <tbody>
    <tr v-for="(usuario, index) in customers" :key="index">
        <td>{{ usuario.telefono }}</td>
        <td>{{ usuario.producto }}</td>
        <td>{{ usuario.fechaini }}</td>
        <td>{{ usuario.fechafin }}</td>
        <td>nada aun user</td><td>{{counts.correo}}</td>
        
        <td>{{ usuario.valor }}</td>
        <td v-if="usuario.activo==1">Activo</td> 
        <td v-if="usuario.activo==0">Inactivo</td>  
        <td><button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#formularioeditar"><i class="fas fa-pen me-1 btneditar"></i></button>
            <button type="button" class="btn btn-outline-danger ms-2"><i class="fas fa-trash me-1"></i></button></td>
    </tr>
      </tbody>
</table>
</div>
</div>
</div>


<!-- Modal de ingreso -->
<div class="modal fade" id="modalcito" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #adff2f;">
                <h5 class="modal-title" id="exampleModalLabel">¿A quien añadiremos hoy?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>

      <form class="modal-body g-2" method="POST" action="/Ucomp.vue">
                <div class="col-sm-12">
                    <label for="txtnumero" class="form-label">Telefono:</label>
                    <input type="text" name="telefono" class="form-control" id="txtnumero" required>
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtproducto" class="form-label">Producto:</label>
                    <select class="form-control" id="txtproducto" required>

                        <option disabled selected>seleccionar</option>
                        <option v-for="producto in plataforms" :key="producto.id">{{ producto.plataforma }}</option>

                 
                    </select>
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="fechaini" class="form-label">Fecha inicio:</label>
                    <input type="Date" name="fechaini" class="form-control" id="txtfechaini" required >
                </div>
            <br />
            <div class="col-sm-12">
                    <label for="fechafin" class="form-label">Fecha fin:</label>
                    <input type="Date" name="fechafin" class="form-control" id="txtfechafin" required >
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtvalor" class="form-label">Valor ($):</label>
                    <input type="number" name="valor" class="form-control" id="txtvalor" value="">
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtpantalla" class="form-label">N-Pantalla:</label>
                    <select class="form-control" id="txtpantalla" required>
                        <option disabled selected>seleccionar</option>
                        <option v-for="numero in 7" :key="numero" :value="numero">{{ numero }}</option>
                    </select>
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtproveedor" class="form-label">Proveedor:</label>
                    <select class="form-control" id="txtproveedor" required>
                        <option disabled selected>seleccionar</option>
                        <option v-for="prov in proveedors" :key="prov.id" :value="prov.nombre">{{ prov.nombre }}</option>
                    </select>
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtemail" class="form-label">Correo:</label>
                    <input type="email" class="form-control" id="txtemail"  required>
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtpassword" class="form-label">Contraseña:</label>
                    <input type="password" class="form-control" id="txtpassword" required>
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtperfil" class="form-label">Perfil:</label>
                    <input type="text" class="form-control" id="txtperfil" value="">
                </div>
            <br />
                <div class="col-sm-12">
                    <label for="txtpin" class="form-label">Pin:</label>
                    <input type="text" class="form-control" id="txtpin" maxlength="5" value="">
                </div>
            <br />
            <div class="col-sm-12">
                <label for="txtcomentarios" class="form-label">¿Comentarios?</label><br />
                <input type="textarea" class="form-control" id="txtcomentarios" rows="5">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-primary" >Guardar</button>
            </div>
        </form>
        </div>
    </div>
</div>






<!-- Modal de edicion-->
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



<script type="text/javascript" src="../assets/js/modelos/clientes.js">

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
.linea{
      border-right: 4px solid rgb(102, 102, 102);
  }
.input-group-append {
cursor: pointer;
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




