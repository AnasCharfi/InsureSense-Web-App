import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from "./contact.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Contact",
      urls: [{ title: "Contact", url: "/contact" }, { title: "Contact" }],
    },
    component: ContactComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class ContactModule {}
