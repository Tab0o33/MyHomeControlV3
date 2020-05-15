import { Injectable } from '@angular/core';
import { ToasterService, Toast, ToasterConfig } from 'angular2-toaster';

@Injectable()
export class NotificationService {

    public config: ToasterConfig =
        new ToasterConfig({ positionClass: 'toast-top-center' });

    constructor(private toasterService: ToasterService) { }

    popToast() {
        this.toasterService.pop('error', 'Error', 'Une erreur est survenue');
    }

}
