import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgIf, NgFor} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule
    
  
    
    
  ],
  exports:[
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule

   
    
    
    
  ]
})
export class SharedModule { }
