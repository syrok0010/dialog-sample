import { Component, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly dialog = this.dialogService.open(
    new PolymorpheusComponent(DialogComponent, this.injector),
    {
      label: 'Авторизация',
      dismissible: true,
      size: 's',
    }
  );
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}
  open() {
    console.log('open');
    this.dialog.subscribe({
      next: () => {
        console.info(`Dialog emitted`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }
}
