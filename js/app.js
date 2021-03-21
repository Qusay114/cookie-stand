'use strict';

function randomNumber(min,max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattleData  =
{
  minCust:23,
  maxCust:65,
  averageCperC:6.3,
  startHour:6,
  endHour:19,
  salesPH : [],
  totalSales:0,
  fillData : function()
  {
    for(let i = 0; i <= this.endHour-this.startHour ; i++)
    {
      console.log(randomNumber(this.minCust,this.maxCust));
      this.salesPH.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.averageCperC));
    }
  },
  showData : function()
  {
    const container = document.getElementById('container');
    const locationName = document.createElement('h3');
    container.appendChild(locationName);
    locationName.textContent = 'Seatle daily data :';
    const ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    let counter = this.startHour;
    for(let i = 0; i <this.salesPH.length; i++)
    {
      this.totalSales = this.totalSales + this.salesPH[i];
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
  }

};


seattleData.fillData();
seattleData.showData();


const tokyoData  =
{
  minCust:3,
  maxCust:24,
  averageCperC:1.2,
  startHour:6,
  endHour:19,
  salesPH : [],
  totalSales:0,
  fillData : function()
  {
    for(let i = 0; i <= this.endHour-this.startHour ; i++)
    {
      console.log(randomNumber(this.minCust,this.maxCust));
      this.salesPH.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.averageCperC));
    }
  },
  showData : function()
  {
    const container = document.getElementById('container');
    const locationName = document.createElement('h3');
    container.appendChild(locationName);
    locationName.textContent = 'Tokyo daily data :';
    const ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    let counter = this.startHour;
    for(let i = 0; i <this.salesPH.length; i++)
    {
      this.totalSales = this.totalSales + this.salesPH[i];
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
  }

};


tokyoData.fillData();
tokyoData.showData();


const dubaiData  =
{
  minCust:11,
  maxCust:38,
  averageCperC:3.7,
  startHour:6,
  endHour:19,
  salesPH : [],
  totalSales:0,
  fillData : function()
  {
    for(let i = 0; i <= this.endHour-this.startHour ; i++)
    {
      console.log(randomNumber(this.minCust,this.maxCust));
      this.salesPH.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.averageCperC));
    }
  },
  showData : function()
  {
    const container = document.getElementById('container');
    const locationName = document.createElement('h3');
    container.appendChild(locationName);
    locationName.textContent = 'Dubai daily data :';
    const ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    let counter = this.startHour;
    for(let i = 0; i <this.salesPH.length; i++)
    {
      this.totalSales = this.totalSales + this.salesPH[i];
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
  }

};


dubaiData.fillData();
dubaiData.showData();


const parisData  =
{
  minCust:20,
  maxCust:38,
  averageCperC:2.3,
  startHour:6,
  endHour:19,
  salesPH : [],
  totalSales:0,
  fillData : function()
  {
    for(let i = 0; i <= this.endHour-this.startHour ; i++)
    {
      console.log(randomNumber(this.minCust,this.maxCust));
      this.salesPH.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.averageCperC));
    }
  },
  showData : function()
  {
    const container = document.getElementById('container');
    const locationName = document.createElement('h3');
    container.appendChild(locationName);
    locationName.textContent = 'Paris daily data :';
    const ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    let counter = this.startHour;
    for(let i = 0; i <this.salesPH.length; i++)
    {
      this.totalSales = this.totalSales + this.salesPH[i];
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
  }

};


parisData.fillData();
parisData.showData();


const limaData  =
{
  minCust:2,
  maxCust:16,
  averageCperC:4.6,
  startHour:6,
  endHour:19,
  salesPH : [],
  totalSales:0,
  fillData : function()
  {
    for(let i = 0; i <= this.endHour-this.startHour ; i++)
    {
      console.log(randomNumber(this.minCust,this.maxCust));
      this.salesPH.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.averageCperC));
    }
  },
  showData : function()
  {
    const container = document.getElementById('container');
    const locationName = document.createElement('h3');
    container.appendChild(locationName);
    locationName.textContent = 'Lima daily data :';
    const ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    let counter = this.startHour;
    for(let i = 0; i <this.salesPH.length; i++)
    {
      this.totalSales = this.totalSales + this.salesPH[i];
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
  }

};


limaData.fillData();
limaData.showData();
