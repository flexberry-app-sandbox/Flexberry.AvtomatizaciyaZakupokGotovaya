import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок', 'Unit | Model | i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-организации',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-план',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-склады',
    'model:i-i-s-avtomatizaciya-zakupok-gotovaya-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
