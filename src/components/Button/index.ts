import {Block} from '../../utils/Block.ts';
import {ButtonProps} from '../../models/project.model.ts';
export class Button extends Block {
    constructor({props}: { props: ButtonProps & {events?: any} }) {
        super('div', {...props});
    }
    render(): DocumentFragment {
        return this.compile(`
             <button class="button-styled" type="submit">{{{ text }}}</button>
        `, this.props)
    }
}
