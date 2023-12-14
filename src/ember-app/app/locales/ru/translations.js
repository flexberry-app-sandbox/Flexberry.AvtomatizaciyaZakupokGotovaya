import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAvtomatizaciya_zakupok_gotovayaЕдиницыИзмерLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l';
import IISAvtomatizaciya_zakupok_gotovayaЗаказПостLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l';
import IISAvtomatizaciya_zakupok_gotovayaКонтрагентыLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l';
import IISAvtomatizaciya_zakupok_gotovayaНоменклатураLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l';
import IISAvtomatizaciya_zakupok_gotovayaОрганизацииLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l';
import IISAvtomatizaciya_zakupok_gotovayaОтчетОЗакLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l';
import IISAvtomatizaciya_zakupok_gotovayaПланЗакупокLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l';
import IISAvtomatizaciya_zakupok_gotovayaСкладыLForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l';
import IISAvtomatizaciya_zakupok_gotovayaЕдиницыИзмерEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-e';
import IISAvtomatizaciya_zakupok_gotovayaЗаказПостEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-e';
import IISAvtomatizaciya_zakupok_gotovayaКонтрагентыEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-e';
import IISAvtomatizaciya_zakupok_gotovayaНоменклатураEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-e';
import IISAvtomatizaciya_zakupok_gotovayaОрганизацииEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-организации-e';
import IISAvtomatizaciya_zakupok_gotovayaОтчетОЗакEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-e';
import IISAvtomatizaciya_zakupok_gotovayaПланЗакупокEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-e';
import IISAvtomatizaciya_zakupok_gotovayaСкладыEForm from './forms/i-i-s-avtomatizaciya-zakupok-gotovaya-склады-e';
import IISAvtomatizaciya_zakupok_gotovayaЕдиницыИзмерModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер';
import IISAvtomatizaciya_zakupok_gotovayaЗаказПостModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост';
import IISAvtomatizaciya_zakupok_gotovayaКонтрагентыModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты';
import IISAvtomatizaciya_zakupok_gotovayaНоменклатураModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура';
import IISAvtomatizaciya_zakupok_gotovayaОрганизацииModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-организации';
import IISAvtomatizaciya_zakupok_gotovayaОтчетОЗакModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак';
import IISAvtomatizaciya_zakupok_gotovayaПланЗакупокModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок';
import IISAvtomatizaciya_zakupok_gotovayaПланModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-план';
import IISAvtomatizaciya_zakupok_gotovayaСкладыModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-склады';
import IISAvtomatizaciya_zakupok_gotovayaТЧЗаказModel from './models/i-i-s-avtomatizaciya-zakupok-gotovaya-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер': IISAvtomatizaciya_zakupok_gotovayaЕдиницыИзмерModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост': IISAvtomatizaciya_zakupok_gotovayaЗаказПостModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты': IISAvtomatizaciya_zakupok_gotovayaКонтрагентыModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура': IISAvtomatizaciya_zakupok_gotovayaНоменклатураModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-организации': IISAvtomatizaciya_zakupok_gotovayaОрганизацииModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак': IISAvtomatizaciya_zakupok_gotovayaОтчетОЗакModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок': IISAvtomatizaciya_zakupok_gotovayaПланЗакупокModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-план': IISAvtomatizaciya_zakupok_gotovayaПланModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-склады': IISAvtomatizaciya_zakupok_gotovayaСкладыModel,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-т-ч-заказ': IISAvtomatizaciya_zakupok_gotovayaТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupok_gotovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupok_gotovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupok_gotovaya',
          title: 'Avtomatizaciya_zakupok_gotovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочник: {
            caption: 'Справочник',
            title: 'Справочник',
            'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l': {
              caption: 'Заказ поставщику',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l': IISAvtomatizaciya_zakupok_gotovayaЕдиницыИзмерLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l': IISAvtomatizaciya_zakupok_gotovayaЗаказПостLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l': IISAvtomatizaciya_zakupok_gotovayaКонтрагентыLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l': IISAvtomatizaciya_zakupok_gotovayaНоменклатураLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l': IISAvtomatizaciya_zakupok_gotovayaОрганизацииLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l': IISAvtomatizaciya_zakupok_gotovayaОтчетОЗакLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l': IISAvtomatizaciya_zakupok_gotovayaПланЗакупокLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l': IISAvtomatizaciya_zakupok_gotovayaСкладыLForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-e': IISAvtomatizaciya_zakupok_gotovayaЕдиницыИзмерEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-e': IISAvtomatizaciya_zakupok_gotovayaЗаказПостEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-e': IISAvtomatizaciya_zakupok_gotovayaКонтрагентыEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-e': IISAvtomatizaciya_zakupok_gotovayaНоменклатураEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-организации-e': IISAvtomatizaciya_zakupok_gotovayaОрганизацииEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-e': IISAvtomatizaciya_zakupok_gotovayaОтчетОЗакEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-e': IISAvtomatizaciya_zakupok_gotovayaПланЗакупокEForm,
    'i-i-s-avtomatizaciya-zakupok-gotovaya-склады-e': IISAvtomatizaciya_zakupok_gotovayaСкладыEForm
  },

});

export default translations;
