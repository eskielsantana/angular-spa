import { Routes } from '@angular/router';

import { BoardComponent } from './pages/board/board.component';
import { TableComponent } from './pages/table/table.component';

export const routes: Routes = [
    {
        path: "",
        component: BoardComponent,
    },{
        path: "board",
        component: BoardComponent,
    },{
        path: "table",
        component: TableComponent,
    },{
        path: "*",
        redirectTo: "/"
    }
];
