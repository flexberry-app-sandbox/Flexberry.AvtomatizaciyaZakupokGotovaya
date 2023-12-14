﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avtomatizaciya_zakupok_gotovaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ пост.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказПост CustomAttributes)

    // *** End programmer edit section *** (ЗаказПост CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ пост")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказПостE", new string[] {
            "Номер as \'Номер\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Организации.Организация as \'Организация\'",
            "Организации as \'Организации\'",
            "Склады as \'Склады\'",
            "Склады.Склад as \'Склад\'",
            "Контрагенты as \'Контрагенты\'",
            "Контрагенты.Контрагент as \'Контрагент\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "СуммаДокумента as \'Сумма документа\'"}, Hidden=new string[] {
            "Организации.Организация",
            "Склады.Склад",
            "Контрагенты.Контрагент"})]
    [AssociatedDetailViewAttribute("ЗаказПостE", "ТЧЗаказ", "ТЧЗаказE", true, "", "Заказ", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ЗаказПостE", "Организации", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Организация")]
    [MasterViewDefineAttribute("ЗаказПостE", "Склады", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Склад")]
    [MasterViewDefineAttribute("ЗаказПостE", "Контрагенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Контрагент")]
    [View("ЗаказПостL", new string[] {
            "Номер as \'Номер\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "СуммаДокумента as \'Сумма документа\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Склады.Склад as \'Склад\'",
            "Организации.Организация as \'Организация\'",
            "Контрагенты.Контрагент as \'Контрагент\'"})]
    public class ЗаказПост : IIS.Avtomatizaciya_zakupok_gotovaya.ОтчетОЗак
    {
        
        // *** Start programmer edit section *** (ЗаказПост CustomMembers)

        // *** End programmer edit section *** (ЗаказПост CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.ДатаНачала CustomAttributes)
        public override System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Get start)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Get start)
                System.DateTime result = base.ДатаНачала;
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Get end)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Set start)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Set start)
                base.ДатаНачала = value;
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Set end)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.ДатаОкончания CustomAttributes)
        public override System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Get start)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Get start)
                System.DateTime result = base.ДатаОкончания;
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Get end)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Set start)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Set start)
                base.ДатаОкончания = value;
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Set end)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Номер CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Номер CustomAttributes)
        public override int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Номер Get start)

                // *** End programmer edit section *** (ЗаказПост.Номер Get start)
                int result = base.Номер;
                // *** Start programmer edit section *** (ЗаказПост.Номер Get end)

                // *** End programmer edit section *** (ЗаказПост.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Номер Set start)

                // *** End programmer edit section *** (ЗаказПост.Номер Set start)
                base.Номер = value;
                // *** Start programmer edit section *** (ЗаказПост.Номер Set end)

                // *** End programmer edit section *** (ЗаказПост.Номер Set end)
            }
        }
        
        /// <summary>
        /// СостОтгрузки.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СостОтгрузки CustomAttributes)
        public override IIS.Avtomatizaciya_zakupok_gotovaya.СостОтгрузки СостОтгрузки
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Get start)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Get start)
                IIS.Avtomatizaciya_zakupok_gotovaya.СостОтгрузки result = base.СостОтгрузки;
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Get end)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Set start)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Set start)
                base.СостОтгрузки = value;
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Set end)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Set end)
            }
        }
        
        /// <summary>
        /// СостояниеОплаты.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты CustomAttributes)
        public override IIS.Avtomatizaciya_zakupok_gotovaya.СостОплаты СостояниеОплаты
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Get start)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Get start)
                IIS.Avtomatizaciya_zakupok_gotovaya.СостОплаты result = base.СостояниеОплаты;
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Get end)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Set start)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Set start)
                base.СостояниеОплаты = value;
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Set end)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Set end)
            }
        }
        
        /// <summary>
        /// СуммаВклНДС.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС CustomAttributes)
        public override bool СуммаВклНДС
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Get start)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Get start)
                bool result = base.СуммаВклНДС;
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Get end)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Set start)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Set start)
                base.СуммаВклНДС = value;
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Set end)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Set end)
            }
        }
        
        /// <summary>
        /// СуммаДокумента.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СуммаДокумента CustomAttributes)
        public override int СуммаДокумента
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Get start)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Get start)
                int result = base.СуммаДокумента;
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Get end)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Set start)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Set start)
                base.СуммаДокумента = value;
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Set end)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказПостE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПостE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПостE", typeof(IIS.Avtomatizaciya_zakupok_gotovaya.ЗаказПост));
                }
            }
            
            /// <summary>
            /// "ЗаказПостL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПостL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПостL", typeof(IIS.Avtomatizaciya_zakupok_gotovaya.ЗаказПост));
                }
            }
        }
    }
}
