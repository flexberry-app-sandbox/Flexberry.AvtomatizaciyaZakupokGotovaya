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
    /// Контрагенты.
    /// </summary>
    // *** Start programmer edit section *** (Контрагенты CustomAttributes)

    // *** End programmer edit section *** (Контрагенты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентыE", new string[] {
            "Контрагент as \'Контрагент\'"})]
    [View("КонтрагентыL", new string[] {
            "Контрагент as \'Контрагент\'"})]
    public class Контрагенты : ICSSoft.STORMNET.DataObject
    {
        
        private string fКонтрагент;
        
        // *** Start programmer edit section *** (Контрагенты CustomMembers)

        // *** End programmer edit section *** (Контрагенты CustomMembers)

        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.Контрагент CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.Контрагент CustomAttributes)
        [StrLen(255)]
        public virtual string Контрагент
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.Контрагент Get start)

                // *** End programmer edit section *** (Контрагенты.Контрагент Get start)
                string result = this.fКонтрагент;
                // *** Start programmer edit section *** (Контрагенты.Контрагент Get end)

                // *** End programmer edit section *** (Контрагенты.Контрагент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.Контрагент Set start)

                // *** End programmer edit section *** (Контрагенты.Контрагент Set start)
                this.fКонтрагент = value;
                // *** Start programmer edit section *** (Контрагенты.Контрагент Set end)

                // *** End programmer edit section *** (Контрагенты.Контрагент Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентыE", typeof(IIS.Avtomatizaciya_zakupok_gotovaya.Контрагенты));
                }
            }
            
            /// <summary>
            /// "КонтрагентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентыL", typeof(IIS.Avtomatizaciya_zakupok_gotovaya.Контрагенты));
                }
            }
        }
    }
}
