import { Router } from 'express'

import PointControllers from './controllers/PointsControllers'
import ItemsController from './controllers/ItemsControllers'

const routes = Router()


const pointControllers = new PointControllers()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointControllers.create)

export default routes