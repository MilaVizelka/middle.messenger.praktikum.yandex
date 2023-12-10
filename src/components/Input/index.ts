import {InputProps} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

export class Input extends Block {
    constructor(props: InputProps) {
        super('div', props);
    }
    
    render(): DocumentFragment {
       return  this.compile(`
            <div class="fields-list">
                {{#each this}}
                    <input class="input-styled {{className}}" type={{type}} name="{{name}}" {{#if value}} value={{value}}
                         {{/if}} {{#if placeholder}} placeholder="{{placeholder}}" {{/if}}
                         {{#if pattern}} pattern={{pattern}} {{/if}}
                         {{#if readonly}} readonly {{/if}}
                     required />
                {{/each}}
            </div>
        `, this.props);
    }
}
