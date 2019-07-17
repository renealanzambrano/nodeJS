import {Router,Request,Response} from 'express'
import { request } from 'https';
const router= Router();
const conn= require('../connections');
var bodyParser= require('body-parser');
var jsonParser= bodyParser.json();  
var urlencodedParser= bodyParser.urlencoded({extended:false});
//----------------------------------METODO GET--------------------------------------------------------------
router.get('/registro',(req: Request,res:Response)=>{
    conn.query('SELECT * FROM registro', (error: any, resultado: any)=>{
        if(error) throw error;
        res.send(resultado);
    });
});

router.get('/registro/:id', (req:Request, res:Response) => {
    /*const de = req.body.de;
    const cuerpo = req.body.cuerpo;*/
    const id = req.params.id;
    conn.query('SELECT * FROM registro WHERE id=?',id, (error: any, resultado: any)=>{
        if(error) throw error;
        res.send(resultado);
    });
    
});

router.get('/registro/name/:name', (req:Request, res:Response) => {
    const name = req.params.name;
    conn.query('SELECT * FROM registro WHERE name=?',name, (error: any, resultado: any)=>{
        if(error) throw error;
        res.send(resultado);     
    });
    
});

router.get('/registro/ap_pat/:ap_pat', (req:Request, res:Response) => {
    const ap_pat = req.params.ap_pat;
    conn.query('SELECT * FROM registro  WHERE ap_pat=?',ap_pat, (error: any, resultado: any)=>{
        if(error) throw error;
        res.send(resultado);
    });
});

router.get('/registro/ap_mat/:ap_mat', (req:Request, res:Response) => {
    const ap_mat = req.params.ap_mat;
    conn.query('SELECT * FROM registro WHERE ap_mat=?',ap_mat, (error: any, resultado: any)=>{
        if(error) throw error;
        res.send(resultado);
    });
});
//------------------------------------------Metodo POST---------------------------------------------------
/*router.post('/mensajes',(req:Request, res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de= req.body.de;

    res.json({
        ok:true,
        cuerpo,
        de
    });
});*/
router.post('/registro',(req: Request,res:Response)=>{
    var abc = {name:req.body.name,ap_pat:req.body.ap_pat,ap_mat:req.body.ap_mat};

    conn.query('INSERT INTO  registro SET ?',abc, (error: any, result: any)=>{
        if(error) throw error;
        res.json({
            abc
        });          
        
    });
});
//-------------------------------------METODO PUT-------------------------------------------------------
/*router.put('/mensajes/:id',(req:Request, res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de= req.body.de;
    const id= req.params.id;
    res.json({
        ok:true,
        mensaje: 'PUT FINALIZADO',
        cuerpo,
        de,
        id
    });
});*/
router.put('/registro/:id',(req: Request,res:Response)=>{
    var abc = {name:req.body.name,ap_pat:req.body.ap_pat,ap_mat:req.body.ap_mat};
    const id= req.params.id;
    conn.query('UPDATE  registro SET ? WHERE id=?',[abc,id], (error: any, result: any)=>{
        if(error) throw error;
        res.json({
            abc
        });          
        
    });
});
//--------------------------------------------------METODO DELETE------------------------------------------
/*router.delete('/mensajes/:id',(req:Request, res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de= req.body.de;
    const id= req.params.id;
    res.json({
        ok:true,
        mensaje: 'DELETE FINALIZADO',
        id
    });
});*/
router.delete('/registro/:id', (req:Request, res:Response) => {
    const id= req.params.id;
    conn.query('DELETE FROM registro Where id=?',id, (error: any, resultado: any)=>{
        if(error) throw error;
        res.send('Dato eliminado');
    });
});


export default router;