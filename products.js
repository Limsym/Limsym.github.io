// 产品数据结构
const products = {
    // 医药中间体 (APIs/Pharmaceutical Intermediates)
    API: {
        // 次要类型分组
        categories: {
            "Antidiabetic": [
                {
                    name: "Semaglutide",
                    zh_name: "司美格鲁肽",
                    cas: "910463-68-2",
                    grade: "Pharm",
                    qualification: "Chinese GMP",
                    standard: "",
                    notes: ""
                },
                {
                    name: "Dapagliflozin",
                    zh_name: "达格列净",
                    cas: "461432-26-8",
                    grade: "Pharm",
                    qualification: "DMF/cGMP",
                    standard: "",
                    notes: ""
                }
            ],
            "Cardiovascular": [
                {
                    name: "Valsartan",
                    zh_name: "缬沙坦",
                    cas: "137862-53-4",
                    grade: "Pharm",
                    qualification: "",
                    standard: "",
                    notes: ""
                },
                {
                    name: "Norepinephrine Bitartrate / Adrenaline Tartrate",
                    zh_name: "重酒石酸去甲肾上腺素",
                    cas: "108341-18-0 / 69815-49-2",
                    grade: "Pharm",
                    qualification: "US DMF",
                    standard: "",
                    notes: ""
                },
                {
                    name: "Phenylephrine HCl",
                    zh_name: "盐酸去氧肾上腺素",
                    cas: "61-76-7",
                    grade: "Pharm",
                    qualification: "US DMF",
                    standard: "",
                    notes: ""
                }
            ],
            "Anesthetic": [
                {
                    name: "Bupivacaine",
                    zh_name: "布比卡因",
                    cas: "38396-39-3",
                    grade: "Pharm",
                    qualification: "US DMF",
                    standard: "",
                    notes: ""
                }
            ],
            "Antibiotic": [
                {
                    name: "Cefuroxime Axetil Amorphous",
                    zh_name: "无定形头孢呋辛酯",
                    cas: "64544-07-6",
                    grade: "Pharm",
                    qualification: "EU-GMP/CEP",
                    standard: "CP/EP/USP/BP/IP",
                    notes: ""
                }
            ],
            "Antiparasitic": [
                {
                    name: "Ivermectin",
                    zh_name: "伊维菌素",
                    cas: "70288-86-7",
                    grade: "Pharm",
                    qualification: "",
                    standard: "",
                    notes: ""
                },
                {
                    name: "Mebendazole",
                    zh_name: "甲苯达唑",
                    cas: "31431-39-7",
                    grade: "Pharm",
                    qualification: "",
                    standard: "",
                    notes: ""
                }
            ],
            "Antipyretic": [
                {
                    name: "Paracetamol",
                    zh_name: "扑热息痛",
                    cas: "103-90-2",
                    grade: "Pharm",
                    qualification: "FDA/WC/cGMP/CEP",
                    standard: "",
                    notes: ""
                }
            ],
            "Antipyretic Analgesics": [
                {
                    name: "Acetylsalicylic Acid (Aspirin)",
                    zh_name: "乙酰水杨酸（阿司匹林）",
                    cas: "50-78-2",
                    grade: "Pharm",
                    qualification: "",
                    standard: "",
                    notes: ""
                }
            ],
            "Antitumor": [
                {
                    name: "Oxaliplatin",
                    zh_name: "奥沙利铂",
                    cas: "61825-94-3",
                    grade: "Pharm",
                    qualification: "DMF/GMP/CEP/PMDA/WC/COPP",
                    standard: "EP/USP",
                    notes: ""
                },
                {
                    name: "Paclitaxel",
                    zh_name: "紫杉醇",
                    cas: "33069-62-4",
                    grade: "Pharm",
                    qualification: "DMF/cGMP",
                    standard: "",
                    notes: ""
                }
            ],
            "Digestive System": [
                {
                    name: "Rebamipide",
                    zh_name: "瑞巴派特",
                    cas: "90098-04-7",
                    grade: "Pharm",
                    qualification: "WC/COPP",
                    standard: "China/Korea/Japan/Russia/Taiwan",
                    notes: ""
                },
                {
                    name: "Ursodeoxycholic Acid",
                    zh_name: "熊去氧胆酸",
                    cas: "128-13-2",
                    grade: "Pharm",
                    qualification: "WC",
                    standard: "JP/CP",
                    notes: ""
                }
            ]
        }
    },
    
    // 多肽 (Polypeptides)
    Poly: {
        // 次要类型分组
        categories: {
            "Antidiabetic": [
                {
                    name: "Semaglutide",
                    zh_name: "司美格鲁肽",
                    cas: "910463-68-2",
                    grade: "Pharm",
                    qualification: "GMP",
                    standard: "",
                    notes: ""
                },
                {
                    name: "Insulin Glargine",
                    zh_name: "甘精胰岛素",
                    cas: "160337-95-1",
                    grade: "Pharm",
                    qualification: "GMP",
                    standard: "",
                    notes: ""
                },
                {
                    name: "Tirzepatide",
                    zh_name: "替尔泊肽",
                    cas: "2023788-19-2",
                    grade: "Pharm",
                    qualification: "DMF",
                    standard: "",
                    notes: ""
                }
            ]
        }
    },
    
    // 中间体 (Intermediates)
    INT: {
        // 次要类型分组
        categories: {
            "Antifungal": [
                {
                    name: "Micafungin FR-179642",
                    zh_name: "FR-179642(米卡芬净母核)",
                    cas: "168110-44-9",
                    grade: "Pharm",
                    qualification: "",
                    standard: "",
                    notes: ""
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
                    name: "DL-Methionine",
                    zh_name: "DL-蛋氨酸",
                    cas: "59-51-8",
                    grade: "Pharm/Food",
                    qualification: "GMP/CEP/DMF",
                    standard: "EP/USP/AJI",
                    notes: ""
                },
                {
                    name: "L-Isoleucine",
                    zh_name: "L-异亮氨酸",
                    cas: "73-32-5",
                    grade: "Pharm/Food",
                    qualification: "GMP/CEP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Lysine HCl",
                    zh_name: "盐酸赖氨酸",
                    cas: "657-27-2",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Threonine",
                    zh_name: "L-苏氨酸",
                    cas: "72-19-5",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Valine",
                    zh_name: "L-缬氨酸",
                    cas: "72-18-4",
                    grade: "Pharm/Food",
                    qualification: "GMP/CEP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Tryptophan",
                    zh_name: "L-色氨酸",
                    cas: "73-22-3",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                }
            ],
            "Non-Essential Amino Acids": [
                {
                    name: "Glycine",
                    zh_name: "甘氨酸",
                    cas: "56-40-6",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L(+)-Arginine",
                    zh_name: "L-精氨酸",
                    cas: "74-79-3",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI",
                    notes: ""
                },
                {
                    name: "L-Aspartic acid",
                    zh_name: "门冬氨酸",
                    cas: "56-84-8",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Cysteine",
                    zh_name: "L-半胱氨酸",
                    cas: "52-90-4",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI",
                    notes: ""
                },
                {
                    name: "L-Glutamic acid",
                    zh_name: "L-谷氨酸",
                    cas: "56-86-0",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Glutamine",
                    zh_name: "L-谷氨酰胺",
                    cas: "56-85-9",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI",
                    notes: ""
                },
                {
                    name: "L-Proline",
                    zh_name: "L-脯氨酸",
                    cas: "147-85-3",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Serine",
                    zh_name: "L-丝氨酸",
                    cas: "56-45-1",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                },
                {
                    name: "L-Tyrosine",
                    zh_name: "L-酪氨酸",
                    cas: "60-18-4",
                    grade: "Pharm/Food",
                    qualification: "GMP",
                    standard: "EP/USP/AJI/BP/CP",
                    notes: ""
                }
            ]
        }
    },
    
    // 维生素 (Vitamins)
    VIT: {
        // 次要类型分组
        categories: {
            "A": [
                {
                    name: "Retinol",
                    zh_name: "",
                    cas: "68-26-8",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Vision, Immunity, Skin"
                }
            ],
            "B1": [
                {
                    name: "Thiamine",
                    zh_name: "",
                    cas: "59-43-8",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Energy Production"
                }
            ],
            "B2": [
                {
                    name: "Riboflavin",
                    zh_name: "",
                    cas: "83-88-5",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Skin, Vision, Metabolism"
                }
            ],
            "B3": [
                {
                    name: "Niacinamide",
                    zh_name: "",
                    cas: "98-92-0",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Skin Health, DNA Repair"
                }
            ],
            "B6": [
                {
                    name: "Pyridoxine",
                    zh_name: "",
                    cas: "65-23-6",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Protein Metabolism"
                }
            ],
            "B9": [
                {
                    name: "Folic Acid",
                    zh_name: "",
                    cas: "59-30-3",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "DNA Synthesis, Cell Division"
                }
            ],
            "B12": [
                {
                    name: "Cyanocobalamin",
                    zh_name: "",
                    cas: "68-19-9",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Blood Formation, Nerve Function"
                },
                {
                    name: "Mecobalamin",
                    zh_name: "",
                    cas: "13422-55-4",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Active form of B12"
                }
            ],
            "C": [
                {
                    name: "Ascorbic Acid",
                    zh_name: "",
                    cas: "50-81-7",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Antioxidant, Collagen"
                }
            ],
            "D2": [
                {
                    name: "Ergocalciferol",
                    zh_name: "",
                    cas: "50-14-6",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Bone Health, Immune"
                }
            ],
            "D3": [
                {
                    name: "Cholecalciferol",
                    zh_name: "",
                    cas: "67-97-0",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Bone Health, Immune"
                }
            ],
            "E": [
                {
                    name: "Tocopherol",
                    zh_name: "",
                    cas: "2074-53-5",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Antioxidant, Protection"
                }
            ],
            "K1": [
                {
                    name: "Phylloquinone",
                    zh_name: "",
                    cas: "84-80-0",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Blood Clotting"
                }
            ],
            "K2": [
                {
                    name: "Menaquinone-4",
                    zh_name: "",
                    cas: "11032-49-8",
                    grade: "Pharm/Food",
                    qualification: "",
                    standard: "",
                    notes: "Bone, Vascular Health"
                }
            ]
        }
    }
};

// 产品名称映射（主要类型）
const productTypeNames = {
    API: {
        zh: "药物活性成分",
        en: "Active Pharmaceutical Ingredientes"
    },
    INT: {
        zh: "药物中间体",
        en: "Pharmaceutical Intermediates"
    },
    AA: {
        zh: "氨基酸",
        en: "Amino Acids"
    },
    Poly: {
        zh: "多肽",
        en: "Polypeptides"
    },
    VIT: {
        zh: "维生素",
        en: "Vitamins"
    },
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
                (product.zh_name && product.zh_name.toLowerCase().includes(query)) ||
                product.cas.toLowerCase().includes(query) ||
                product.grade.toLowerCase().includes(query) ||
                product.qualification.toLowerCase().includes(query) ||
                product.standard.toLowerCase().includes(query) ||
                (product.notes && product.notes.toLowerCase().includes(query)) ||
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

// 高级过滤功能
function filterProducts(productList, filters) {
    if (!filters || Object.keys(filters).length === 0) {
        return productList;
    }
    
    return productList.filter(product => {
        // 检查每个过滤条件
        for (const key in filters) {
            if (filters[key] && filters[key] !== 'all') {
                // 对于grade、qualification和standard进行过滤
                if (['grade', 'qualification', 'standard'].includes(key) && 
                    !product[key].toLowerCase().includes(filters[key].toLowerCase())) {
                    return false;
                }
            }
        }
        return true;
    });
}

// 导出产品为CSV
function exportToCSV() {
    let csv = 'Main Type,Category,Name,品名,CAS,Grade,Qualification,Standard,Notes\n';
    
    Object.keys(products).forEach(mainType => {
        Object.keys(products[mainType].categories).forEach(category => {
            products[mainType].categories[category].forEach(product => {
                csv += `${productTypeNames[mainType].en},${category},${product.name},${product.zh_name || ""},${product.cas},${product.grade},${product.qualification},${product.standard},${product.notes || ""}\n`;
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