const deber = {} 
const pool= require('../database') 

deber.renderagregar = (req ,res) =>{
    res.render('proyectoUsuario')
} 

deber.datos = async (req,res)=>{
    const{id} = req.params
    const datos = await pool.query('SELECT * FROM cuenta ')
    res.render('proyectoUsuario', {datos})

}

deber.rendereditar = async(req,res) => {
    const{id} = req.params
    const {descripcion,saldo}=req.body
    const nuevoDato ={
        descripcion
    };

    const nuevoSaldo={
        saldo
    }
     await pool.query('BEGIN')
    await pool.query ('UPDATE tranferencia set ? WHERE id =1',[nuevoDato]);
    await pool.query ('UPDATE cuenta set  ?- saldo WHERE id=5 ',[nuevoSaldo] );
    await pool.query ('update cuenta SET ?+saldo WHERE id=3 ' ,[nuevoSaldo]);
    await pool.query('COMMIT')

    req.flash ('success', 'datos Correctos')
    res.redirect ('/lista')

}
deber.rendereditar1 = async(req,res) => {
    const{id} = req.params
    const {descripcion,saldo}=req.body
    const nuevoDato ={
        descripcion
    };

    const nuevoSaldo={
        saldo
    }
    await pool.query('BEGIN')
    await pool.query ('UPDATE tranferencia set ? WHERE id =1',[nuevoDato]);
    await pool.query ('UPDATE cuenta set  ?- saldo WHERE id=5 ',[nuevoSaldo] );
    await pool.query ('update cuenta SET ?+saldo WHERE id=3 ' ,[nuevoSaldo]);
    await pool.query('rollback')

    req.flash ('success', 'datos Correctos')
    res.redirect ('/lista')

}

deber.lista =async(req,res)=>{
    const lista = await pool.query('SELECT * FROM cuenta ')
    res.render('lista', {lista})
}
module.exports=deber
