import {Block} from '../../utils/Block.ts';
import {InputProps} from "../../models/project.model.ts";
import {inputFocusOut} from "../../helpers/inputFocusOut.helper.ts";

export class Input extends Block {
    constructor(props: InputProps) {
        super('div', {...props, events: {
                focusout: (e: Event) => {
                    inputFocusOut(e)
                }
        }});
    }
    
    render(): DocumentFragment {
       return  this.compile(`
            <div class="fields-list">
                {{#each data}}
                    <input class="input-styled {{className}}" type={{this.type}} name="{{this.name}}" {{#if this.value}} value={{this.value}}
                        {{/if}} {{#if placeholder}} placeholder="{{placeholder}}" {{/if}}
                        {{#if this.pattern}} pattern={{this.pattern}} {{/if}}
                        {{#if this.readonly}} readonly {{/if}}
                        required />
                {{/each}}
            </div>
        `, this.props);
    }
}
