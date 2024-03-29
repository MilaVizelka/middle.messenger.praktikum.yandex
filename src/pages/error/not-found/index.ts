import {Link} from '../../../components/Link';
import {Block} from '../../../utils/Block.ts';
import {ProjectLinksEnum} from '../../../models/project.model.ts';

export class NotFoundPage extends Block {
   
   constructor() {
      super('div', {});
   }
   
   init() {
      this.children.link = new Link({to: `${ProjectLinksEnum["chats"]}`, content: 'назад к чатам'});
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
