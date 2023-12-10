export const regexLogin = new RegExp('^(?!\\d+$)[A-Za-z\\d\\-_]{3,20}$');
export const regexPassword = new RegExp('^(?=.*[A-Z])(?=.*\\d).{8,40}$');
export const regexEmail = new RegExp('^[\\w-\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
export const regexPhone = new RegExp('^\\+[0-9]{9,14}$|^[0-9]{10,15}$')
export const regexName =  new RegExp('^([A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё\\-]*)$')
