(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{L1EO:function(t,e,n){},n4uB:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("e+qc");new(function(){function t(t){var e=t.selector,n=t.targetDate;this.intervalId=null,this.targetDate=n,this.selector=e,this.timer=document.querySelector(e),this.days=document.querySelector(e+' [data-value="days"]'),this.hours=document.querySelector(e+' [data-value="hours"]'),this.mins=document.querySelector(e+' [data-value="mins"]'),this.secs=document.querySelector(e+' [data-value="secs"]')}var e=t.prototype;return e.start=function(){var t=this;this.timer&&(this.intervalId=setInterval((function(){t.currentTime=Date.now();var e=t.targetDate-t.currentTime;e<0?clearInterval(t.intervalId):t.updateTimerFace(t.getTimeComponent(e))}),1e3))},e.getTimeComponent=function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}},e.pad=function(t){return String(t).padStart(2,"0")},e.updateTimerFace=function(t){var e=t.days,n=t.hours,r=t.mins,a=t.secs;this.days.textContent=e,this.hours.textContent=n,this.mins.textContent=r,this.secs.textContent=a},t}())({selector:"#timer-1",targetDate:new Date("Jan 01, 2021")}).start()}},[["n4uB",0,1]]]);
//# sourceMappingURL=timer.b01de7bc214370e10d23.js.map