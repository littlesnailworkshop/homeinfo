import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ProductListComponent} from'./product-list.component'
import {ProductEditorComponent} from'./product-editor.component'

const routes:Routes=[
    
{path:'',redirectTo:"products", pathMatch :'full' },
{path:'products',component:ProductListComponent},
{path:'products/edit/:id',component:ProductEditorComponent},


]
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
