import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const types = {
  INPUT: "input",
  AREA: "testarea",
  SELECT: "select",
};

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  btnText,
}) {
  const renderInputByComponentType = (ctrlItem) => {
    let element = null;
    const value = formData[ctrlItem.name];
    switch (ctrlItem.conponentType) {
      case types.INPUT:
        element = (
          <Input
            name={ctrlItem.name}
            placeholder={ctrlItem.placeholder}
            id={ctrlItem.name}
            type={ctrlItem.type}
            value={value}
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, [ctrlItem.name]: event.target.value };
              })
            }
          />
        );
        break;
      case types.AREA:
        element = (
          <Textarea
            name={ctrlItem.name}
            placeholder={ctrlItem.placeholder}
            id={ctrlItem.name}
            type={ctrlItem.type}
            value={value}
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, [ctrlItem.name]: event.target.value };
              })
            }
          />
        );
        break;
      case types.SELECT:
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData((prev) => {
                return { ...prev, [ctrlItem.name]: value };
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={ctrlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {ctrlItem.options &&
                ctrlItem.options.length > 0 &&
                ctrlItem.options.map((optionItm) => (
                  <SelectItem key={optionItm.value} value={optionItm.value}>
                    {optionItm.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        );
        break;

      default:
        element = (
          <Input
            name={ctrlItem.name}
            placeholder={ctrlItem.placeholder}
            id={ctrlItem.name}
            type={ctrlItem.type}
            value={value}
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, [ctrlItem.name]: event.target.value };
              })
            }
          />
        );
        break;
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 mb-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button>{btnText || "Submit"}</Button>
    </form>
  );
}

export default CommonForm;
