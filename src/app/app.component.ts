import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    public constructor(
        private permissionsService: NgxPermissionsService,
        private roleService: NgxRolesService
    ) {

    }

    public async ngOnInit(): Promise<void> {

        // this.permissionsService.addPermission('a1');
        // hasPermission = await this.permissionsService.hasPermission('a1');
        // console.log('after:', hasPermission);

        this.roleService.addRoleWithPermissions('admin', [
            'a1'
        ]);

        let hasPermission = await this.permissionsService.hasPermission('a1');
        console.log('before:', hasPermission);
    }

    public async test(): Promise<void> {
        let f = await this.roleService.hasOnlyRoles('admin');
        console.log('before:', f);
        // this.roleService.flushRoles();
        this.roleService.flushRolesAndPermissions();
        f = await this.roleService.hasOnlyRoles('admin');
        console.log('after:', f);
    }
}
