import {Link} from "../../../components/link";
import {Block} from "../../../utils/Block.ts";

export class NotFoundPage extends Block {

   constructor() {
      super('div', {
         chatPageLink: Link({
            to: '/chats',
            content: 'назад к чатам'
         })
      });
   }
   
   init() {
   
   }
   
   render() {
      return this.compile(
          `
          <div class="wrapper-not-found-page">
              <div class="wrapper-content">
                  <img src='/assets/error-not-found.svg' alt="not-found"/>
                  {{{ chatPageLink }}}
              </div>
          </div>
`, this.props)
   }
}
