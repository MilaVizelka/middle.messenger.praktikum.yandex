export type InputProps = {
    placeholder?: string;
    type?: string;
    name?: string;
    minLength?: number;
    pattern?: string;
    title?: string;
}

export type SignInInputValuesType = {
    login: string;
    password: string;
}

export type SettingsInputValuesType = {
    login: string,
    password: string,
    first_name: string,
    second_name: string,
    email: string,
    phone: string
}

export type MenuProps = {
    item?: string;
    label?: string;
}

export type ButtonProps = {
    text: string;
    type: string;
}

export type CounterProps = {
    text: string;
}

export type ApiOptionsType = {
    method: string,
    data: any,
    headers: any,
    timeout: number
}

export type LinkProps = {
    to: string;
    content?: string;
}

export type TitleProps =  {
    title: string | number,
}

export enum  ProjectLinksEnum  {
    home = '/',
    'sign-in' = '/sign-in',
    'sign-up' = '/sign-up',
    'settings' = '/settings',
    'not-found' = '/not-found',
    'server-error' = '/server-error',
    'chats' = '/chats'
}
