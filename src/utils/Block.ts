import {nanoid} from "nanoid";
import {EventBus} from "./EventBus.ts";
import * as HandleBars from "handlebars";

export class Block<P extends  Record<string, any> = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    } as const;
    
    public id = nanoid(6).replace(/[^a-zA-Zа-яА-Я]/g, "");
    protected props: P;
    public children: Record<string, Block>;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;
    private readonly _meta: {tagName: string; props: P}
    
    /** JSDoc
     * @param {string} tagName
     * @param propsWithChildren
     *
     * @returns {void}
     */
    
    constructor(tagName = 'div', propsWithChildren: P) {
        const eventBus = new EventBus();
        
        const {props, children} = this._getChildrenAndProps(propsWithChildren);
        
        this._meta = {
            tagName,
            props: props as P
        };
        
        this.children = children;
        
        this.props = this._makePropsProxy(props);
        
        this.eventBus = () => eventBus;
        
        this._registerEvents(eventBus);
        
        eventBus.emit(Block.EVENTS.INIT);
        
    }
    
    _getChildrenAndProps(childrenAndProps: P): {props: P, children: Record<string, Block>} {
        
        const props: Record<string, unknown> = {};
        const children: Record<string, Block> ={}
        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if(value instanceof Block) {
                children[key as string] = value
            } else {
                props[key] = value
            }
        });
        
        return {props: props as P, children}
    }
    
    _addEvents() {
        const  {events = {}} = this.props as P & {events: Record<string, () => void>};
        Object.keys(events).forEach((eventName => {
            this._element?.addEventListener(eventName, events[eventName])
        }))
    }
    
    _removeEvents() {
        const  {events = {}} = this.props as P & {events: Record<string, () => void>};
        Object.keys(events).forEach((eventName => {
            this._element?.removeEventListener(eventName, events[eventName])
        }))
    }
    
    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    
    private _init() {
        this._createResources();
        this.init()
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    
    protected init() {}
    
    _componentDidMount() {
        this.componentDidMount();
    }
    
    componentDidMount() {}
    
    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach(child => child.dispatchComponentDidMount())
    }
    
    private _componentDidUpdate(oldProps: P, newProps: P) {
        if (this.componentDidUpdate(oldProps, newProps)) {
                this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }
    
    protected componentDidUpdate(oldProps: P, newProps: P) {
        console.log(oldProps, newProps)
        return true;
        
    }
    
    setProps = (nextProps: P) => {
        if(!nextProps) {
            return;
        }
        
        Object.assign(this.props, nextProps)
    }
    
    get element() {
        return this._element;
    }
    
    private _render() {
        const fragment = this.render();
        
        this._element!.innerHTML = '';
        
        this._removeEvents();
        
        this._element!.append(fragment)
        
        this._addEvents()
    }
    
    protected compile(template: string, context: { [key: string]: string }) {
        const contextAndStubs = {...context}
        
        Object.entries(this.children).forEach(([name, component]) => {
            contextAndStubs[name] = `<div data-id="${component.id}"</div>`
        })
        
        const html = HandleBars.compile(template)(contextAndStubs);
        
        const temp =  document.createElement('template');
        
        temp.innerHTML = html
       
        
        Object.entries(this.children).forEach(([_, component]) => {
            
            const stub = temp.content.querySelector(`[data-id=${component.id}]`);
            
            if (!stub) {
                return
            }
            
            component.element!.append(...Array.from(stub.childNodes));
            
            stub.replaceWith(component.element!);
        });
        
        return temp.content
    }
    
    protected render(): DocumentFragment {
        return new DocumentFragment();
    }
    
    _makePropsProxy(props: P) {

        const self = this;
        
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop as string] ;
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: function (target, prop, value) {
                (target[prop as string] as P) = value;
                
                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
}
