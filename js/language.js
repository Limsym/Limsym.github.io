// 导入翻译数据
import translations from './translations.js';

// 当前语言
let currentLanguage = 'en';

// 切换语言
function toggleLanguage() {
    console.log('Toggle language called, current language:', currentLanguage);
    
    // Add a try-catch to identify any errors
    try {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        
        updateLanguage();
        
        localStorage.setItem('language', currentLanguage);
        
        console.log('Language switched to:', currentLanguage);
    } catch (error) {
        console.error('Error in toggleLanguage:', error);
    }
}

// 更新页面语言
function updateLanguage() {
    console.log('Updating language to:', currentLanguage);
    console.log('Available translations:', translations);
    
    // 确保选中的语言有可用的翻译
    if (!translations[currentLanguage]) {
        console.warn(`No translations available for language: ${currentLanguage}`);
        return;
    }
    
    // 设置页面语言属性
    document.documentElement.lang = currentLanguage;
    
    // 更新所有带有 data-translate 属性的元素
    const elements = document.querySelectorAll('[data-translate]');
    console.log(`Found ${elements.length} elements with data-translate attribute`);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        
        // 递归获取翻译值
        let value = translations[currentLanguage];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                value = null;
                break;
            }
        }
        
        // 如果找到翻译，则更新元素内容
        if (value) {
            element.textContent = value;
        } else {
            console.warn(`Translation not found for key: ${key}`);
        }
    });
    
    // 更新语言切换按钮
    const langButton = document.getElementById('langToggle');
    if (langButton) {
        langButton.textContent = translations[currentLanguage]?.nav?.language || (currentLanguage === 'en' ? '中文' : 'English');
        console.log('Updated language button text to:', langButton.textContent);
    } else {
        console.warn('Language toggle button not found');
    }
    
    // 更新搜索输入框占位符
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        const placeholder = translations[currentLanguage]?.products?.searchPlaceholder || 'Search products...';
        searchInput.placeholder = placeholder;
    }
    
    // 更新表格头
    updateTableHeaders();
    
    // 更新产品表格内容 - Check if this function exists
    if (typeof refreshProductTable === 'function') {
        refreshProductTable();
    } else {
        console.warn('refreshProductTable function not found');
    }
    
    // 更新About Us和Contact Us部分
    updateAboutSection();
    updateContactSection();
}

// 更新About Us部分
function updateAboutSection() {
    // 更新公司描述部分
    const companyDesc = document.querySelector('#about p:first-of-type');
    if (companyDesc) {
        companyDesc.textContent = translations[currentLanguage]?.about?.companyDesc || companyDesc.textContent;
    }
    
    const companyDesc2 = document.querySelector('#about p:nth-of-type(2)');
    if (companyDesc2) {
        companyDesc2.textContent = translations[currentLanguage]?.about?.companyDesc2 || companyDesc2.textContent;
    }
    
    // 更新优势列表
    const strengthItems = document.querySelectorAll('#about ul li span');
    if (strengthItems.length >= 3) {
        strengthItems[0].textContent = translations[currentLanguage]?.about?.strength1 || strengthItems[0].textContent;
        strengthItems[1].textContent = translations[currentLanguage]?.about?.strength2 || strengthItems[1].textContent;
        strengthItems[2].textContent = translations[currentLanguage]?.about?.strength3 || strengthItems[2].textContent;
    }
}

// 更新Contact Us部分
function updateContactSection() {
    // 更新联系信息部分
    const addressDetail = document.querySelector('#contact .flex:nth-of-type(1) p:nth-of-type(2)');
    if (addressDetail) {
        addressDetail.textContent = translations[currentLanguage]?.contact?.addressDetail || addressDetail.textContent;
    }
    
    const phoneDetail = document.querySelector('#contact .flex:nth-of-type(2) p:nth-of-type(2)');
    if (phoneDetail) {
        phoneDetail.textContent = translations[currentLanguage]?.contact?.phoneDetail || phoneDetail.textContent;
    }
    
    const emailDetail = document.querySelector('#contact .flex:nth-of-type(3) p:nth-of-type(2)');
    if (emailDetail) {
        emailDetail.textContent = translations[currentLanguage]?.contact?.emailDetail || emailDetail.textContent;
    }
    
    // 更新表单标签
    const formLabels = document.querySelectorAll('#contact form label');
    if (formLabels.length >= 4) {
        formLabels[0].textContent = translations[currentLanguage]?.contact?.productName || formLabels[0].textContent;
        formLabels[1].textContent = translations[currentLanguage]?.contact?.yourName || formLabels[1].textContent;
        formLabels[2].textContent = translations[currentLanguage]?.contact?.email || formLabels[2].textContent;
        formLabels[3].textContent = translations[currentLanguage]?.contact?.message || formLabels[3].textContent;
    }
    
    // 更新发送按钮
    const sendButton = document.querySelector('#contact form button');
    if (sendButton) {
        sendButton.textContent = translations[currentLanguage]?.contact?.send || sendButton.textContent;
    }
}

// 更新表格头
function updateTableHeaders() {
    const tableHeaders = document.querySelectorAll('#productTableContainer th');
    if (tableHeaders.length >= 4) {
        tableHeaders[0].textContent = translations[currentLanguage]?.products?.code || 'Code';
        tableHeaders[1].textContent = translations[currentLanguage]?.products?.name || 'Name';
        tableHeaders[2].textContent = translations[currentLanguage]?.products?.category || 'Category';
        tableHeaders[3].textContent = translations[currentLanguage]?.products?.actions || 'Actions';
    }
}

// 初始化语言设置
function initLanguage() {
    console.log('Initializing language module');
    
    // 从本地存储获取语言设置，默认为英语
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'en'; // Default to English
    }
    
    console.log('Initial language set to:', currentLanguage);
    
    // 初始设置页面语言
    updateLanguage();
    
    // 为语言切换按钮添加事件监听器
    const langButton = document.getElementById('langToggle');
    if (langButton) {
        console.log('Found language toggle button, adding click event listener');
        
        // Remove any existing event listeners (in case of duplicate initialization)
        langButton.removeEventListener('click', toggleLanguage);
        
        // Add the event listener
        langButton.addEventListener('click', toggleLanguage);
        
        // Add a direct onclick handler as a fallback
        langButton.onclick = function() {
            console.log('Language button clicked (onclick)');
            toggleLanguage();
        };
    } else {
        console.warn('Language toggle button not found');
    }
}

// Make sure refreshProductTable is defined or imported
function refreshProductTable() {
    console.log('refreshProductTable called, but needs implementation');
    // This is a placeholder. If this function exists elsewhere, you should import it
    // or remove this call from updateLanguage
}

// 导出语言相关函数
export {
    initLanguage,
    toggleLanguage,
    updateLanguage,
    currentLanguage
};

// Make toggleLanguage available globally for direct HTML onclick handlers
window.toggleLanguage = toggleLanguage;