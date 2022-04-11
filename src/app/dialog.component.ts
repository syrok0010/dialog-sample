import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  template: ` <p>dialog works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext
  ) {}
  enter() {
    this.context.completeWith();
  }
}
