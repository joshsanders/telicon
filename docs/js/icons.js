$(document).ready(function() {

    var icons = [
        'account-tree',
        'address-book',
        'apps',
        'arrow-down--circle-o',
        'arrow-down--circle',
        'arrow-down',
        'arrow-from-bottom',
        'arrow-from-left',
        'arrow-from-right',
        'arrow-from-top',
        'arrow-left--circle-o',
        'arrow-left--circle',
        'arrow-left',
        'arrow-right--circle-o',
        'arrow-right--circle',
        'arrow-right',
        'arrow-target-down',
        'arrow-target-left',
        'arrow-target-right',
        'arrow-target-up',
        'arrow-up--circle-o',
        'arrow-up--circle',
        'arrow-up',
        'assign',
        'available-balance',
        'avatar--badge',
        'avatar--circle',
        'backspace',
        'bar-graph--square',
        'bar-graph',
        'bell-slash',
        'bell',
        'billing',
        'book',
        'bookmark',
        'bug',
        'bullhorn',
        'calendar-minus',
        'calendar-plus',
        'calendar',
        'cancel',
        'caret-down',
        'caret-left',
        'caret-right',
        'caret-up',
        'carets-sortable',
        'check',
        'check--circle-o',
        'check--circle',
        'chevron-double-down',
        'chevron-double-left',
        'chevron-double-right',
        'chevron-double-up',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'clock',
        'comment-dots',
        'comment',
        'copy',
        'comments',
        'credit-card-plus',
        'credit-card',
        'dashboard-grid',
        'db-storage',
        'device-ata',
        'device-fax',
        'device-mobile',
        'device-soft-phone',
        'device-sprint-phone',
        'device-tablet',
        'device-voip-phone',
        'dot',
        'downgrade',
        'download-cloud',
        'download',
        'drag-handle',
        'ear',
        'edit',
        'ellipses',
        'enter',
        'exit',
        'extension',
        'eye',
        'eye-slash',
        'failover',
        'file-o',
        'file',
        'flag',
        'folder',
        'folder-check',
        'folder-group',
        'folder-minus',
        'folder-open',
        'folder-plus',
        'folder-star',
        'forward',
        'funnel',
        'global',
        'headphones-slash',
        'headphones',
        'home',
        'info--circle-o',
        'info--circle',
        'ip-address',
        'layers--2',
        'layers--3',
        'lightbulb',
        'lightbulb-slash',
        'lightning-bolt',
        'link',
        'list-prioritize',
        'list',
        'location-pin',
        'location-scope',
        'lock-open',
        'lock',
        'mail',
        'main-office',
        'mic-slash',
        'mic',
        'minus--circle-o',
        'minus--circle',
        'minus',
        'move-file',
        'multiple-items',
        'music-note',
        'num-pad',
        'number',
        'operator',
        'paper-clip',
        'paper-plane',
        'park--circle-o',
        'park--circle',
        'pause--circle-o',
        'pause--circle',
        'pbx',
        'phone',
        'phone-answer',
        'phone-hangup',
        'phone-inbound',
        'phone-missed',
        'phone-outbound',
        'phone-slash',
        'pie-chart--25',
        'pie-chart--50',
        'pie-chart--75',
        'pie-chart--100',
        'play--circle-o',
        'play--circle',
        'plus--circle-o',
        'plus--circle',
        'plus',
        'porting',
        'power',
        'puzzle-piece',
        'question--circle-o',
        'question--circle',
        'refresh-alt',
        'refresh',
        'search',
        'server',
        'service-plan',
        'service-provider',
        'setting-cog-double',
        'setting-cog',
        'shopping-cart',
        'speaking',
        'star',
        'stop--circle',
        'tag',
        'terminal',
        'thumbs-down',
        'thumbs-up',
        'trash-x',
        'trash',
        'two-way',
        'unassign',
        'upgrade',
        'upload-cloud',
        'upload',
        'user-admin-plus',
        'user-admin',
        'user-group-admin',
        'user-group',
        'user-plus',
        'user',
        'video',
        'video-slash',
        'voicemail',
        'volume-1',
        'volume-2',
        'volume-slash',
        'volume-x',
        'warning--circle',
        'warning--circle-o',
        'warning--octagon',
        'warning--triangle-o',
        'warning--triangle',
        'x--circle-o',
        'x--circle',
        'x--octagon',
        'x',
    ];

    $.each(icons, function(index, value) {
        // $('.js-populate-icons-list').append('<div class="grid__col md:col--4 lg:col--3"><div class="icon-container" data-clipboard-text="' + value + '"><i class="'+ value +'" aria-hidden="true"></i><span>' + value + '</span></div></div>');
        $('.js-populate-icons-list').append(
            '<div class="grid__col md:col--4 lg:col--3"><div class="icon-container" data-clipboard-text="' + value + '"><svg class="icon"><use xlink:href="img/telicon.svg#'+ value +'" /></svg><span>' + value + '</span></div></div>');
    });
});
