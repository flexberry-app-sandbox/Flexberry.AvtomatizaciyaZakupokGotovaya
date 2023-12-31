export default {
  projections: {
    ПланЗакупокE: {
      номер: {
        __caption__: 'Номер'
      },
      датаНачала: {
        __caption__: 'Дата'
      },
      организации: {
        __caption__: 'Организации',
        организация: {
          __caption__: 'Организация'
        }
      },
      склады: {
        __caption__: 'Склады',
        склад: {
          __caption__: 'Склад'
        }
      },
      контрагенты: {
        __caption__: 'Контрагенты',
        контрагент: {
          __caption__: 'Контрагент'
        }
      },
      план: {
        __caption__: 'План',
        номенклатура: {
          __caption__: 'Номенклатура',
          номенклатура: {
            __caption__: 'Номенклатура'
          },
          единицыИзмер: {
            __caption__: '',
            единицаИзмер: {
              __caption__: 'Единица Измерения'
            }
          },
          контрагенты: {
            __caption__: '',
            контрагент: {
              __caption__: 'Контрагент'
            }
          }
        },
        количество: {
          __caption__: 'Количество'
        },
        этоУслуга: {
          __caption__: 'Это услуга'
        }
      }
    },
    ПланЗакупокL: {
      номер: {
        __caption__: 'Номер'
      },
      датаНачала: {
        __caption__: 'Дата начала'
      },
      организации: {
        __caption__: 'Организация',
        организация: {
          __caption__: 'Организация'
        }
      },
      контрагенты: {
        __caption__: 'Контрагент',
        контрагент: {
          __caption__: 'Контрагент'
        }
      },
      склады: {
        __caption__: 'Склад',
        склад: {
          __caption__: 'Склад'
        }
      }
    }
  },
  validations: {
    датаНачала: {
      __caption__: 'Дата'
    },
    номер: {
      __caption__: 'Номер'
    },
    контрагенты: {
      __caption__: 'Контрагенты'
    },
    организации: {
      __caption__: 'Организации'
    },
    склады: {
      __caption__: 'Склады'
    },
    план: {
      __caption__: 'План'
    }
  }
};
