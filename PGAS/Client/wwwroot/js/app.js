function initSideBarToggle() {
    setTimeout(function () {
        var sidebarToggleActivate = setInterval(function () {
            if ($("#sidebar").length) {
                clearInterval(sidebarToggleActivate);
                console.log("Sidebar initialized...");

                $("#sidebarCollapse").on('click', function () {
                    $("#sidebar").toggleClass('active');
                });
            }
        }, 100);
    }, 100);
}