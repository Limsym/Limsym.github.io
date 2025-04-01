// 导入模块
import { initLanguage } from './language.js';
import { initProductCatalog } from './productCatalog.js';
import { initProductDetail } from './productDetail.js';

// 当文档加载完成执行初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing app');
    
    // 初始化深色模式
    initDarkMode();
    
    // 初始化语言
    initLanguage();
    
    // 初始化产品目录
    initProductCatalog();
    
    // 初始化产品详情
    initProductDetail();
});

// 初始化深色模式功能
function initDarkMode() {
    // 获取深色模式按钮
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // 从localStorage获取用户的主题偏好
    const savedTheme = localStorage.getItem('theme');
    
    // 根据用户偏好或系统偏好设置初始主题
    if (savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // 切换深色模式
    darkModeToggle.addEventListener('click', () => {
        console.log('Dark mode toggled');
        
        // 切换dark类
        document.documentElement.classList.toggle('dark');
        
        // 保存到localStorage
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
} 