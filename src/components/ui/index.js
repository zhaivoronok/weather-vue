import cButton from "./cButton";
import cInput from "./cInput";

const ui = {
    install(Vue, options){
        Vue.component(cButton.name, cButton);
        Vue.component(cInput.name, cInput);
    }
}

export default ui;