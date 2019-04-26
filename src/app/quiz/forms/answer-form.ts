import { FormControl, FormGroup, Validators } from '@angular/forms';

export class AnswerForm extends FormGroup {

    public constructor() {
        super({
            answer: new FormControl('', [Validators.required])
        });
    }

    public controlIsInvalid(controlName: string): boolean {
        const control = this.get(controlName);
        if (control) {
            return control.invalid && control.touched;
        }
        return false;
    }

    public isValid(): boolean {
        this.markAllTouched();

        return !this.invalid;
    }

    public markAllTouched() {
        for (const control in this.controls) {
            this.get(control).markAsTouched();
        }

    }
}
