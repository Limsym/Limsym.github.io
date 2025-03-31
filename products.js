// 产品数据结构
const products = {
    // 医药中间体 (API/Pharmaceutical Intermediates)
    API: {
        // 次要类型分组
        categories: {
            "General": [
                {
                    name: "2-Methyl-3-Trifluoromethylaniline (MTA)",
                    cas: "13335-87-6",
                    spec: "≥98%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "In-house"
                },
                {
                    name: "D-Tryptophan",
                    cas: "153-94-6",
                    spec: "≥99%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP/EP"
                },
                {
                    name: "4-(Isopropylamino)butanol",
                    cas: "13335-87-6",
                    spec: "≥98%",
                    package: "200kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "In-house"
                },
                {
                    name: "1-Bromocyclobutanecarboxylic acid",
                    cas: "6232-47-1",
                    spec: "≥98%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "In-house"
                },
                {
                    name: "2-Amino-4-nitrobenzoic acid",
                    cas: "619-17-0",
                    spec: "≥99%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP"
                }
            ],
            "Antiviral": [
                {
                    name: "(S)-(+)-1,2-Propanediol",
                    cas: "4254-14-2",
                    spec: "≥99%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP/EP"
                },
                {
                    name: "1-Bromo-2,3-difluorobenzene",
                    cas: "64248-48-0",
                    spec: "≥99%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "In-house"
                }
            ],
            "Antiallergic": [
                {
                    name: "Dimetindene Maleate",
                    cas: "3614-69-5",
                    spec: "≥99%",
                    package: "5kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP/EP"
                },
                {
                    name: "Caronic anhydride",
                    cas: "10371-85-8",
                    spec: "≥98%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP"
                }
            ],
            "Antibacterial": [
                {
                    name: "2-chloro-1,4-naphthoquinone",
                    cas: "2097-61-2",
                    spec: "≥99%",
                    package: "5kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "In-house"
                },
                {
                    name: "Trans-4-(4-chlorophenyl)cyclohexanecarboxylic acid",
                    cas: "35704-29-9",
                    spec: "≥99%",
                    package: "25kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP/EP"
                },
                {
                    name: "1-bromo-2-butyne",
                    cas: "5202-27-3",
                    spec: "≥98%",
                    package: "5kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "In-house"
                },
                {
                    name: "2-chloromalonaldehyde",
                    cas: "56483-47-7",
                    spec: "≥99%",
                    package: "10kg/drum",
                    qualification: "Pharmaceutical Grade",
                    standard: "USP"
                }
            ]
        }
    },
    
    // 维生素 (Vitamins)
    VIT: {
        // 次要类型分组
        categories: {
            "B Vitamins": [
                {
                    name: "Vitamin B1 (Thiamine)",
                    cas: "59-43-8",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Vitamin B2 (Riboflavin)",
                    cas: "83-88-5",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Vitamin B6 (Pyridoxine)",
                    cas: "65-23-6",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Vitamin B12 (Cyanocobalamin)",
                    cas: "68-19-9",
                    spec: "USP/EP/JP",
                    package: "1kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Biotin (Vitamin B7)",
                    cas: "58-85-5",
                    spec: "USP/EP/JP",
                    package: "1kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Folic Acid (Vitamin B9)",
                    cas: "59-30-3",
                    spec: "USP/EP/JP",
                    package: "5kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                }
            ],
            "Fat-Soluble Vitamins": [
                {
                    name: "Vitamin D3 (Cholecalciferol)",
                    cas: "67-97-0",
                    spec: "USP/EP/JP",
                    package: "5kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Vitamin E (Tocopherol)",
                    cas: "59-02-9",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Vitamin K1 (Phylloquinone)",
                    cas: "84-80-0",
                    spec: "USP/EP/JP",
                    package: "5kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                }
            ],
            "Water-Soluble Vitamins": [
                {
                    name: "Vitamin C (Ascorbic Acid)",
                    cas: "50-81-7",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                }
            ]
        }
    },
    
    // 氨基酸 (Amino Acids)
    AA: {
        // 次要类型分组
        categories: {
            "Essential Amino Acids": [
                {
                    name: "L-Lysine",
                    cas: "56-87-1",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Methionine",
                    cas: "63-68-3",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Threonine",
                    cas: "72-19-5",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Tryptophan",
                    cas: "73-22-3",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Phenylalanine",
                    cas: "63-91-2",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Valine",
                    cas: "72-18-4",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Isoleucine",
                    cas: "73-32-5",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Leucine",
                    cas: "61-90-5",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                }
            ],
            "Non-Essential Amino Acids": [
                {
                    name: "L-Arginine",
                    cas: "74-79-3",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Glutamine",
                    cas: "56-85-9",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "Glycine",
                    cas: "56-40-6",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                },
                {
                    name: "L-Histidine",
                    cas: "71-00-1",
                    spec: "USP/EP/JP",
                    package: "25kg/drum",
                    qualification: "Food Grade",
                    standard: "USP/EP/JP"
                }
            ]
        }
    }
};

// 产品名称映射（主要类型）
const productTypeNames = {
    API: {
        zh: "医药中间体",
        en: "Pharmaceutical Intermediates"
    },
    VIT: {
        zh: "维生素",
        en: "Vitamins"
    },
    AA: {
        zh: "氨基酸",
        en: "Amino Acids"
    }
};

// 获取默认产品（每个主要类型的每个子类别显示1个产品）
function getDefaultProducts() {
    const results = {};
    
    Object.keys(products).forEach(mainType => {
        results[mainType] = [];
        
        // 从每个子类别中获取一个产品
        Object.keys(products[mainType].categories).forEach(subCategory => {
            if (products[mainType].categories[subCategory].length > 0) {
                results[mainType].push({
                    ...products[mainType].categories[subCategory][0],
                    category: subCategory
                });
            }
        });
    });
    
    return results;
}

// 搜索产品
function searchProducts(query) {
    if (!query || query.trim() === '') {
        return getDefaultProducts();
    }
    
    query = query.toLowerCase().trim();
    const results = {};
    
    Object.keys(products).forEach(mainType => {
        results[mainType] = [];
        
        // 搜索每个子类别
        Object.keys(products[mainType].categories).forEach(subCategory => {
            const matchedProducts = products[mainType].categories[subCategory].filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.cas.toLowerCase().includes(query) ||
                product.spec.toLowerCase().includes(query) ||
                product.package.toLowerCase().includes(query) ||
                product.qualification.toLowerCase().includes(query) ||
                product.standard.toLowerCase().includes(query) ||
                subCategory.toLowerCase().includes(query)
            );
            
            // 添加匹配的产品到结果中，并标记它们的子类别
            matchedProducts.forEach(product => {
                results[mainType].push({
                    ...product,
                    category: subCategory
                });
            });
        });
    });
    
    // 如果没有结果，返回默认产品
    if (Object.values(results).every(arr => arr.length === 0)) {
        return getDefaultProducts();
    }
    
    return results;
}

// 获取所有产品
function getAllProducts() {
    const allProducts = {};
    
    Object.keys(products).forEach(mainType => {
        allProducts[mainType] = [];
        
        // 获取每个子类别下的所有产品
        Object.keys(products[mainType].categories).forEach(subCategory => {
            products[mainType].categories[subCategory].forEach(product => {
                allProducts[mainType].push({
                    ...product,
                    category: subCategory
                });
            });
        });
    });
    
    return allProducts;
}

// 分页产品
function paginateProducts(products, page = 1, itemsPerPage = 10) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
}

// 导出产品为CSV
function exportToCSV() {
    let csv = 'Main Type,Category,Name,CAS,Specification,Package,Qualification,Standard\n';
    
    Object.keys(products).forEach(mainType => {
        Object.keys(products[mainType].categories).forEach(category => {
            products[mainType].categories[category].forEach(product => {
                csv += `${productTypeNames[mainType].en},${category},${product.name},${product.cas},${product.spec},${product.package},${product.qualification},${product.standard}\n`;
            });
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