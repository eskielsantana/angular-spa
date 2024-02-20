import { Routes } from '@angular/router';

import { BoardComponent } from '../board/board.component';
import { TableComponent } from '../table/table.component';

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
