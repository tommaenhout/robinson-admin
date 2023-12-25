
import { inputTypes } from "../../constants/inputTypes";
import SearchInput from "../SearchInput";
import CustomInput from "../CustomInput";
import CustomInputNumber from "../CustomInputNumber";
import CustomInputPassword from "../CustomInputPassword";

// component that picks an input type

const InputPicker = ({ input }) => {
    switch (input.type) {
      case inputTypes.search:
        return (
          <SearchInput
            input={input}
           />
        );
      case inputTypes.text:
        return (
          <CustomInput 
          input = {input}
          />
        );
      case inputTypes.number:
        return (
          <CustomInputNumber 
          input = {input}
          />
        );
      case inputTypes.password:
        return (
          <CustomInputPassword 
          input = {input}
          />
        );
      default:
        return null;
    }
  };

  export default InputPicker;