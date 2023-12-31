import { Routes } from "@angular/router";
import { GroupsComponent } from './groups/groups.component';
import { CreateGroupComponent } from "./create-group/create-group.component";


export const appRoutes: Routes = [
    { path: '', component: GroupsComponent },
    { path: 'groups', component: GroupsComponent },
    {path: 'create', component:CreateGroupComponent}
]