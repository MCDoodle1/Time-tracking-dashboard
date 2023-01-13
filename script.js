let data =
[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]



let day = document.querySelector('.container__daily');
let week = document.querySelector('.container__weekly');
let month = document.querySelector('.container__monthly');

let timeSpentThisPeriod = document.querySelectorAll('.container__hours')
let timeSpentLastPeriod = document.querySelectorAll('.container__last')
let weeklyLink = document.getElementsByClassName('container__weekly__link')

function removeHover() {
  for ( var i = 0; i < weeklyLink.length; i++ ) {
    weeklyLink[i].classList.remove( 'container__period--active' );
  }
}

day.addEventListener('click', showDay);
week.addEventListener('click', showWeek);
month.addEventListener('click', showMonth);

function showDay() { 
  removeHover();
  timeSpentThisPeriod[0].innerHTML = `${data[0].timeframes.daily.current}hrs`;
  timeSpentLastPeriod[0].innerHTML = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;
  timeSpentThisPeriod[1].innerHTML = `${data[1].timeframes.daily.current}hrs`;
  timeSpentLastPeriod[1].innerHTML = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
  timeSpentThisPeriod[2].innerHTML = `${data[2].timeframes.daily.current}hrs`;
  timeSpentLastPeriod[2].innerHTML = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;   
  timeSpentThisPeriod[3].innerHTML = `${data[3].timeframes.daily.current}hrs`;
  timeSpentLastPeriod[3].innerHTML = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;    
  timeSpentThisPeriod[4].innerHTML = `${data[4].timeframes.daily.current}hrs`;
  timeSpentLastPeriod[4].innerHTML = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;    
  timeSpentThisPeriod[5].innerHTML = `${data[5].timeframes.daily.current}hrs`;
  timeSpentLastPeriod[5].innerHTML = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;        
};
    
function showWeek() { 
  timeSpentThisPeriod[0].innerHTML = `${data[0].timeframes.weekly.current}hrs`;
  timeSpentLastPeriod[0].innerHTML = `Last week - ${data[0].timeframes.weekly.previous}hrs`;
  timeSpentThisPeriod[1].innerHTML = `${data[1].timeframes.weekly.current}hrs`;
  timeSpentLastPeriod[1].innerHTML = `Last week - ${data[1].timeframes.weekly.previous}hrs`;
  timeSpentThisPeriod[2].innerHTML = `${data[2].timeframes.weekly.current}hrs`;
  timeSpentLastPeriod[2].innerHTML = `Last week - ${data[2].timeframes.weekly.previous}hrs`;   
  timeSpentThisPeriod[3].innerHTML = `${data[3].timeframes.weekly.current}hrs`;
  timeSpentLastPeriod[3].innerHTML = `Last week - ${data[3].timeframes.weekly.previous}hrs`;    
  timeSpentThisPeriod[4].innerHTML = `${data[4].timeframes.weekly.current}hrs`;
  timeSpentLastPeriod[4].innerHTML = `Last week - ${data[4].timeframes.weekly.previous}hrs`;    
  timeSpentThisPeriod[5].innerHTML = `${data[5].timeframes.weekly.current}hrs`;
  timeSpentLastPeriod[5].innerHTML = `Last week - ${data[5].timeframes.weekly.previous}hrs`;        
};  

function showMonth() { 
  removeHover();
  timeSpentThisPeriod[0].innerHTML = `${data[0].timeframes.monthly.current}hrs`;
  timeSpentLastPeriod[0].innerHTML = `Last month - ${data[0].timeframes.monthly.previous}hrs`;
  timeSpentThisPeriod[1].innerHTML = `${data[1].timeframes.monthly.current}hrs`;
  timeSpentLastPeriod[1].innerHTML = `Last month - ${data[1].timeframes.monthly.previous}hrs`;
  timeSpentThisPeriod[2].innerHTML = `${data[2].timeframes.monthly.current}hrs`;
  timeSpentLastPeriod[2].innerHTML = `Last month - ${data[2].timeframes.monthly.previous}hrs`;   
  timeSpentThisPeriod[3].innerHTML = `${data[3].timeframes.monthly.current}hrs`;
  timeSpentLastPeriod[3].innerHTML = `Last month - ${data[3].timeframes.monthly.previous}hrs`;    
  timeSpentThisPeriod[4].innerHTML = `${data[4].timeframes.monthly.current}hrs`;
  timeSpentLastPeriod[4].innerHTML = `Last month - ${data[4].timeframes.monthly.previous}hrs`;    
  timeSpentThisPeriod[5].innerHTML = `${data[5].timeframes.monthly.current}hrs`;
  timeSpentLastPeriod[5].innerHTML = `Last month - ${data[5].timeframes.monthly.previous}hrs`;        
};  