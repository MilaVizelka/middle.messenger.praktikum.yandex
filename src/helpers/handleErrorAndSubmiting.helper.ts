
export const handleErrorAndSubmitting = (isErr: boolean) => {
    
    const wrapperElement = document.querySelector('.fields-list');
    const errorElement =  document.createElement('span');
    const errorElements = document.querySelectorAll('.error');
    
    if (isErr) {
        
        errorElement.classList.add('error');
        errorElement.textContent = 'Ошибка ввода';
        
        errorElements.forEach((element) => {
            element.remove()
        });
        
        wrapperElement?.appendChild(errorElement)
    }
    
    !isErr && errorElements.forEach((element) => {
        element.remove();
    });
    
}
