import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok-gotovaya-склады', 'Unit | Serializer | i-i-s-avtomatizaciya-zakupok-gotovaya-склады', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-zakupok-gotovaya-склады',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-zakupok-gotovaya-сост-оплаты',
    'transform:i-i-s-avtomatizaciya-zakupok-gotovaya-сост-отгрузки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
