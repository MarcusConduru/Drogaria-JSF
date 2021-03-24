function verificar(xhr, status, args, dlg, tbl) {
    if(args.validationFailed) {
        dlg.jq.effect("shake", {times:5}, 100);
    }
    else {
        dlg.hide();
        tbl.clearFilters();
    }
}
