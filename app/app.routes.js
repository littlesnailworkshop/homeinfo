"use strict";
const router_1 = require('@angular/router');
const product_list_component_1 = require('./product-list.component');
const product_editor_component_1 = require('./product-editor.component');
const routes = [
    { path: '', redirectTo: "products", pathMatch: 'full' },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/edit/:id', component: product_editor_component_1.ProductEditorComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map