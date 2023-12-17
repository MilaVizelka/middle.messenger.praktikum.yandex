import {validationHelper} from "./validationInput.helper.ts";

export const formSubmit =  (event: Event) => {
    event.preventDefault();
    validationHelper(event);
    //TODO: доделать локигу по сбросу данных формы
    // (document.getElementById("form") as HTMLFormElement).reset();
   
}
