

<template >
<div id="grid_de_password" class="row">
<div class=" justify-content-end d-flex me-5">

<div class=" col-7 float-end">
    <img src="../assets/fondo7.jpg" class="d-block " alt="netflix" width="100%" height="110%" style="  background-size: cover;" />
</div>
  <div class="card" style=" margin: 60px; border-radius: 20px 20px 20px 20px; width: 40%;">
      <div class="card-header flex cabeza">INICIAR SESION</div>
      <div class="card-body flex">
          <form class="col-8" method="POST" action="Initcomp.vue">
                  <div class="col-12">
                      <label for="Correo" class="form-label" value="sebastianvasqz12@gmail.com">Correo electronico:</label>
                      <input type="email" class="form-control" id="correo">
                      <!-- <div class="valid-feedback">Looks good!</div> -->
                  </div>
                  <div class="col-12">
                      <label for="contraseña" class="form-label">Contraseña:</label>
                      <input type="password" class="form-control" id="contraseña" required>
                  </div>
                  <div>   
                      <input class="me-2 mt-3" type="checkbox" name="sebas" value="sebas">Recuerdame
                  </div><br>
                      <!-- <div class="input-group has-validation"> -->
                      <!-- <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                      <div id="validationServerUsernameFeedback" class="invalid-feedback"></div> -->
                      <div class="col-12 flex mt-5" ></div>
                  <div class="col-12 flex mt-4">
                      <button class="btn btn-primary" type="submit">Entrar</button>
                  </div>
          </form>
          <!-- <div class="col-6 d-block" style=" margin: -15px;">           
              <img src="../assets/net.png" class="d-block" alt="netflix" width="123%" height="100%" style="border-radius: 0px 0px 20px 0px;"/>
          </div>     -->
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
 .flex{
justify-content: center;
display:flex;
 }
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

