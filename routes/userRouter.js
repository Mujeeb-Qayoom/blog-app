const router = require('express').Router();
const auth =require('../middleware/auth');

const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const comentController = require('../controllers/comentController'); 
const adminController = require('../controllers/adminController');

// USER ROUTES
router.post('/signUp',userController.signup);
router.post('/login',userController.login);

// POST ROUTES
router.post('/user/addPost',auth.userAuth,postController.addPost);
router.get('/user/myPosts',auth.userAuth,postController.myPosts);
router.patch('/user/editPost/:postId',auth.userAuth,postController.editPost);
router.delete('/user/deleteAllPosts',auth.userAuth,postController.deleteAllPosts);
router.delete('/user/deletePost',auth.userAuth,postController.deletePost);

// COMMENT ROUTES
router.post('/user/post/addComment',auth.userAuth,comentController.addComment);
router.get('/user/post/getComments',auth.userAuth,comentController.getComments);
router.delete('/user/post/deleteComment',auth.userAuth,comentController.deleteComment);

// ADMIN ROUTES
router.get('/admin/getUsers',auth.adminAuth,adminController.getUsers);
router.get('/admin/getPosts',auth.adminAuth,adminController.getPosts);
router.delete('/admin/deleteUser',auth.adminAuth,adminController.deleteUser);
router.delete('/admin/deletePost',auth.adminAuth,adminController.deletePost);
router.delete('/admim/deleteComent',auth.adminAuth,adminController.deleteComment);

module.exports =router;