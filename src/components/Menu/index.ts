import {MenuProps} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

export class Menu  extends Block {
    constructor(props: MenuProps) {
        super('div', props);
    }
    
    render(): DocumentFragment {
        return this.compile(`
            <nav class>
                <ul class="menu-styled">
                    {{#each this}}
                    <li>
                        <a href={{link}}>
                            {{item}}
                        </a>
                    </li>
                    {{/each}}
                </ul>
            </nav>
`, this.props)
    }
}
