import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.автоматизация-закупок.caption'),
          title: i18n.t('forms.application.sitemap.автоматизация-закупок.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-номенклатура-l.title'),
              icon: 'paperclip',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-организации-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-контрагенты-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-склады-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-avtomatizaciya-zakupok-gotovaya-единицы-измер-l.title'),
              icon: 'book',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok-gotovaya-заказ-пост-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok-gotovaya-план-закупок-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-avtomatizaciya-zakupok-gotovaya-отчет-о-зак-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})