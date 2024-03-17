import {Link} from '../../../components/Link';
import {Block} from '../../../utils/Block.ts';
import Router from "../../../utils/Router.ts";

export class NotFoundPage extends Block {
   
   constructor() {
      super('div', {});
   }
   
   init() {
      this.children.link = new Link({to: '/messenger', content: 'назад к чатам', router: Router});
   }
   
   render() {
      return this.compile(
          `
          <div class="wrapper-not-found-page">
              <div class="wrapper-content">
                  <img src='/assets/error-not-found.svg' alt="not-found"/>
                  {{{ link }}}
              </div>
          </div>
`, this.props)
   }
}
