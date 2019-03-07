
function SmartGardener(target) {
  target = target || "#sensors";
}

SmartGardener.prototype.getReadings = function (device, sensor, callback) {
  $.getJSON('https://api.smartcitizen.me/v0/devices/'+ device.id + '/readings?sensor_id='+ sensor.id +'&rollup=4h&from=2018-08-28&to=2019-07-30' +  + '/readings', function(readings) {

    callback(readings);
  });
}

SmartGardener.prototype.getDevice = function (device, callback) {
  $.getJSON('https://api.smartcitizen.me/v0/devices/'+ device.id, function(deviceData) {

    callback(deviceData);
  });
}

SmartGardener.prototype.getDevice = function (device, callback) {
  $.getJSON('https://api.smartcitizen.me/v0/devices/'+ device.id, function(deviceData) {

    callback(deviceData);
  });
}

SmartGardener.prototype.onDevice = function (device, callback) {
  var self = this.target;
  $('.kits').append($("<div>", {
    "class": "device offline",
    "data-device": device.id
  }).click(() => {
    
    new SmartGardener().getDevice(device, deviceData => {
      deviceData.data.sensors.forEach((sensor, index) => {
        $("#sensor"+index).empty();
        var sc = new SmartGardener().getReadings(device, sensor, (readings) => {
          console.log(readings);
          var spiral = new Spiral("#sensor" + index, sensor, readings);
        })
      })
    })
  }).text(device.name).append($("<div>", {
    "class": "status"
  }).text("waiting for the Kit to publish...")));
}


/*
$.getJSON('https://api.smartcitizen.me/v0/devices/world_map', function(devices) {

  console.log(mapData.length);
  $('.kits').empty();

  devices.filter(function(device) {
    return device && device.name && device.name.includes(tag);
  }).forEach(function(device) {
    TILER.onDevice(device);
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
*/

var tag = 'ElectronPot',
  offlineTime = 120;

$('body').append($('<h1>').text(tag)).append('<h3>').append($("<div>", {
  "class": "kits"
}).text("Loading..."));

/*
io.connect('wss://ws.smartcitizen.me').on('data-received', function(device) {
  
  if (device.name && device.name.includes(tag)) {

    $('*[data-device="' + device.id + '"]').data('lastUpdate', device.last_reading_at)
      .data('sensorsData', device.data.sensors)
      .removeClass('offline').addClass('online').animateCss('bounce');
  } else {
    TILER.onMessage(device);
  }
});
*/
/*
$.getJSON('https://api.smartcitizen.me/v0/devices/world_map', function(devices) {

  console.log(mapData.length);
  $('.kits').empty();

  devices.filter(function(device) {
    return device && device.name && device.name.includes(tag);
  }).forEach(function(device) {
    TILER.onDevice(device);
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
*/

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
        $status.append(' Battery is ' + sensorsData[5].value + '%');        
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
