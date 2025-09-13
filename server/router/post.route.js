
import express from 'express'
import {  getAllPost, getSinglePost } from '../controller/post.controller.js';
const router=express.Router();

router.get('/getallpost',getAllPost);
router.get('/getsinglepost',getSinglePost );


export default router;