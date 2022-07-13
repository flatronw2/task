import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  clientForm!: FormGroup;
  actionBtn: string = 'Save';

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      duration: ['', Validators.required],
      numberOfAccounts: ['', Validators.required],
      dateOfCreation: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.clientForm.controls['name'].setValue(this.editData.name);
      this.clientForm.controls['code'].setValue(this.editData.code);
      this.clientForm.controls['duration'].setValue(this.editData.duration);
      this.clientForm.controls['numberOfAccounts'].setValue(
        this.editData.numberOfAccounts
      );
      this.clientForm.controls['dateOfCreation'].setValue(
        this.editData.dateOfCreation
      );
    }
  }

  addClient() {
    if (!this.editData) {
      if (this.clientForm.valid) {
        this.clientService.postClient(this.clientForm.value).subscribe({
          next: () => {
            alert('Uspesno');
            this.clientForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error');
          },
        });
      }
    } else {
      this.updateClient()
    }
  }

  updateClient(){
    this.clientService.updateClient(this.clientForm.value, this.editData.id)
    .subscribe({
      next: (res) => {
        alert("Product updated");
        this.clientForm.reset();
        this.dialogRef.close('Update');
      },
      error: () => {
        alert('error');
      }
    })
  }
}