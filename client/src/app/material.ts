import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material';
import { MatSelectModule} from '@angular/material/select';


const modules = [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class MaterialModule {}

