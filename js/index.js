document.addEventListener('DOMContentLoaded', () => {
    const tableData = [
        {
            id: 1,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 256,
            storage: 400,
            storageType: 'SSD',
            price: 10000
        },
        {
            id: 2,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 3,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 4,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 5,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 6,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 7,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 8,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 9,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
        {
            id: 10,
            gpu: '4x V100 32GB SXM (NVLINK)',
            cpu: '2xE5-2698RV4',
            ram: 512,
            storage: 750,
            storageType: 'SSD',
            price: 9000
        },
    ]

    const table = document.querySelector('.table_sort');
    const headers = table.querySelectorAll('th');
    const tableBody = table.querySelector('tbody');
    const volumeType = 'GB'
    const currency = 'руб.'
    const setTableData = data => {
        data.forEach(item => {
            const tr = document.createElement('tr')
            const idCell = document.createElement('td')
            const gpuCell = document.createElement('td')
            const cpuCell = document.createElement('td')
            const ramCell = document.createElement('td')
            const storageCell = document.createElement('td')
            const priceCell = document.createElement('td')
            const buttonCell = document.createElement('td')
            const button = document.createElement('button')

            button.classList.add('table__button')
            button.textContent = 'Арендовать'
            buttonCell.appendChild(button)

            idCell.textContent = item.id
            gpuCell.textContent = item.gpu
            cpuCell.textContent = item.cpu
            ramCell.textContent = `${item.ram}${volumeType}`
            storageCell.textContent = `${item.storageType}, ${item.storage}${volumeType}`
            priceCell.textContent = `${item.price} ${currency}`
            tr.append(idCell, gpuCell, cpuCell, ramCell, storageCell, priceCell, buttonCell)
            tableBody.appendChild(tr)
        })
    }
    const clearTableData = () => {
        const rows = tableBody.querySelectorAll('tr')
        rows.forEach(row => tableBody.removeChild(row))
    }
    setTableData(tableData)

    // Направление сортировки
    const directions = Array.from(headers).map(header => {
        return '';
    });


    const sortColumn = key => {
        // Получить текущее направление
        const direction = directions[key] || 'asc';

        // Фактор по направлению
        const multiplier = (direction === 'asc') ? 1 : -1;

        const sortResult = JSON.parse(JSON.stringify(tableData))
        sortResult.sort((rowA, rowB) => {
            const cellA = rowA[key];
            const cellB = rowB[key];

            switch (true) {
                case cellA > cellB: return 1 * multiplier;
                case cellA < cellB: return -1 * multiplier;
                case cellA === cellB: return 0;
            }
        });
        // Поменять направление
        directions[key] = direction === 'asc' ? 'desc' : 'asc';

        // Удалить старые строки
        clearTableData()

        // Добавить новую строку
        setTableData(sortResult)
    };

    document.body.addEventListener('click', e => {
        const tableHeader = e.target.closest('.table_sort th')

        if (tableHeader) {
            sortColumn(tableHeader.getAttribute('data-type'))
        }
    })
});

document.querySelector('.first-button').addEventListener('click', function () {

    document.querySelector('.animated-icon1').classList.toggle('open');
});


function mask(inputName, mask, evt) {
    try {
        var text = document.getElementById(inputName);
        var value = text.value;
        // If user pressed DEL or BACK SPACE, clean the value
        try {
            var e = (evt.which) ? evt.which : event.keyCode;
            if (e == 46 || e == 8) {
                text.value = "";
                return;
            }
        } catch (e1) { }
        var literalPattern = /[0\*]/;
        var numberPattern = /[0-9]/;
        var newValue = "";
        for (var vId = 0, mId = 0; mId < mask.length;) {
            if (mId >= value.length)
                break;
            // Number expected but got a different value, store only the valid portion
            if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
                break;
            }
            // Found a literal
            while (mask[mId].match(literalPattern) == null) {
                if (value[vId] == mask[mId])
                    break;
                newValue += mask[mId++];
            }
            newValue += value[vId++];
            mId++;
        }
        text.value = newValue;
    } catch (e) { }
};


function validate(form_id, email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
};