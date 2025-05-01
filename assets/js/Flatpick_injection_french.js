 

const fp = flatpickr(document.querySelector('#flatpickr'), {
  altFormat: 'l J F Y',
  altInput: true,
  firstDayOfWeek: 1,
  locale: 'fr',
  defaultDate: new Date().getTime(),
  enableTime: true,
  enableSeconds: true,
  time_24hr: true,
  dateFormat: 'j-n-Y-H-i-S',

  onChange: function (selectedDates, dateStr, instance) {
    console.warn(`\n🚀 > dateStr:`, dateStr)

    const [day, month, year, hours, minutes, seconds] = dateStr.split('-')

    $('#daybox').val(day)
    $('#mosbox').val(month)
    $('#yearbox').val(year)
    $('#hrbox').val(hours)
    $('#mnbox').val(minutes)
    $('#scbox').val(seconds)
    inputsChanged()
  },
})
