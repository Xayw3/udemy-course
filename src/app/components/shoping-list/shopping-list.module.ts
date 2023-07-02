import { NgModule } from "@angular/core";
import { ShopingListComponent } from "./shoping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    ShopingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: ShopingListComponent, 
        canActivate: [AuthGuard], 
      }
    ]),
    SharedModule
  ]
})
export class ShoppingListModule {}