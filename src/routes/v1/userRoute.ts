/**
 * Copyright Marmoym 2017
 * 
 */
import { Router, Request, Response } from 'express'
import UserController from '../../controllers/v1/UserController/UserController'

/**
 * Request Mapping: /api/v1/user/
 */
let router: Router = Router();

/**
 * ...
 */
router.get('/check_username_exist:username', (req: Request, res: Response) => {
  var result = UserController.checkUsernameExist(req.params.username)
  if(result){
    res.send("username exist")
  }else{
    res.send("username not exist")
  }
})

/**
 * ...
 */
router.get('/check_useremail_exist:useremail', (req: Request, res: Response) => {
  var result = UserController.checkUserEmailExist(req.params.useremail)
  if(result){
    res.send("useremail exist")
  }else{
    res.send("useremail not exist")
  }
})

/**
 * ...
 */
router.post('/login', (req: Request, res: Response) => {
 
  console.log(req.body)

  var result = UserController.getUserToken(req.body);
  
  result.then(function(value){
      res.send("login SUCCESS"+value)
  })

})

/**
 * ...
 */
router.post('/join', (req: Request, res: Response) => {
  console.log(req.body)
  var result = UserController.registerUser(req.body)  
  if(result){
    res.send("join SUCCESS")
  }else{
    res.send("join FAILED")
  }

})

router.use('/update', (req: Request, res: Response, next : NextFunction ) => {
  console.log(1, 'sibalslslsl')
  next();
});

router.put('/update', (req: Request, res: Response) => {
  // var result = UserController.updateUserInfo(req.body)
  console.log(1, 'sdsdsd')
  var result = true;
  if(result){
    res.send("update SUCCESS")
  }else{
    res.send("update FAILED")
  }
})

router.use('/delete', (req: Request, res: Response, next : NextFunction ) => {
  UserController.verifyUserToken(req.body.param)
  next();
});

router.delete('delete', (req: Request, res: Response) => {
  var result = UserController.deleteUser(req.body)
  if(result){
    res.send("delete SUCCESS")
  }else{
    res.send("delete FAILED")
  }
})

export default router;