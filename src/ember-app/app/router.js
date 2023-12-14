import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-организации-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-организации-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-организации-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-организации-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l');
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-склады-e',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok-gotovaya-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok-gotovaya-склады-e/new' });
});

export default Router;
