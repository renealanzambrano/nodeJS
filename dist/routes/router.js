"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const conn = require('../connections');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//----------------------------------METODO GET--------------------------------------------------------------
router.get('/registro', (req, res) => {
    conn.query('SELECT * FROM registro', (error, resultado) => {
        if (error)
            throw error;
        res.send(resultado);
    });
});
router.get('/registro/:id', (req, res) => {
    /*const de = req.body.de;
    const cuerpo = req.body.cuerpo;*/
    const id = req.params.id;
    conn.query('SELECT * FROM registro WHERE id=?', id, (error, resultado) => {
        if (error)
            throw error;
        res.send(resultado);
    });
});
router.get('/registro/name/:name', (req, res) => {
    const name = req.params.name;
    conn.query('SELECT * FROM registro WHERE name=?', name, (error, resultado) => {
        if (error)
            throw error;
        res.send(resultado);
    });
});
router.get('/registro/ap_pat/:ap_pat', (req, res) => {
    const ap_pat = req.params.ap_pat;
    conn.query('SELECT * FROM registro  WHERE ap_pat=?', ap_pat, (error, resultado) => {
        if (error)
            throw error;
        res.send(resultado);
    });
});
router.get('/registro/ap_mat/:ap_mat', (req, res) => {
    const ap_mat = req.params.ap_mat;
    conn.query('SELECT * FROM registro WHERE ap_mat=?', ap_mat, (error, resultado) => {
        if (error)
            throw error;
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
router.post('/registro', (req, res) => {
    var abc = { name: req.body.name, ap_pat: req.body.ap_pat, ap_mat: req.body.ap_mat };
    conn.query('INSERT INTO  registro SET ?', abc, (error, result) => {
        if (error)
            throw error;
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
router.put('/registro/:id', (req, res) => {
    var abc = { name: req.body.name, ap_pat: req.body.ap_pat, ap_mat: req.body.ap_mat };
    const id = req.params.id;
    conn.query('UPDATE  registro SET ? WHERE id=?', [abc, id], (error, result) => {
        if (error)
            throw error;
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
router.delete('/registro/:id', (req, res) => {
    const id = req.params.id;
    conn.query('DELETE FROM registro Where id=?', id, (error, resultado) => {
        if (error)
            throw error;
        res.send('Dato eliminado');
    });
});
exports.default = router;
