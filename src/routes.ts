import { Router } from "express";

export const routes = Router()

const { CreateUserController } = require('./controllers/CreateUserController')
const { GetAllUserController } = require('./controllers/GetAllUserController')
const { UpdateUserController } = require('./controllers/UpdateUserController')
const { DeleteUserController } = require('./controllers/DeleteUserController')

routes.route('/users').post(CreateUserController)
routes.route('/users').get(GetAllUserController)
routes.route('/users/:id').put(UpdateUserController)
routes.route('/users/:id').delete(DeleteUserController)