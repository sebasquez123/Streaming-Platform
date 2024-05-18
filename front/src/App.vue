<template lang="es">
  <div id="grid">
       <nav class="sb-topnav navbar navbar-expand  bg-verdes bordenav" style="height:60px;"id="superior">
            <!-- Navbar Brand-->
            <router-link to="/" class="navbar-brand ps-3" aria-current="page" style="display: block; text-align:center;">
            <span class="supponer">DIGITAL DESK</span>
            <span style="font-size:15px;display: block;">Entertainment</span>
            </router-link>              
        </nav>
  


        
          

           
              <main class="fondo3">
          <router-view/> 
              </main>

            </div>
    
  
 
</template>


<script type="text/javascript">
  export default {

    components: {
    },

    setup() {

      return {
      }; 

    },
    
  };
</script>

<style scoped lang="css">

  * {font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}
  

.fondo3 {
  background-image: url('./assets/fondo5.png');
  background-size: cover;
  background-position: center;
  
}
  .centro {
    text-align: center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
  }

  .bg-verdes {background-color: #adff2f;}
.supponer{
  font-size: 25px;
  display: block;
  margin-bottom: -10px;
}
 
.sidevar{
    border-right:4px solid #38a000;
    background-color: rgba(0, 0, 0, 0.916);
    color:rgb(0, 0, 0);
  }
.letranegra{color:rgb(0, 0, 0);}
.bordenav{border-bottom: 4px solid #38a000}


  #grid { 
    display: grid;
    grid-template-columns:100%;
    grid-template-rows: repeat(4, auto);

    grid-template-areas:    "N"
                            "M"
                            "M"
                            "M";  
  }


  #superior {
    grid-area: N; 
    height: 120px;
  }
 
  #layoutSidenav_content {
    grid-area: M; 
   
  }
 
 
   @media screen and (max-width: 900px) and (min-width: 551px) { 
    #grid {        
      grid-template-columns: 100%;
      grid-template-rows: repeat(3, auto);

      grid-template-areas:    "N "                                
                              "M "                                                                
                              "M "; 
    }
  }

  @media screen and (max-width: 550px) {  
    #grid {        
      grid-template-columns: 100%;
      grid-template-rows: repeat(4, auto);

      grid-template-areas:    "N"
                              "M"
                              "M"                                                                  
                              "M"; 
    }
  }

</style>
