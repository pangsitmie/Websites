import React from 'react'
import BELL_ICON from '../../assets/BELL_ICON.png'
import DATABASE_ICON from '../../assets/DATABASE_ICON.png'
import SEARCH3D_ICON from '../../assets/SEARCH3D_ICON.png'
import MANAGE_SYSTEM from '../../assets/MANAGE_SYSTEM.png'
import BACKEND_SYSTEM from '../../assets/BACKEND_SYSTEM.png'
import MULTIPLE_LANGUAGE from '../../assets/MULTIPLE_LANGUAGE.png'
import INTERNET_ICON from '../../assets/INTERNET_ICON.png'
import SLOT_MACHINE1 from '../../assets/slot_machine1.png'



import "./searchSystem.css"
const SearchSystem = () => {
    return (
        <div className='container'>
            <div className='container'>
                <div className='header__container'>
                    <h3 className='search_description'>
                        精確的數據統計 - 協助市場分析
                    </h3>
                    <h1 className='search_hero-title'>查帳系統</h1>
                </div>
            </div>

            {/* APP SERVICE TEXT */}
            <div className='search_service_text'>
                <h2>APP主控平台提供服務</h2>
                <p>即時提供管理所需報表及提升財務、庫存的管理作業效率，提供數據安全備份及彈性運算。即時洞察客戶需求及商機</p>
            </div>

            {/* DIV MACHINE REVENUE */}
            <div className='search_revenue'>
                <div className='search_revenue_img'>
                    <img src={SLOT_MACHINE1} alt="" />
                </div>
                <div className='search_revenue_desc'>
                    <div>
                        <h2>機台營收 <br /> 詳情查詢</h2>
                        <p>當單獨查詢機台營收狀況時，列表會列出該機台當日收入支出與總收入支出與品項等資訊，使管理者能夠打造個人的專屬風格</p>
                    </div>
                </div>
            </div>

            {/* DIV MULTIPLE LANGUAGE */}
            <div className='search_language'>
                <div>
                    <h2>支援多國語言</h2>
                    <p>目前支援繁簡體中文, 英文,  以及越南文</p>
                </div>
                <div className='search_language_img'>
                    <img src={MULTIPLE_LANGUAGE} alt="" />
                </div>
            </div>

            {/* DIV INTERNET */}
            <div className='search_internet'>
                <h2>快速連網</h2>
                <div className='search_internet_img'>
                    <img src={INTERNET_ICON} alt="" />
                </div>
                <p>只需簡單的開發，即可設備快速連網，便捷高效</p>
            </div>





            {/* div3 */}
            <div className='search_feature2'>
                <div className='ipick_feature_card ipick_card1'>
                    <h2>店家查詢</h2>
                    <p>列表會顯示已安裝查帳系統模組的店家名稱與地點，只要點選其中一個店家，即可查詢該店的營收項目</p>
                </div>
                <div className='ipick_feature_card ipick_card2'>
                    <h2>禮品監控</h2>
                    <p>當設備禮品低於一定數量時，系統便會推送消息給商戶，避免了因庫存不足而影響收益</p>
                </div>
                <div className='ipick_feature_card ipick_card3'>
                    <h2>機台查詢</h2>
                    <p>列表會顯示該店家內所有已安裝查帳系統的機台名稱，只要點選其中一個機台，即可單獨查詢該機台的營收資訊，列表最上方則會顯示該店家的總收入與總支出等資訊</p>
                </div>
            </div>

            {/* DIV4 */}
            <div className='search_provide_content'>
                <h2>APP主控平台提供服務</h2>
                <div className='search_provide_col'>
                    <div className='search_provide_card'>
                        <img src={BELL_ICON} alt="" />
                        <h3>自動通知</h3>
                        <p>客製化時段的推播通知，將依您所選擇的時段，隨時掌握目前營收狀況，消息不漏接，也可於列表內查詢自動更新的歷史資料</p>
                    </div>
                    <div className='search_provide_card'>
                        <img src={DATABASE_ICON} alt="" />
                        <h3>數據儲存</h3>
                        <p>資料庫幫您儲存收益數據，讓您輕鬆且簡易查找過去歷史資料</p>
                    </div>
                    <div className='search_provide_card'>
                        <img src={SEARCH3D_ICON} alt="" />
                        <h3>進行即時監控管理</h3>
                        <p>時刻了解設備運營狀態，發生故障自動定位機台並上報通知，遠端調控設備參數、單價，實現高效管理</p>
                    </div>
                </div>
            </div>

            {/* MANAGEMENT SYSTEM */}
            <div className='management_system_container'>
                <h2>管理系統</h2>
                <div className='management_system_img'>
                    <img src={MANAGE_SYSTEM} alt="" />
                </div>
            </div>

            {/* BACKEND SYSTEM */}
            <div className='backend_system_container'>
                <h2>後端管理系統</h2>
                <div className='backend_system_img'>
                    <img src={BACKEND_SYSTEM} alt="" />

                </div>
            </div>
        </div>
    )
}

export default SearchSystem