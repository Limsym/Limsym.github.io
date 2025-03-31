const products = {
    intermediates: [
        {
            name: "2-Methyl-3-Trifluoromethylaniline (MTA)",
            cas: "13335-87-6",
            spec: "≥98%",
            package: "25kg/桶"
        },
        {
            name: "D-Tryptophan",
            cas: "153-94-6",
            spec: "≥99%",
            package: "25kg/桶"
        },
        {
            name: "4-(Isopropylamino)butanol",
            cas: "13335-87-6",
            spec: "≥98%",
            package: "200kg/桶"
        }
        // 更多产品数据将从Excel导入
    ],
    vitamins: [
        {
            name: "Vitamin B1 (Thiamine)",
            cas: "59-43-8",
            spec: "≥98%",
            package: "25kg/桶"
        },
        {
            name: "Vitamin B2 (Riboflavin)",
            cas: "83-88-5",
            spec: "≥98%",
            package: "25kg/桶"
        },
        {
            name: "Vitamin B6 (Pyridoxine)",
            cas: "65-23-6",
            spec: "≥98%",
            package: "25kg/桶"
        }
        // 更多产品数据将从Excel导入
    ],
    aminoAcids: [
        {
            name: "L-Lysine",
            cas: "56-87-1",
            spec: "≥98%",
            package: "25kg/桶"
        },
        {
            name: "L-Methionine",
            cas: "63-68-3",
            spec: "≥98%",
            package: "25kg/桶"
        },
        {
            name: "L-Threonine",
            cas: "72-19-5",
            spec: "≥98%",
            package: "25kg/桶"
        }
        // 更多产品数据将从Excel导入
    ]
};

// 产品搜索功能
function searchProducts(query) {
    if (!query || query.trim() === '') {
        return getDefaultProducts();
    }

    query = query.toLowerCase().trim();
    const results = {
        intermediates: [],
        vitamins: [],
        aminoAcids: []
    };

    // 搜索所有产品类别
    Object.keys(products).forEach(category => {
        results[category] = products[category].filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.cas.toLowerCase().includes(query) ||
            product.spec.toLowerCase().includes(query) ||
            product.package.toLowerCase().includes(query)
        );
    });

    // 如果搜索结果为空，返回默认产品
    if (Object.values(results).every(arr => arr.length === 0)) {
        return getDefaultProducts();
    }

    return results;
}

// 获取默认产品（每个类别3个）
function getDefaultProducts() {
    const results = {
        intermediates: [],
        vitamins: [],
        aminoAcids: []
    };

    Object.keys(products).forEach(category => {
        results[category] = products[category].slice(0, 3);
    });

    return results;
}

// 分页功能
function paginateProducts(products, page = 1, itemsPerPage = 10) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
}

// 导出产品数据为CSV
function exportToCSV() {
    let csv = 'Category,Name,CAS,Specification,Package\n';
    
    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            csv += `${category},${product.name},${product.cas},${product.spec},${product.package}\n`;
        });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.csv';
    a.click();
    window.URL.revokeObjectURL(url);
} 