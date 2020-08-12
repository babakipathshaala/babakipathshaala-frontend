import { ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators {


  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  static olderThanValidator(minAge: number, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      if ((new Date()).getFullYear() - (new Date(control.value)).getFullYear() >= minAge) {
        // const valid = (new Date()).getFullYear() - (new Date(control.value)).getFullYear() >= minAge;
        return null;
      } else if ((new Date()).getFullYear() - (new Date(control.value)).getFullYear() == minAge - 1) {
        if ((new Date()).getMonth() - (new Date(control.value)).getMonth() > 0) {
          return null;
        } else if ((new Date()).getMonth() - (new Date(control.value)).getMonth() == 0) {
          if ((new Date()).getDate() - (new Date(control.value)).getDate() > 0) {
            return null;
          } else {
            return error;
          }
        } else {
          return error;
        }
      } else {
        return error;
      }
    }
  }


  static lessThanValidator(maxAge: number, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }



      const valid = (new Date()).getFullYear() - (new Date(control.value)).getFullYear() > maxAge;

      return valid ? error : null;
    }
  }
}