var item, chart;

async function openItem(){
    var cod = document.getElementById('search').value;
     item = await fetch('./items/'+cod+'.txt')
        .then( r => r.text() )
        .then( t => item = t.split('\n'))
        destroyChart();
    renderChart(document.getElementById('year').value,document.getElementById('chartType').value);
    closeMenu();
}
function changeChartType(){
    destroyChart();
    renderChart(document.getElementById('year').value,document.getElementById('chartType').value);
}
function renderChart(selectedYear,chartType) {
    var phoneDataChart = document.getElementById("phone-Data-chart");
    phoneDataChart.innerHTML = '';
    if (window.screen.availWidth > 600) {
    var chartTitle = item[5];
    if (window.screen.availWidth < 600) {
        chartTitle = 'Cod: ' + item[1];
    }
    if(item[0].trim() != 'Cod') {
        console.log('Item not found!');
    } else {
        document.getElementById('optionsChart').style.display = "flex";
        var menu = document.getElementById('round-menu-v1');
        var txtC = getComputedStyle(menu);
        var data = [], currentDate = undefined,labels = [];
        
        Chart.defaults.global.defaultFontColor = '#ffffff';
        Chart.defaults.global.defaultColor = '#ffffff';
        Chart.defaults.global.defaultFontFamily = 'myFirstFont';
        
        for(var i = 9; i< item.length; i++) {
            let year = getYearOfElement(item[i]);
            let date = getDateOfElement(item[i]);
           
            if (!checkElementExists(item[i])) {
                break;
            }
            if(parseInt(year) > parseInt(selectedYear)){
                break;
            }
            if (currentDate == date || parseInt(year) < parseInt(selectedYear)) {
                continue;
            }

            let hour = getTimeOfElement(item[i]);
            let price = getPriceOfElement(item[i]);
            currentDate = date;
            let label = date + ' ' + hour;
            labels.push(label);
            data.push(price);
        }
        
        var ctx = document.getElementById('myChart').getContext('2d');
        chart  = new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: selectedYear,
                    data: data,
                    borderColor: 'rgba(255,255,255,1)',
                    backgroundColor: 'rgba(0,0,0,0.4)'
                }],
                
            },
            options: {
                title: {
                    display: true,
                    text: chartTitle
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 150,
                        bottom: 150
                    }
                },
                responsive: true
            }
        });
        chart.canvas.parentNode.style.height = '90%';
        chart.canvas.parentNode.style.width = '93%';
    }
    } else {
        destroyChart();
        currentDate = undefined;
        for(var i = 9; i < item.length; i++) {
            let year = getYearOfElement(item[i]);
            let date = getDateOfElement(item[i]);
           
            if (!checkElementExists(item[i])) {
                break;
            }
            if(parseInt(year) > parseInt(selectedYear)){
                break;
            }
            if (currentDate == date || parseInt(year) < parseInt(selectedYear)) {
                continue;
            }
            let fullDate = getFullDateOfElement(item[i]);
            let hour = getTimeOfElement(item[i]);
            let price = getPriceOfElement(item[i]);
            currentDate = date;
            phoneDataChart.insertAdjacentHTML('beforeend', '<div class="round-row round-shadow-default" style="margin-top: 5px;"><div class="round-col-12"><span>'+fullDate+' | '+hour+'</span></div><div class="round-col-12"><span>'+price+' RON</span></div></div>');
        }
    }
}

function destroyChart(){
    if (chart != undefined) {
        chart.destroy();
    }
}

function checkElementExists(element) {
    let x = element.split(' ');
    if (x[0] != undefined && x[1] != undefined && x[2] != undefined) {
        return true;
    } else{
        return false;
    }
}
function getFullDateOfElement(element) {
    let x = element.split(' ')[0].split('/');
    x = x[1]+'/'+x[0]+'/'+x[2];
    return x;
}
function getYearOfElement(element) {
    let x = element.split(' ')[0].split('/')[2];
    return x;
}
function getDateOfElement(element) {
    let x = element.split(' ')[0].split('/');
    x = x[1]+'/'+x[0];
    return x;
}

function getTimeOfElement(element) {
    let x = element.split(' ');
    x = x[1]+' '+x[2];
    return x;
}

function getPriceOfElement(element) {
    let x = element.split(' ')[3].replace('.','');
    return parseInt(x);
}

function closeNotification(){
    var phoneDataChart = document.getElementById("round-notification");
    phoneDataChart.innerHTML = '';
}
