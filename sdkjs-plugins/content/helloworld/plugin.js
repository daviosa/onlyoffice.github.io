(function (window, undefined) {
    var myBool = "1";
    window.Asc.plugin.init = function () {
        this.callCommand(function() {
            var oDocument = Api.GetDocument();
            var oParagraph = Api.CreateParagraph();
            oParagraph.AddText("Hello world! = " + myBool);
            oDocument.InsertContent([oParagraph]);
        }, true);
    };
    window.Asc.plugin.button = function (id) {
        myBool = myBool + myBool;
    };
})(window, undefined);
