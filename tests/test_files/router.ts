import { Path } from "havas-express/lib/src/decorators/class_decorator";
import { ComplexMiddleware, UseMiddleware } from "havas-express/lib/src/middleware";
import { Router } from "havas-express/lib/src/router";
import { Get, Post } from "havas-express/lib/src/decorators/method_decorator";
import { ExpressRequest, ExpressResponse, PathVariable, ResultWrapper } from "havas-express/lib/index";

interface User {

}

@Path('/user')
@ResultWrapper(({result, response}) => {response.send(result)})
export class UserRouter extends Router {

  @Get('/', (req, res, next) => {console.log('index called'); next();},)
  /**
   * Some comment here
   */
  index (req: ExpressRequest, res: ExpressResponse): string {
    throw new Error('Unimplemented');
  }

  @Get('/all', (req, res, n) => {console.log('get_all called'); n();} )
  get_all (): User[] {
    throw new Error('Unimplemented');
  }

  @Post('/:id')
  /**
   * Get's user by id
   */
  get_by_id (@PathVariable('id') id: number): User {
    throw new Error('');
  }
}

