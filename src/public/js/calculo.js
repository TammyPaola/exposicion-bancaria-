class calculo{
    constructor(){
        this.recuperar= document.getElementById('Mensaje')
        this.saldo=document.getElementById('saldo')
        this.monto=document.getElementById('monto1')

        }
    mensaje1(){
        this.recuperar.value='Transaccion exitosa...!!'
    }
    mensaje2(){
        alert ('Error en la Transaccion...')
    }
    saldos(){
      let a = parseInt(this.saldo.value)-parseInt(this.monto.value)
      this.saldo.value=a
    } 
}
let matematica = new calculo()
