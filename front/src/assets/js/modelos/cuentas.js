import { ref, onMounted } from 'vue';
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useStore } from 'vuex';
export default {
components: { VueDatePicker },


setup() {
    const date1 = ref();
    const date2 = ref();
    const store = useStore();

    let platform = [];

    let clientes = [];
    let productos = [];    
    let proveedores = [];
    let cuentas = [];

    var datos = ref(null);
    var response;
    
    const url1 = `http://localhost:4003/app/net/consultar/producto`;
    const url2 = `http://localhost:4003/app/net/consultar/proveedor`;
    const url3 = `http://localhost:4003/app/net/consultar/clientes`;
    const url4 = `http://localhost:4003/app/net/consultar/cuentas`;


    // PETICIONES A LA API PARA GESTIONAR LA INFORMACION DEL COMPONENTE DE USUARIOS
                                    // USUARIOS****
    onMounted(async () => {
        
            try {
            
                response = await axios.get(url1);
                datos.value = response.data;
             
                        datos.value.body.forEach(plataforma => {

                            let plataformas= {
                                id: plataforma.productoid,
                                plataforma: plataforma.plataforma,
                                url: plataforma.url,
                                activo: plataforma.activo
                            }
                            productos.push(plataformas);

                        });
                       

                response = await axios.get(url2);
                datos.value = response.data;

                        datos.value.body.forEach(proveedor => {

                            let provee= {
                                id: proveedor.proveedorid,
                                nombre: proveedor.nombre,
                                activo: proveedor.activo
                            }
                            proveedores.push(provee);
                          
                        });
                        


                response = await axios.get(url3);
                datos.value = response.data;

                        datos.value.body.forEach(usuarios => {

                        let user= {
                            id: usuarios.clienteid,
                            cuentaid: usuarios.cuentaid,
                            telefono: usuarios.telefono,
                            fechaini: usuarios.fechaini,
                            fechafin: usuarios.fechafin,
                            valor: usuarios.valor,
                            producto: usuarios.producto,
                            activo: usuarios.activo,
                            comentario: usuarios.comentario
                        }
                        clientes.push(user);

                        });
  
                    response = await axios.get(url4);
                    datos.value = response.data;
                     
                                datos.value.body.forEach(counts => {
        
                                    let cuenta= {
                                        id: counts.cuentaid,
                                        productoid: counts.productoid,
                                        proveedorid: counts.proveedorid,
                                        correo: counts.correo,
                                        contraseña: counts.contraseña,
                                        estado: counts.estado,
                                        activo: counts.activo,
                                        fechaini: counts.fechaini,
                                        fechafin: counts.fechafin
                                    }
                                    cuentas.push(cuenta);
        
                                });

                              




            } catch (error) {
                console.error('error al obtener los datos de los clientes, proveedores o plataformas'.error);
            }

            // clientes.forEach(item=>{
            //     console.log(item.id +' '+ item.telefono +' '+item.cuentaid +'\n');
            // });
            // cuentas.forEach(item=>{
            //     console.log(item.id +' '+'\n');
            // });
            store.dispatch('actualizaritems1',productos);
            store.dispatch('actualizaritems2',proveedores);
            store.dispatch('actualizaritems3',clientes);
            store.dispatch('actualizarcuentas',cuentas);
            
        });
        

    // PETICIONES A LA API PARA GESTIONAR LA INFORMACION DEL COMPONENTE DE CUENTAS
                                //****CUENTAS****
                    

  

                                // for (let i = 0; i < cuentas.length; i++) {
                                //     for (let i = 0; i < clientes.length; i++) {
                                    
                                //         if(cuentas.id == clientes.id){
                                //             document.getElementById("tel").innerHTML= "hola"+clientes.telefono;
                                //         }
                                    
                                //     }                                   
                                // }
                        



        return {
            productos,
            proveedores,
            clientes,
            cuentas,
        }; 
       
},






methods: {


},

computed: {
        plataforms() {
            return this.$store.state.plataforms;
        },
        proveedors() {
            return this.$store.state.proveedors;
        },
        customers() {
            return this.$store.state.customers;
            
        },
        counts() {
            return this.$store.state.counts;
        },
    },



};

 
