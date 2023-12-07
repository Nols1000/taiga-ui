import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-block-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiRadioBlockExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('orange'),
    });
}
