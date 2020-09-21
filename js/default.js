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
function renderChart(year,chartType) {
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
        var element = document.getElementById('round-menu-v1');
        var txtC = getComputedStyle(element);
        var data = [], currentDayMonth = '', currentDate = [],labels = [];
        Chart.defaults.global.defaultFontColor = '#ffffff';
        Chart.defaults.global.defaultColor = '#ffffff';
        Chart.defaults.global.defaultFontFamily = 'myFirstFont';
        for(var i = 9; i< item.length; i++) {
            let element = item[i].split(' ');
            currentDate = element[0].split('/');
            if (element == '') {
                break;
            }

            if (currentDayMonth == '') {
                currentDayMonth = currentDate[1]+'/'+currentDate[0];
                let label = currentDate[1]+'/'+currentDate[0]+' '+element[1]+' '+element[2];
                labels.push(label);
                data.push(parseInt(item[i].split(' ')[3].replace('.','')));
            }else if (currentDayMonth == currentDate[1]+'/'+currentDate[0] || parseInt(currentDate[2]) < parseInt(year)) {
                continue;
            } else if(parseInt(currentDate[2]) > parseInt(year)){
                break;
            } else if(currentDayMonth != currentDate[1]+'/'+currentDate[0]) {
                let label = currentDate[1]+'/'+currentDate[0]+' '+element[1]+' '+element[2];
                labels.push(label);
                 data.push(parseInt(item[i].split(' ')[3]).replace('.',''));
            } 
        }
        
        var ctx = document.getElementById('myChart').getContext('2d');
        chart  = new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: year,
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
        for(var i = 9; i< item.length; i++) {
            let element = item[i].split(' ');
            phoneDataChart.insertAdjacentHTML('beforeend', '<div class="round-row round-shadow-default" style="margin-top: 5px;"><div class="round-col-12"><span>'+element[0]+' | '+element[1]+' '+element[2]+'</span></div><div class="round-col-12"><span>'+element[3]+' '+element[4]+'</span></div></div>');
        }
    }
}

function destroyChart(){
    if (chart != undefined) {
        chart.destroy();
    }
}
