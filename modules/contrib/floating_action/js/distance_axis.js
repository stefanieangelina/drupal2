(function ($, Drupal) {
  Drupal.behaviors.adjustDistance = {
    attach: function (context, settings) {
      $('#edit-actions').css(settings.axis_distance);
    }
  };
})(jQuery, Drupal);
