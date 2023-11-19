import {Block} from "../../utils/Block.ts";
import {CounterProps} from "../../models/project.model.ts";

export class Counter extends Block {
    constructor(props:CounterProps) {
        super('span', props);
    }
    
    render(): DocumentFragment {
        return this.compile(`
             <span class="counter" >{{ text }}</span>
        `, this.props)
    }
}
