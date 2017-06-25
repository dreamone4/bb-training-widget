

function initAccounts(widget) {
    
    // 1. Get widget preferences
    var widgetTitle = widget.getPreference('title');
    var dataSource = widget.getPreference('dataSource');
    dataSource = dataSource.replace('$(contextRoot)/', b$.portal.portalServer.serverURL);

    // 2. Render widget title
    var $widget = $(widget.body);
    $widget.find('.widgetTitle').html(widgetTitle);
    
    // 3. Retrieve accounts data
    $.getJSON(dataSource, renderList);

    // 4. Render list of accounts
    function renderList(data) {
        
        var html = '';
        $.each(data.accounts, function(index, account) {
            html += '<li class="list-group-item">' + account.name + ' - EUR ' + account.balance + '</li>';
        });

        $widget.find('.accountsList').html(html);
    }
}
