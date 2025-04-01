// 导入产品数据
import products from '../products.js';
import { currentLanguage } from './language.js';
import translations from './translations.js';

// 产品分页变量
let currentPage = 1;
const itemsPerPage = 10;

// 过滤和排序变量
let filteredProducts = [];
let searchTerm = '';

// 初始化产品目录
function initProductCatalog() {
    console.log('Initializing product catalog');
    
    // 初始加载产品数据
    filteredProducts = [...products];
    
    // 渲染产品表格
    renderProductTable();
    
    // 添加搜索事件监听
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            filterProducts();
            renderProductTable();
        });
    }
}

// 过滤产品
function filterProducts() {
    if (!searchTerm) {
        filteredProducts = [...products];
        return;
    }
    
    filteredProducts = products.filter(product => 
        product.code.toLowerCase().includes(searchTerm) || 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

// 渲染产品表格
function renderProductTable() {
    const container = document.getElementById('productTableContainer');
    if (!container) return;
    
    // 计算分页
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // 创建表格结构
    let tableHtml = `
        <table class="w-full">
            <thead>
                <tr>
                    <th data-translate="products.code">Code</th>
                    <th data-translate="products.name">Name</th>
                    <th data-translate="products.category">Category</th>
                    <th data-translate="products.actions">Actions</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // 添加产品行
    if (paginatedProducts.length === 0) {
        const noProductsText = translations[currentLanguage]?.products?.noProducts || 'No products found';
        tableHtml += `
            <tr>
                <td colspan="4" class="text-center py-4">${noProductsText}</td>
            </tr>
        `;
    } else {
        paginatedProducts.forEach(product => {
            tableHtml += `
                <tr>
                    <td>${product.code}</td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>
                        <button onclick="openProductDetail('${product.code}')" class="btn btn-primary btn-sm">
                            <i class="fas fa-eye mr-1"></i>
                            <span data-translate="products.view">View</span>
                        </button>
                    </td>
                </tr>
            `;
        });
    }
    
    tableHtml += `
            </tbody>
        </table>
    `;
    
    // 添加加载更多按钮（如果还有更多产品）
    if (endIndex < filteredProducts.length) {
        const loadMoreText = translations[currentLanguage]?.products?.loadMore || 'Load More';
        tableHtml += `
            <div class="text-center mt-4">
                <button id="loadMoreBtn" class="btn btn-primary">
                    ${loadMoreText}
                </button>
            </div>
        `;
    }
    
    // 更新容器内容
    container.innerHTML = tableHtml;
    
    // 为加载更多按钮添加事件监听
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            renderProductTable();
        });
    }
}

// 打开产品目录
function openProductCatalog() {
    console.log('Opening product catalog');
    const productSearch = document.getElementById('productSearch');
    if (productSearch) {
        productSearch.scrollIntoView({ behavior: 'smooth' });
    }
}

// 刷新产品表格（供语言切换时调用）
function refreshProductTable() {
    renderProductTable();
}

// 打开产品目录模态框
function openProductCatalogModal() {
    const modal = document.getElementById('productCatalogModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initializeCatalogContent();
}

// 关闭产品目录模态框
function closeProductCatalog() {
    const modal = document.getElementById('productCatalogModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// 初始化产品目录内容
function initializeCatalogContent() {
    const mainTypeSelect = document.getElementById('mainTypeFilter');
    const categorySelect = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('catalogSearch');
    const advancedFilters = document.getElementById('advancedFilters');
    const toggleFiltersBtn = document.getElementById('toggleFiltersBtn');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    
    // 初始化主类型选项
    mainTypeSelect.innerHTML = `
        <option value="all">${translations[currentLang].products.allMainTypes}</option>
        <option value="API">${translations[currentLang].products.API}</option>
        <option value="VIT">${translations[currentLang].products.VIT}</option>
        <option value="AA">${translations[currentLang].products.AA}</option>
    `;
    
    // 主类型变化时更新子类型
    mainTypeSelect.addEventListener('change', () => {
        const mainType = mainTypeSelect.value;
        categorySelect.innerHTML = `<option value="all">${translations[currentLang].products.allCategories}</option>`;
        
        if (mainType !== 'all') {
            const categories = Object.keys(products[mainType] || {});
            categories.forEach(category => {
                categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
            });
        }
        
        filterAndRenderProducts();
    });
    
    // 类别选择事件
    categorySelect.addEventListener('change', filterAndRenderProducts);
    
    // 高级筛选选项事件
    document.getElementById('qualificationFilter').addEventListener('change', filterAndRenderProducts);
    document.getElementById('standardFilter').addEventListener('change', filterAndRenderProducts);
    
    // 搜索防抖
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterAndRenderProducts();
        }, 300);
    });
    
    // 高级筛选切换
    toggleFiltersBtn.addEventListener('click', () => {
        advancedFilters.classList.toggle('hidden');
        toggleFiltersBtn.textContent = advancedFilters.classList.contains('hidden') 
            ? translations[currentLang].products.advancedFilters 
            : translations[currentLang].products.hideFilters;
    });
    
    // 分页按钮事件
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterAndRenderProducts();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalItems = getTotalFilteredItems();
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            filterAndRenderProducts();
        }
    });
    
    // 初始渲染
    filterAndRenderProducts();
}

// 过滤和渲染产品
function filterAndRenderProducts() {
    const mainType = document.getElementById('mainTypeFilter').value;
    const category = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('catalogSearch').value.toLowerCase();
    const qualification = document.getElementById('qualificationFilter').value;
    const standard = document.getElementById('standardFilter').value;
    
    let filteredProducts = [];
    
    // 根据主类型和子类型过滤
    if (mainType === 'all') {
        Object.values(products || {}).forEach(typeProducts => {
            Object.values(typeProducts).forEach(categoryProducts => {
                filteredProducts = filteredProducts.concat(categoryProducts);
            });
        });
    } else if (category === 'all' && products && products[mainType]) {
        Object.values(products[mainType]).forEach(categoryProducts => {
            filteredProducts = filteredProducts.concat(categoryProducts);
        });
    } else if (products && products[mainType] && products[mainType][category]) {
        filteredProducts = products[mainType][category];
    }
    
    // 应用搜索和高级筛选
    filteredProducts = filteredProducts.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.cas.toLowerCase().includes(searchTerm) ||
            product.spec.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);
            
        const matchesQualification = qualification === 'all' || 
            product.qualification === qualification;
            
        const matchesStandard = standard === 'all' || 
            product.standard === standard;
            
        return matchesSearch && matchesQualification && matchesStandard;
    });
    
    // 重置为第一页（如果当前不在第一页且没有产品数据）
    if (currentPage > 1 && filteredProducts.length <= (currentPage - 1) * itemsPerPage) {
        currentPage = 1;
    }
    
    // 存储过滤后的产品总数
    window.filteredProductsTotal = filteredProducts.length;
    
    // 渲染过滤后的产品
    renderFilteredProducts(filteredProducts);
}

// 获取过滤后的产品总数
function getTotalFilteredItems() {
    return window.filteredProductsTotal || 0;
}

// 渲染过滤后的产品
function renderFilteredProducts(products) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    const tbody = document.querySelector('#productCatalogTable tbody');
    tbody.innerHTML = '';
    
    if (paginatedProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center py-4 text-gray-500">
                    ${translations[currentLang].products.noProductsFound}
                </td>
            </tr>
        `;
        return;
    }
    
    paginatedProducts.forEach(product => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer';
        tr.innerHTML = `
            <td class="py-3 px-4">${product.name}</td>
            <td class="py-3 px-4">${product.cas}</td>
            <td class="py-3 px-4">${product.spec}</td>
            <td class="py-3 px-4">${product.package}</td>
            <td class="py-3 px-4">${product.category}</td>
            <td class="py-3 px-4">${product.qualification}</td>
            <td class="py-3 px-4">${product.standard}</td>
        `;
        tr.addEventListener('click', () => openProductDetail(product));
        tbody.appendChild(tr);
    });
    
    // 更新分页信息
    updatePagination(products.length);
}

// 更新分页信息
function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationInfo = document.getElementById('paginationInfo');
    
    // 如果没有产品，显示0
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);
    
    paginationInfo.innerHTML = `
        ${translations[currentLang].products.showing} ${startItem}-${endItem} 
        ${translations[currentLang].products.of} ${totalItems} 
        ${translations[currentLang].products.products}
    `;
    
    // 更新分页按钮状态
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages || totalItems === 0;
}

// 导出产品数据
function exportProductData() {
    const mainType = document.getElementById('mainTypeFilter').value;
    const category = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('catalogSearch').value.toLowerCase();
    
    let filteredProducts = [];
    
    if (mainType === 'all') {
        Object.values(products || {}).forEach(typeProducts => {
            Object.values(typeProducts).forEach(categoryProducts => {
                filteredProducts = filteredProducts.concat(categoryProducts);
            });
        });
    } else if (category === 'all' && products && products[mainType]) {
        Object.values(products[mainType]).forEach(categoryProducts => {
            filteredProducts = filteredProducts.concat(categoryProducts);
        });
    } else if (products && products[mainType] && products[mainType][category]) {
        filteredProducts = products[mainType][category];
    }
    
    filteredProducts = filteredProducts.filter(product => 
        searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm) ||
        product.cas.toLowerCase().includes(searchTerm) ||
        product.spec.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    const csvContent = convertToCSV(filteredProducts);
    downloadCSV(csvContent, 'products.csv');
}

// 转换为CSV格式
function convertToCSV(products) {
    const headers = [
        translations[currentLang].products.table.name,
        translations[currentLang].products.table.cas,
        translations[currentLang].products.table.spec,
        translations[currentLang].products.table.package,
        translations[currentLang].products.table.category,
        translations[currentLang].products.table.qualification,
        translations[currentLang].products.table.standard
    ];
    
    const rows = products.map(product => [
        product.name,
        product.cas,
        product.spec,
        product.package,
        product.category,
        product.qualification,
        product.standard
    ]);
    
    return [headers, ...rows]
        .map(row => row.map(cell => `"${(cell || '').toString().replace(/"/g, '""')}"`).join(','))
        .join('\n');
}

// 下载CSV文件
function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// 移动端触摸支持
function initTouchSupport() {
    const modal = document.getElementById('productCatalogModal');
    
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    modal.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // 向左滑动，下一页
                document.getElementById('nextPage').click();
            } else {
                // 向右滑动，上一页
                document.getElementById('prevPage').click();
            }
        }
    }, { passive: true });
}

// 初始化事件监听
document.addEventListener('DOMContentLoaded', () => {
    initTouchSupport();
    
    // 暴露方法到window，以便其他模块调用
    window.openProductCatalog = openProductCatalog;
    window.closeProductCatalog = closeProductCatalog;
    window.downloadCSV = downloadCSV;
});

// 导出函数
export {
    initProductCatalog,
    openProductCatalog,
    refreshProductTable
}; 