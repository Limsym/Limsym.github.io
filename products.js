const products = {
    intermediates: [
        {
            name: "2-Methyl-3-Trifluoromethylaniline (MTA)",
            cas: "13335-87-6",
            spec: "≥98%",
            package: "25kg/drum"
        },
        {
            name: "D-Tryptophan",
            cas: "153-94-6",
            spec: "≥99%",
            package: "25kg/drum"
        },
        {
            name: "4-(Isopropylamino)butanol",
            cas: "13335-87-6",
            spec: "≥98%",
            package: "200kg/drum"
        },
        {
            name: "1-Bromocyclobutanecarboxylic acid",
            cas: "6232-47-1",
            spec: "≥98%",
            package: "25kg/drum"
        },
        {
            name: "2-Amino-4-nitrobenzoic acid",
            cas: "619-17-0",
            spec: "≥99%",
            package: "25kg/drum"
        },
        {
            name: "(S)-(+)-1,2-Propanediol",
            cas: "4254-14-2",
            spec: "≥99%",
            package: "25kg/drum"
        },
        {
            name: "1-Bromo-2,3-difluorobenzene",
            cas: "64248-48-0",
            spec: "≥99%",
            package: "25kg/drum"
        },
        {
            name: "Dimetindene Maleate",
            cas: "3614-69-5",
            spec: "≥99%",
            package: "5kg/drum"
        },
        {
            name: "Caronic anhydride",
            cas: "10371-85-8",
            spec: "≥98%",
            package: "25kg/drum"
        },
        {
            name: "2-chloro-1,4-naphthoquinone",
            cas: "2097-61-2",
            spec: "≥99%",
            package: "5kg/drum"
        },
        {
            name: "Trans-4-(4-chlorophenyl)cyclohexanecarboxylic acid",
            cas: "35704-29-9",
            spec: "≥99%",
            package: "25kg/drum"
        },
        {
            name: "1-bromo-2-butyne",
            cas: "5202-27-3",
            spec: "≥98%",
            package: "5kg/drum"
        },
        {
            name: "2-chloromalonaldehyde",
            cas: "56483-47-7",
            spec: "≥99%",
            package: "10kg/drum"
        }
    ],
    vitamins: [
        {
            name: "Vitamin B1 (Thiamine)",
            cas: "59-43-8",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "Vitamin B2 (Riboflavin)",
            cas: "83-88-5",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "Vitamin B6 (Pyridoxine)",
            cas: "65-23-6",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "Vitamin B12 (Cyanocobalamin)",
            cas: "68-19-9",
            spec: "USP/EP/JP",
            package: "1kg/drum"
        },
        {
            name: "Vitamin C (Ascorbic Acid)",
            cas: "50-81-7",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "Vitamin D3 (Cholecalciferol)",
            cas: "67-97-0",
            spec: "USP/EP/JP",
            package: "5kg/drum"
        },
        {
            name: "Vitamin E (Tocopherol)",
            cas: "59-02-9",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "Vitamin K1 (Phylloquinone)",
            cas: "84-80-0",
            spec: "USP/EP/JP",
            package: "5kg/drum"
        },
        {
            name: "Biotin (Vitamin B7)",
            cas: "58-85-5",
            spec: "USP/EP/JP",
            package: "1kg/drum"
        },
        {
            name: "Folic Acid (Vitamin B9)",
            cas: "59-30-3",
            spec: "USP/EP/JP",
            package: "5kg/drum"
        }
    ],
    aminoAcids: [
        {
            name: "L-Lysine",
            cas: "56-87-1",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Methionine",
            cas: "63-68-3",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Threonine",
            cas: "72-19-5",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Tryptophan",
            cas: "73-22-3",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Phenylalanine",
            cas: "63-91-2",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Valine",
            cas: "72-18-4",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Arginine",
            cas: "74-79-3",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Glutamine",
            cas: "56-85-9",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "Glycine",
            cas: "56-40-6",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Histidine",
            cas: "71-00-1",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Isoleucine",
            cas: "73-32-5",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        },
        {
            name: "L-Leucine",
            cas: "61-90-5",
            spec: "USP/EP/JP",
            package: "25kg/drum"
        }
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