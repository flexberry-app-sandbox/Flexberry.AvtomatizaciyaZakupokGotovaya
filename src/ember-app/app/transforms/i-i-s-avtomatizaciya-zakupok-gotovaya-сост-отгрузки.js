import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОтгрузкиEnum from '../enums/i-i-s-avtomatizaciya-zakupok-gotovaya-сост-отгрузки';

export default FlexberryEnum.extend({
  enum: СостОтгрузкиEnum,
  sourceType: 'IIS.Avtomatizaciya_zakupok_gotovaya.СостОтгрузки'
});
