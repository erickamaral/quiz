import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FinishForm extends FormGroup {

    public constructor() {
        super({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('')
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

    public getData() {
        return {
            'name': this.get('name').value,
            'email': this.get('email').value || '',
            'points': localStorage.getItem('points')
        };
    }
}
