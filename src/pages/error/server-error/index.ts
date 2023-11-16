import {Link} from "../../../components/Link";
import {Title} from "../../../components/Title";
import {Block} from "../../../utils/Block.ts";
import {ProjectLinksEnum} from "../../../models/project.model.ts";

export class ServerErrorPage extends Block {
   
   constructor() {
      super('div', '');
   }
   
   init() {
      this.children.link = new Link({to: `${ProjectLinksEnum["chats"]}`, content: 'назад к чатам'});
      this.children.title = new Title({title: 500});
   }
   
   render() {
      return this.compile(
          `
   <div class="wrapper-server-error-page">
       <div class="wrapper-content">
           {{{ title }}}
           <span>Мы уже фиксим) еще немного</span>
           {{{ link }}}
       </div>
  </div>
`, this.props)
   }
}
