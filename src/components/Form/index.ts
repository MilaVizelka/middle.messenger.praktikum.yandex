import {Block} from '../../utils/Block.ts';
import {formSubmit} from "../../helpers/formSubmit.helper.ts";
export class Form extends Block {
    constructor(props: any) {
        super('div', {...props, events: {
                submit: (e: Event) => {
                    formSubmit(e)
                }
            }});
       }
    init() {
        const {input, button} = this.props.data;
        
        this.children.input = input;
        this.children.button = button;
        
    }
    render(): DocumentFragment {
        return this.compile(`
             <form id="form" name="form">
           
                {{{input}}}
                {{{button}}}
               
             </form>
        `, this.props)
    }
}
