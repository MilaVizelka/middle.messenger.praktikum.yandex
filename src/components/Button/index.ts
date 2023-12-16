import {Block} from '../../utils/Block.ts';
import {ButtonProps} from '../../models/project.model.ts';
import {submitButtonClick} from "../../helpers/submitButtonClick.helper.ts";
export class Button extends Block {
    constructor({props}: { props: ButtonProps }) {
        super('div', {...props, events: {
                click: (e: Event) => {
                    submitButtonClick(e)
                }
            }});
    }
    render(): DocumentFragment {
        return this.compile(`
             <button class="button-styled" type="submit">{{ text }}</button>
        `, this.props)
    }
}
