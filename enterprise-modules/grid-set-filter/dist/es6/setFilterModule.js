import { ModuleNames } from "@ag-community/grid-core";
import { EnterpriseCoreModule } from "@ag-enterprise/grid-core";
import { SetFilter } from "./setFilter/setFilter";
import { SetFloatingFilterComp } from "./setFilter/setFloatingFilter";
export var SetFilterModule = {
    moduleName: ModuleNames.SetFilterModule,
    beans: [],
    userComponents: [
        { componentName: 'agSetColumnFilter', componentClass: SetFilter },
        { componentName: 'agSetColumnFloatingFilter', componentClass: SetFloatingFilterComp },
    ],
    dependantModules: [
        EnterpriseCoreModule
    ]
};