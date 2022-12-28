define([],function(){
  let voucherStatus = {"CREATED" : "CREATED",
                       "Redeemed" : "REDEEMED",
                       "Unutilised" : "UNUTILISED",
                       "Cancelled" : "CANCELLED",
                       "Expired" : "EXPIRED",
                       "All" : "All"
                      };
  let selectedStatus = "",startDate = "",endDate = "";
  return {
    onPreShow: function() {
      var self = this;
      selectedStatus = "";
      startDate = "";
      this.view.flxSegStatus.isVisible = false;
      this.view.txtSearchVoucher.text = "";
      this.view.CalenderStartDate.text = "";
      this.view.CalenderEndDate.text = "";
      this.view.btnDownloadVoucher.onClick = function() {
        self.view.brwsExcel.evaluateJavaScript("exportJsonToXLSX()");
      };
      this.view.btnSelectStatus.onClick = function() {
        if(self.view.flxSegStatus.isVisible) {
          self.view.flxSegStatus.isVisible = false;
        } else {
          self.view.flxSegStatus.isVisible = true;  
        }
      };
      this.view.segStatus.onRowClick = function(eventId) {
        kony.print("event :: "+JSON.stringify(eventId.selectedRowItems[0]));
        selectedStatus = voucherStatus[eventId.selectedRowItems[0].lblUserName];
        kony.print("selectedStatus :: "+selectedStatus);
        self.view.flxSegStatus.isVisible = false;
      };
      this.view.CalenderStartDate.onSelection = function(eventId) {
        let day = self.view.CalenderStartDate.day;
        let month = self.view.CalenderStartDate.month;
        let year = self.view.CalenderStartDate.year;
        startDate = year+"-"+month+"-"+day;
      };
      this.view.CalenderEndDate.onSelection = function(eventId) {
        let day = self.view.CalenderEndDate.day;
        let month = self.view.CalenderEndDate.month;
        let year = self.view.CalenderEndDate.year;
        endDate = year+"-"+month+"-"+day;
      };
    }
  };
});