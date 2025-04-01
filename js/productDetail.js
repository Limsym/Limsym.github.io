// 导入产品数据
import products from '../products.js';
import { currentLanguage } from './language.js';
import translations from './translations.js';

// 当前选中的产品
let currentProduct = null;

// 初始化产品详情功能
function initProductDetail() {
    console.log('Initializing product detail component');
    
    // 监听关闭按钮
    setupDetailModal();
}

// 设置详情模态框
function setupDetailModal() {
    // 获取模态框元素
    const modal = document.getElementById('productDetailModal');
    
    // 如果模态框不存在，则创建
    if (!modal) {
        createDetailModal();
    } else {
        // 为关闭按钮添加事件监听
        const closeButtons = modal.querySelectorAll('.close-modal, [data-close-modal]');
        closeButtons.forEach(button => {
            button.addEventListener('click', closeProductDetail);
        });
    }
    
    // 添加ESC键监听，用于关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('productDetailModal')?.classList.contains('hidden') === false) {
            closeProductDetail();
        }
    });
}

// 创建产品详情模态框
function createDetailModal() {
    const modal = document.createElement('div');
    modal.id = 'productDetailModal';
    modal.className = 'modal hidden';
    
    // 模态框内容
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="text-xl font-bold" data-translate="productDetail.title">Product Details</h2>
                <button class="close-modal">×</button>
            </div>
            <div class="modal-body" id="productDetailContent">
                <!-- 产品详情将动态插入这里 -->
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" data-close-modal data-translate="productDetail.close">Close</button>
                <button class="btn btn-primary" id="exportProductBtn" data-translate="productDetail.export">Export to CSV</button>
            </div>
        </div>
    `;
    
    // 添加到文档
    document.body.appendChild(modal);
    
    // 添加事件监听
    setupDetailModal();
    
    // 导出按钮事件
    const exportBtn = document.getElementById('exportProductBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportProductToCSV);
    }
}

// 打开产品详情
function openProductDetail(productCode) {
    console.log('Opening product detail for:', productCode);
    
    // 查找产品
    currentProduct = products.find(p => p.code === productCode);
    
    if (!currentProduct) {
        console.error('Product not found:', productCode);
        return;
    }
    
    // 确保模态框存在
    if (!document.getElementById('productDetailModal')) {
        createDetailModal();
    }
    
    // 填充产品详情
    const detailContent = document.getElementById('productDetailContent');
    
    // 获取翻译
    const t = translations[currentLanguage]?.productDetail || {
        code: 'Product Code',
        name: 'Product Name',
        category: 'Category',
        description: 'Description',
        specifications: 'Specifications',
        applications: 'Applications'
    };
    
    // 填充内容
    detailContent.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-label">${t.code}</div>
            <div class="product-detail-value">${currentProduct.code}</div>
        </div>
        <div class="product-detail">
            <div class="product-detail-label">${t.name}</div>
            <div class="product-detail-value">${currentProduct.name}</div>
        </div>
        <div class="product-detail">
            <div class="product-detail-label">${t.category}</div>
            <div class="product-detail-value">${currentProduct.category}</div>
        </div>
        <div class="product-detail">
            <div class="product-detail-label">${t.description}</div>
            <div class="product-detail-value">${currentProduct.description || 'N/A'}</div>
        </div>
        <div class="product-detail">
            <div class="product-detail-label">${t.specifications}</div>
            <div class="product-detail-value">${currentProduct.specifications || 'N/A'}</div>
        </div>
        <div class="product-detail">
            <div class="product-detail-label">${t.applications}</div>
            <div class="product-detail-value">${currentProduct.applications || 'N/A'}</div>
        </div>
    `;
    
    // 显示模态框
    const modal = document.getElementById('productDetailModal');
    modal.classList.remove('hidden');
}

// 关闭产品详情
function closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 导出产品详情为CSV
function exportProductToCSV() {
    if (!currentProduct) return;
    
    // 创建CSV内容
    const headers = ['Code', 'Name', 'Category', 'Description', 'Specifications', 'Applications'];
    const values = [
        currentProduct.code, 
        currentProduct.name, 
        currentProduct.category,
        currentProduct.description || 'N/A',
        currentProduct.specifications || 'N/A',
        currentProduct.applications || 'N/A'
    ];
    
    // 转义逗号和引号
    const escapedValues = values.map(val => {
        const escaped = val.toString().replace(/"/g, '""');
        return `"${escaped}"`;
    });
    
    // 组合CSV内容
    const csvContent = [
        headers.join(','),
        escapedValues.join(',')
    ].join('\n');
    
    // 创建下载链接
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    
    // 设置下载属性
    downloadLink.href = url;
    downloadLink.download = `product_${currentProduct.code}.csv`;
    
    // 添加到文档，触发下载，然后移除
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// 导出函数
export {
    initProductDetail,
    openProductDetail,
    closeProductDetail,
    exportProductToCSV
};

// 添加到全局作用域以供HTML按钮使用
window.openProductDetail = openProductDetail; 