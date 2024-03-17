import store from "../utils/Store.ts";

export const handleError = (isErr: boolean) => {
    const wrapperElement = document.querySelector('.fields-list');
    const errorElements = document.querySelectorAll('.error');
    
    if (isErr) {
        const errorElement = document.createElement('span');
        errorElement.classList.add('error');
        store.set('validateMessage', 'Ошибка ввода данных');
        errorElement.textContent = store.getState().validateMessage;
        errorElements.forEach((element) => {
            element.remove();
        });

        wrapperElement?.appendChild(errorElement);
    }
    
    if (store.getState().responseAuthError) {
        const errorElement = document.createElement('span');
        errorElement.classList.add('error');
        errorElement.textContent = store.getState().responseAuthError;
        
        errorElements.forEach((element) => {
            element.remove();
        });
        
        wrapperElement?.appendChild(errorElement);
    }
}
