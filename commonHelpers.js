import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l}from"./assets/vendor-77e16229.js";const e={btnTimerStart:document.querySelector("[data-start]"),daysRef:document.querySelector("[data-days]"),hoursRef:document.querySelector("[data-hours]"),minutesRef:document.querySelector("[data-minutes]"),secondsRef:document.querySelector("[data-seconds]")},m=l("#datetime-picker",f);e.btnTimerStart.addEventListener("click",y);e.btnTimerStart.disabled=!0;let s=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=new Date;t[0]-n>0?e.btnTimerStart.disabled=!1:(e.btnTimerStart.disabled=!0,Notify.failure("Please choose a date in the future",{timeout:1500,width:"400px"}))}};function h(t){const i=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:d,minutes:c,seconds:u}}function o(t){return String(t).padStart(2,0)}function y(){const t=m.selectedDates[0];s=setInterval(()=>{const r=t-new Date;if(e.btnTimerStart.disabled=!0,r<0){clearInterval(s);return}S(h(r))},1e3)}function S({days:t,hours:n,minutes:r,seconds:a}){e.timerFieldDays.textContent=o(t),e.timerFielHours.textContent=o(n),e.timerFieldMinutes.textContent=o(r),e.timerFieldSeconds.textContent=o(a)}
//# sourceMappingURL=commonHelpers.js.map
