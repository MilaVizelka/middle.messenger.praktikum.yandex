import {Block} from '../../utils/Block.ts';
import {formSubmit} from "../../helpers/formSubmit.helper.ts";


export class Form extends Block {
    constructor(props: any) {
        super('div', {...props, events: {
                submit: (e: Event) =>
                formSubmit(e)
                
            }});
       }
    
    init() {
        const {input, button} = this.props.data;
        this.children.input = input;
        this.children.button = button;
    }
    
    public getInputData() {
        const inputValues: { [key: string]: any } = {};
        const input = this.children.input.element?.querySelectorAll('input');
        
        input?.forEach((child) => {
            inputValues[child.name] = child.value;
        });
       
        
        return inputValues;
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
