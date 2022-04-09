import {PopoverController, ToastController} from '@ionic/angular';
import {GameEditComponent} from '../components/game-edit/game-edit.component';
import {GameSettingsComponent} from '../components/game-settings/game-settings.component';
import {GameTypeEditComponent} from '../components/game-type-edit/game-type-edit.component';
import {PlayerEditComponent} from '../components/player-edit/player-edit.component';
import {IGame, IGameType, IPlayer} from './model';

export class Utils {

  static async presentUndoToast(toastController: ToastController, name: string, handler: () => boolean | void) {
    while (await toastController.getTop()) {
      await toastController.dismiss(null, 'cancel');
    }
    const toast = await toastController.create({
                                                 header:   'Undo Delete',
                                                 duration: 8000,
                                                 message:  name,
                                                 position: 'bottom',
                                                 buttons:  [
                                                   {
                                                     side: 'start',
                                                     icon: 'undo',
                                                     text: 'Undo',
                                                     role: 'destructive',
                                                     handler
                                                   }, {
                                                     icon:    'close',
                                                     text:    'Schließen',
                                                     role:    'cancel',
                                                     handler: () => {}
                                                   }
                                                 ]
                                               });
    return toast.present();
  }

  static async presentGameTypePopover(popoverController: PopoverController, gameType: IGameType, onDismiss?: (data) => void) {
    const popover = await popoverController.create({
                                                     component:      GameTypeEditComponent,
                                                     componentProps: {gameType},
                                                     translucent:    true,
                                                     animated:       true,
                                                     cssClass:       'type-popover'
                                                   });
    if (onDismiss) {
      popover.onDidDismiss().then((value) => onDismiss(value));
    }
    return popover.present();
  }

  static async presentPlayerPopover(popoverController: PopoverController, player: IPlayer, onDismiss?: (data) => void) {
    const popover = await popoverController.create({
                                                     component:      PlayerEditComponent,
                                                     componentProps: {player},
                                                     translucent:    true,
                                                     animated:       true,
                                                     cssClass:       'type-popover'
                                                   });
    if (onDismiss) {
      popover.onDidDismiss().then((value) => onDismiss(value));
    }
    return popover.present();
  }

  static async presentGamePopover(popoverController: PopoverController, game: IGame, onDismiss?: (data) => void) {
    const popover = await popoverController.create({
                                                     component:      GameEditComponent,
                                                     componentProps: {game},
                                                     translucent:    true,
                                                     animated:       true,
                                                     cssClass:       'ion-popover-game-edit'
                                                   });
    if (onDismiss) {
      popover.onDidDismiss().then((value) => onDismiss(value));
    }
    return popover.present();
  }

  // tslint:disable-next-line:max-line-length
  static async presentGameSettingsPopover(popoverController: PopoverController, mode: 'games' | 'players' | 'gamesForPlayer', onDismiss?: (data) => void, event?: Event) {
    const popover = await popoverController.create({
                                                     component:      GameSettingsComponent,
                                                     componentProps: {mode},
                                                     translucent:    true,
                                                     animated:       true,
                                                     cssClass:       '',
                                                     event
                                                   });
    if (onDismiss) {
      popover.onDidDismiss().then((value) => onDismiss(value));
    }
    return popover.present();
  }

}
