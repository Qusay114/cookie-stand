'use strict';

//to generate a random function
function randomNumber(min,max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//to create a table element with dynamic number of cells and headers , note: the container should be passed as a id for the element
function createTable(container,id,rowNum , coloumnNum , headerRow)
{
  let rowElements = []; //this array to hold the row elements
  let rowColElements = []; //this array to hold the coloumn elements
  const tableEl = document.createElement('table');
  tableEl.id = id;
  const Container = document.getElementById(container);
  Container.appendChild(tableEl);
  for(let r = 0 ; r < rowNum ; r++ )
  {
    rowElements.push(document.createElement('tr'));
    tableEl.appendChild(rowElements[r]);
    rowColElements.push([]); //here I push empty array so I can fill data as 2-D array
    for(let c = 0 ; c < coloumnNum ; c++)
    {
      if(r===0 && headerRow === true) //here I check if it wants a header in the first row or not
      {
        rowColElements[r].push(document.createElement('th'));
        rowElements[r].appendChild(rowColElements[r][c]);
      }
      else
      {
        rowColElements[r].push(document.createElement('td'));
        rowElements[r].appendChild(rowColElements[r][c]);
      }
    }
  }
  return rowColElements;
}


let objList = [];
//to create an object for daily data store where every hour has its number of purchases for each loaction (seattle , tokyo , ...)
function DailyData(location,minCustPH , maxCustPH , averageCperC , startHour , endHour)
{
  this.location = location;
  this.minCustPH = minCustPH;
  this.maxCustPH = maxCustPH;
  this.averageCperC = averageCperC;
  this.startHour = startHour;
  this.endHour = endHour;
  this.salesPH = [];
  this.custPH = [];
  this.totalSales = 0;
  objList.push(this);
}

//to create a method for DailyData object that will fill the data of purchases for each hour and sum the total
DailyData.prototype.fillData = function()
{
  for(let i = 0; i <= this.endHour-this.startHour ; i++)
  {
    this.custPH.push((randomNumber(this.minCustPH,this.maxCustPH)) );
    this.salesPH.push(Math.floor(this.custPH[i]*this.averageCperC));
    this.totalSales = this.totalSales + this.salesPH[i];
  }
};

//to create a method to show the data on the page where will create html element and put the data we got from fillData method
DailyData.prototype.showData = function ()
{
  const container = document.getElementById('container');
  const locationName = document.createElement('h3');
  container.appendChild(locationName);
  locationName.textContent = `${this.location} daily data :`;
  const ulElement = document.createElement('ul');
  container.appendChild(ulElement);
  let counter = this.startHour;
  for(let i = 0; i <this.salesPH.length; i++)
  {
    const listItem = document.createElement('li');
    ulElement.appendChild(listItem);
    if(counter<12)
      listItem.textContent = `${counter}am: ${this.salesPH[i]} cookies`;
    else if(counter===12)
      listItem.textContent = `${counter}pm: ${this.salesPH[i]} cookies`;
    else
      listItem.textContent = `${counter-12}pm: ${this.salesPH[i]} cookies`;
    counter ++ ;
  }
  const listItem = document.createElement('li');
  ulElement.appendChild(listItem);
  listItem.textContent = `Total: ${this.totalSales} cookies`;
};


//to create instances and give for each of them arguemnts fit with the location , then use the fill data and show data methods to fill and show the data on the page
const Seattle = new DailyData('Seattle',23,65,6.3,6,19);
Seattle.fillData();

const Tokyo = new DailyData('Tokyo',3,24,1.2,6,19);
Tokyo.fillData();

const Dubai = new DailyData('Dubai',11,38,3.7,6,19);
Dubai.fillData();

const Paris = new DailyData('Paris',20,38,2.3,6,19);
Paris.fillData();

const Lima = new DailyData('Lima',2,16,4.6,6,19);
Lima.fillData();

showData();//to show the data on the table

//to create a table then fill it with data of the instances
function showData()
{
  const cells = createTable('container','dailyDataTable',objList.length+2,16,true); //here is the syntax : createTable(container,id,rows,coloumns,Do you want a header row ?)
  let counter = 5;//this less than start hour by -1 because I left an empty cell before start putting the hours
  let endH = 19;
  let sumdailyTotal = 0;
  let sumHourlyTotal = 0;
  cells[0][0].textContent='';
  for(let c = 0 ; c<16; c++)
  {
  //to fill the row of hours
    if(counter<12 && c !== 0)
    {
      cells[0][c].textContent = `${counter} am`;
    }
    else if(counter === 12 && c !== 0)
    {
      cells[0][c].textContent = `${counter} pm`;
    }
    else if(counter <= endH && c !== 0)
    {
      cells[0][c].textContent = `${counter - 12} pm`;
    }
    counter ++ ;

    //to fill the data of each location with its purchase cookies per hour
    if(c<14)
    {
      sumHourlyTotal=0;
      for(let i = 1 ; i<=objList.length; i++)
      {
        cells[i][c+1].textContent = objList[i-1].salesPH[c];

        sumHourlyTotal = sumHourlyTotal + objList[i-1].salesPH[c];
      }
      cells[objList.length+1][0].textContent = 'Total';
      cells[objList.length+1][c+1].textContent = sumHourlyTotal ;
      sumdailyTotal = sumdailyTotal + sumHourlyTotal;
    }

    //to fill the location name and the total sales of the day for each location
    if(c<objList.length)
    {
      cells[c+1][0].textContent = objList[c].location;
      cells[c+1][15].textContent = objList[c].totalSales;
    }
  }
  cells[0][15].textContent = 'Daily Location Total';
  cells[objList.length+1][15].textContent = sumdailyTotal; //the total daily of the total hourly for all locations
}


let dataform = document.getElementById('salesForm');
dataform.addEventListener('submit',addLocation);
//this function to git the data for the location on the form and call the showData function to put it on the table
function addLocation(event)
{
  event.preventDefault();
  const city = event.target.city.value ;
  const minCus = event.target.minCus.value ;
  const maxCus = event.target.maxCus.value ;
  const averageSales = Number(event.target.avgSales.value);
  const newLocation = new DailyData(city,minCus,maxCus,averageSales,6,19);
  dataform.reset();
  newLocation.fillData();
  document.getElementById('dailyDataTable').remove();
  showData();
}
