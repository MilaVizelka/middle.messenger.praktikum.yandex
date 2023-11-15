import {Link} from "../../../components/link";
import {Title} from "../../../components/title";
import {Block} from "../../../utils/Block.ts";

export class ServerErrorPage extends Block {
   
   constructor() {
      super('div', {
         title: Title({
            title: '500'
         }),
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
   <div class="wrapper-server-error-page">
       <div class="wrapper-content">
           {{{ title }}}
           <span>Мы уже фиксим) еще немного</span>
           {{{ chatPageLink }}}
       </div>
  </div>
`, this.props)
   }
}
