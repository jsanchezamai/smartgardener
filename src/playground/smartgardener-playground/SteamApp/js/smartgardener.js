var tag = 'ElectronPot',
  offlineTime = 120;

$('body').append($('<h1>').text(tag)).append('<h3>').append($("<div>", {
  "class": "kits"
}).text("Loading..."));

io.connect('wss://ws.smartcitizen.me').on('data-received', function(device) {
  
  if (device.name && device.name.includes(tag)) {
    console.log(tag)
    $('*[data-device="' + device.id + '"]').data('lastUpdate', device.last_reading_at)
      .data('sensorsData', device.data.sensors)
      .removeClass('offline').addClass('online').animateCss('bounce');
  } else {
    console.log(device.name);
  }
});

$.getJSON('https://api.smartcitizen.me/v0/devices/world_map', function(devices) {

  console.log(devices);
  $('.kits').empty();

  devices.filter(function(device) {
    return device && device.name && device.name.includes(tag);
  }).forEach(function(device) {
    $('.kits').append($("<div>", {
      "class": "device offline",
      "data-device": device.id
    }).click(function(){
      window.open('https://smartcitizen.me/kits/' + device.id, '_blank');
    }).text(device.name).append($("<div>", {
      "class": "status"
    }).text("waiting for the Kit to publish...")));
  });
});

update();

setInterval(function() {
  update();
}, 500);

function update() {

  var online = Math.ceil(($('.online').length / $('.device').length) * 100);

  online = (isNaN(online)) ? '' : ' (' + online + ' %)';

  $('h3').text($('.online').length + ' connected from ' + $('.device').length + online);

  $('.device').each(function(device) {
    var lastDeviceUpdate = $(this).data('lastUpdate');

    if (lastDeviceUpdate) {

      var sensorsData = $(this).data('sensorsData');
      var $status = $(this).find('.status');

      $status.html('last update ' + moment(lastDeviceUpdate).fromNow());

      if (sensorsData) {
        if (sensorsData.bat[1] > sensorsData.bat[2]) {
          $status.append(' and battery is charging at ' + sensorsData.bat[1] + '%');
        } else if (sensorsData.bat[1] >= 100) {
          $status.append(' and battery is fully charged');
        } else {
          $status.append(' and battery is ' + sensorsData.bat[1] + '%');
        }
      }

      if (new Date() - new Date(lastDeviceUpdate) > 1000 * offlineTime) {
        $(this).removeClass('online').addClass('offline').animateCss('bounce');
      }
    }
  });
}

$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});

moment.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: function(number, withoutSuffix, key, isFuture) {
      return (number < 10 ? '0' : '') + number + ' seconds';
    },
    m: "01:00 minutes",
    mm: function(number, withoutSuffix, key, isFuture) {
      return (number < 10 ? '0' : '') + number + ':00' + ' minutes';
    },
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
});