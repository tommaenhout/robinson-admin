
import { inputTypes } from "../../constants/inputTypes";
import SearchInput from "../SearchInput";

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
          <CustomInput/>
        );
      default:
        return null;
    }
  };

  export default InputPicker;